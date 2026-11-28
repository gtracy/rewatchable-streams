import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const require = createRequire(import.meta.url);

// Stub streaming-availability before loading utils/streams.js.
const mockGetShow = vi.fn();
const configCalls = [];
const clientCalls = [];

const streamingAvailabilityPath = require.resolve('streaming-availability');
require.cache[streamingAvailabilityPath] = {
  id: streamingAvailabilityPath,
  filename: streamingAvailabilityPath,
  loaded: true,
  exports: {
    Configuration: class MockConfiguration {
      constructor(opts) {
        this.opts = opts;
        configCalls.push(opts);
      }
    },
    Client: class MockClient {
      constructor(cfg) {
        this.cfg = cfg;
        clientCalls.push(cfg);
        this.showsApi = { getShow: mockGetShow };
      }
    },
  },
};

process.env.LOG_LEVEL = 'silent';

const fixtures = require('../../test/fixtures');
const { fetchStream, filterServices, logger } = require('../streams');

const ddbMock = mockClient(DynamoDBDocumentClient);
const sampleShowDetails = fixtures.loadSample('streamingDetails.json');
const sampleStreamEntry = fixtures.loadSample('stream-entry.json');

describe('utils/streams.js fetchStream', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    ddbMock.reset();
    mockGetShow.mockReset();
    configCalls.length = 0;
    clientCalls.length = 0;
    process.env.MOVIE_OF_THE_NIGHT_API_KEY = 'test-motn-key';
    process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'test-movie-streams';
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env = { ...originalEnv };
  });

  it('fetches show details, filters US streaming options, and saves the transformed item to DynamoDB', async () => {
    const showWithStreams = {
      ...sampleShowDetails,
      streamingOptions: {
        us: [
          sampleStreamEntry,
          {
            ...sampleStreamEntry,
            type: 'buy',
            price: { amount: '14.99', currency: 'USD', formatted: '14.99 USD' },
          },
          {
            service: { id: 'netflix', name: 'Netflix' },
            type: 'subscription',
            link: 'https://www.netflix.com/title/115',
          },
        ],
      },
    };
    mockGetShow.mockResolvedValue(showWithStreams);
    ddbMock.on(PutCommand).resolves({});

    await fetchStream(115);

    expect(configCalls).toEqual([{ apiKey: 'test-motn-key' }]);
    expect(clientCalls).toHaveLength(1);
    expect(mockGetShow).toHaveBeenCalledWith({ id: 'movie/115' });

    const putCalls = ddbMock.commandCalls(PutCommand);
    expect(putCalls).toHaveLength(1);
    const putInput = putCalls[0].args[0].input;
    expect(putInput.TableName).toBe('test-movie-streams');
    expect(putInput.Item).toMatchObject({
      id: sampleShowDetails.id,
      imdb_id: sampleShowDetails.imdbId,
      tmdb_id: 115,
      title: sampleShowDetails.title,
      overview: sampleShowDetails.overview,
      releaseYear: sampleShowDetails.releaseYear,
      directors: sampleShowDetails.directors,
      cast: sampleShowDetails.cast,
      imageSet: sampleShowDetails.imageSet.verticalPoster.w240,
      gsi_pk: 'ALL_MOVIES',
    });
    expect(putInput.Item.last_updated).toBeTruthy();
    expect(putInput.Item.streamingOptions).toHaveLength(2);
    const appleOption = putInput.Item.streamingOptions.find((s) => s.service.id === 'apple');
    expect(appleOption.type).toBe('rent');
    const netflixOption = putInput.Item.streamingOptions.find((s) => s.service.id === 'netflix');
    expect(netflixOption.type).toBe('subscription');
  });

  it('skips DynamoDB PutCommand when US streaming options are absent or empty to avoid clobbering existing streams', async () => {
    const warnSpy = vi.spyOn(logger, 'warn');
    const showWithoutUS = {
      ...sampleShowDetails,
      streamingOptions: {
        gb: [sampleStreamEntry],
      },
    };
    mockGetShow.mockResolvedValueOnce(showWithoutUS);
    mockGetShow.mockResolvedValueOnce({
      ...sampleShowDetails,
      streamingOptions: { us: [] },
    });
    ddbMock.on(PutCommand).resolves({});

    await fetchStream(115);
    await fetchStream(116);

    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledTimes(2);
  });

  it('catches streaming API errors with sanitized pino context without throwing or writing to DynamoDB', async () => {
    const errorSpy = vi.spyOn(logger, 'error');
    const apiErr = new Error('429 Too Many Requests');
    apiErr.response = { status: 429, headers: { authorization: 'Bearer secret-token' } };
    mockGetShow.mockRejectedValue(apiErr);

    await expect(fetchStream(115)).resolves.toBeUndefined();
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
    expect(errorSpy).toHaveBeenCalledWith(
      {
        tmdbId: 115,
        errorName: 'Error',
        errorMessage: '429 Too Many Requests',
        statusCode: 429,
      },
      'Error fetching streaming details'
    );
    expect(JSON.stringify(errorSpy.mock.calls)).not.toContain('secret-token');
  });

  it('catches DynamoDB PutCommand errors without throwing', async () => {
    mockGetShow.mockResolvedValue({
      ...sampleShowDetails,
      streamingOptions: { us: [sampleStreamEntry] },
    });
    ddbMock.on(PutCommand).rejects(new Error('DynamoDB write failed'));

    await expect(fetchStream(115)).resolves.toBeUndefined();
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(1);
  });

  it('safely handles API responses missing imageSet when US streaming options exist', async () => {
    mockGetShow.mockResolvedValue({
      id: '266',
      title: 'Partial Payload',
      imageSet: null,
      streamingOptions: { us: [sampleStreamEntry] },
    });
    ddbMock.on(PutCommand).resolves({});

    await expect(fetchStream(115)).resolves.toBeUndefined();
    const putCalls = ddbMock.commandCalls(PutCommand);
    expect(putCalls).toHaveLength(1);
    expect(putCalls[0].args[0].input.Item.imageSet).toBeUndefined();
    expect(putCalls[0].args[0].input.Item.streamingOptions).toHaveLength(1);
    expect(putCalls[0].args[0].input.Item.tmdb_id).toBe(115);
  });

  it('safely handles API responses with null streamingOptions without writing to DynamoDB', async () => {
    mockGetShow.mockResolvedValue({
      id: '266',
      title: 'Partial Payload',
      imageSet: null,
      streamingOptions: null,
    });
    ddbMock.on(PutCommand).resolves({});

    await expect(fetchStream(115)).resolves.toBeUndefined();
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
  });

  it('safely handles null API response without writing to DynamoDB', async () => {
    mockGetShow.mockResolvedValue(null);

    await expect(fetchStream(115)).resolves.toBeUndefined();
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
  });
});

describe('utils/streams.js filterServices', () => {
  it('returns an empty array for empty input', () => {
    expect(filterServices([])).toEqual([]);
  });

  it('deduplicates by service.id and prioritizes subscription over rent and buy', () => {
    const services = [
      { service: { id: 'prime' }, type: 'buy', link: 'buy-link' },
      { service: { id: 'prime' }, type: 'rent', link: 'rent-link' },
      { service: { id: 'prime' }, type: 'subscription', link: 'sub-link' },
    ];
    const result = filterServices(services);
    expect(result).toHaveLength(1);
    expect(result[0].type).toBe('subscription');
    expect(result[0].link).toBe('sub-link');
  });

  it('prioritizes rent over buy regardless of input order', () => {
    const buyFirst = filterServices([
      { service: { id: 'apple' }, type: 'buy' },
      { service: { id: 'apple' }, type: 'rent' },
    ]);
    expect(buyFirst).toHaveLength(1);
    expect(buyFirst[0].type).toBe('rent');

    const rentFirst = filterServices([
      { service: { id: 'apple' }, type: 'rent' },
      { service: { id: 'apple' }, type: 'buy' },
    ]);
    expect(rentFirst).toHaveLength(1);
    expect(rentFirst[0].type).toBe('rent');
  });

  it('keeps distinct services separate', () => {
    const services = [
      { service: { id: 'apple' }, type: 'rent' },
      { service: { id: 'netflix' }, type: 'subscription' },
      { service: { id: 'prime' }, type: 'buy' },
    ];
    const result = filterServices(services);
    expect(result).toHaveLength(3);
    expect(result.map((s) => s.service.id)).toEqual(['apple', 'netflix', 'prime']);
  });

  it('prefers known type over unknown type and does not overwrite known type with unknown type', () => {
    const unknownThenKnown = filterServices([
      { service: { id: 'hulu' }, type: 'addon' },
      { service: { id: 'hulu' }, type: 'buy' },
    ]);
    expect(unknownThenKnown[0].type).toBe('buy');

    const knownThenUnknown = filterServices([
      { service: { id: 'hulu' }, type: 'buy' },
      { service: { id: 'hulu' }, type: 'addon' },
    ]);
    expect(knownThenUnknown[0].type).toBe('buy');
  });

  it('preserves the first entry when both entries have unknown types', () => {
    const result = filterServices([
      { service: { id: 'tubi' }, type: 'free', link: 'first' },
      { service: { id: 'tubi' }, type: 'addon', link: 'second' },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].link).toBe('first');
  });
});
