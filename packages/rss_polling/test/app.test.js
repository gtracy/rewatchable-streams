import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';
import path from 'path';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const require = createRequire(import.meta.url);

process.env.LOG_LEVEL = 'silent';

const axios = require('axios');
const Parser = require('rss-parser');
const fixtures = require('../../../test/fixtures');
const app = require('../app');
const appLambda = require('../app-lambda');

const ddbMock = mockClient(DynamoDBDocumentClient);
const sampleMovieDetails = fixtures.loadSample('tmdb-movie.json');

function makeEpisode(overrides = {}) {
  return {
    title: '‘Star Wars’ With Bill Simmons, Chris Ryan, and Sean Fennessey',
    guid: 'guid-star-wars-1',
    pubDate: 'Tue, 06 May 2025 04:05:00 GMT',
    content: 'Episode description for Star Wars.',
    enclosure: { url: 'https://traffic.megaphone.fm/star-wars.mp3' },
    ...overrides,
  };
}

describe('packages/rss_polling/app.js', () => {
  const originalEnv = { ...process.env };
  let parseURLSpy;
  let axiosGetSpy;
  let consoleLogSpy;
  let loggerInfoSpy;
  let loggerErrorSpy;

  beforeEach(() => {
    ddbMock.reset();
    process.env.TMDB_API_KEY = 'test-tmdb-key';
    process.env.DYNAMO_PODCAST_MOVIES_TABLE = 'test-podcast-movies';
    parseURLSpy = vi.spyOn(Parser.prototype, 'parseURL');
    axiosGetSpy = vi.spyOn(axios, 'get');
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    loggerInfoSpy = vi.spyOn(app.logger, 'info');
    loggerErrorSpy = vi.spyOn(app.logger, 'error');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env = { ...originalEnv };
  });

  it('exits early without calling RSS, TMDB, or DynamoDB when TMDB_API_KEY is missing', async () => {
    delete process.env.TMDB_API_KEY;

    const result = await app.handler({});

    expect(result).toBeUndefined();
    expect(parseURLSpy).not.toHaveBeenCalled();
    expect(axiosGetSpy).not.toHaveBeenCalled();
    expect(ddbMock.calls()).toHaveLength(0);
    expect(loggerErrorSpy).toHaveBeenCalledWith(
      { envPath: path.resolve(__dirname, '../../../.env.json') },
      'Failed to initialize job: missing TMDB_API_KEY'
    );
  });

  it('parses RSS feed, searches TMDB (filtering English and picking most popular), fetches details, and saves to DynamoDB', async () => {
    const episode = makeEpisode();
    parseURLSpy.mockResolvedValue({ items: [episode] });
    ddbMock.on(GetCommand).resolves({});
    ddbMock.on(PutCommand).resolves({});

    axiosGetSpy
      .mockResolvedValueOnce({
        data: {
          results: [
            { id: 999, original_language: 'fr', original_title: 'La Guerre des étoiles', popularity: 500 },
            { id: 42, original_language: 'en', original_title: 'Star Wars: Clone Clone', popularity: 12.5 },
            { id: 11, original_language: 'en', original_title: 'Star Wars', popularity: 151.109 },
          ],
        },
      })
      .mockResolvedValueOnce({ data: sampleMovieDetails });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(parseURLSpy).toHaveBeenCalledWith('https://feeds.megaphone.fm/the-rewatchables');

    // Verify GetCommand lookup
    const getCalls = ddbMock.commandCalls(GetCommand);
    expect(getCalls).toHaveLength(1);
    expect(getCalls[0].args[0].input).toEqual({
      TableName: 'test-podcast-movies',
      Key: { pod_guid: 'guid-star-wars-1' },
    });

    // Verify TMDB search and details URLs
    expect(axiosGetSpy).toHaveBeenCalledTimes(2);
    expect(axiosGetSpy.mock.calls[0][0]).toContain('https://api.themoviedb.org/3/search/movie');
    expect(axiosGetSpy.mock.calls[0][0]).toContain('api_key=test-tmdb-key');
    expect(axiosGetSpy.mock.calls[0][0]).toContain('query=Star%20Wars');
    expect(axiosGetSpy.mock.calls[1][0]).toBe(
      'https://api.themoviedb.org/3/movie/11?api_key=test-tmdb-key'
    );

    // Verify PutCommand payload
    const putCalls = ddbMock.commandCalls(PutCommand);
    expect(putCalls).toHaveLength(1);
    const putInput = putCalls[0].args[0].input;
    expect(putInput.TableName).toBe('test-podcast-movies');
    expect(putInput.ConditionExpression).toBe('attribute_not_exists(pod_guid)');
    expect(putInput.Item).toMatchObject({
      tmdb_id: 11,
      imdb_id: sampleMovieDetails.imdb_id,
      movie_title: sampleMovieDetails.original_title,
      tagline: sampleMovieDetails.tagline,
      overview: sampleMovieDetails.overview,
      runtime: sampleMovieDetails.runtime,
      release_date: sampleMovieDetails.release_date,
      img: sampleMovieDetails.poster_path,
      genres: sampleMovieDetails.genres,
      pod_title: episode.title,
      pod_link: 'https://traffic.megaphone.fm/star-wars.mp3',
      pod_date: new Date(episode.pubDate).toISOString(),
      pod_desc: episode.content,
      pod_guid: 'guid-star-wars-1',
      gsi_pk: 'ALL_PODS',
    });
    expect(putInput.Item.last_updated).toBeTruthy();
    expect(consoleLogSpy).not.toHaveBeenCalled();
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      { podCount: 1, saveCount: 1, skipCount: 0 },
      'Podcast processing complete'
    );
  });

  it('falls back to default Ringer podcast URL when episode.enclosure is missing', async () => {
    const episode = makeEpisode({ enclosure: undefined });
    parseURLSpy.mockResolvedValue({ items: [episode] });
    ddbMock.on(GetCommand).resolves({});
    ddbMock.on(PutCommand).resolves({});
    axiosGetSpy
      .mockResolvedValueOnce({
        data: { results: [{ id: 11, original_language: 'en', original_title: 'Star Wars', popularity: 100 }] },
      })
      .mockResolvedValueOnce({ data: sampleMovieDetails });

    await app.handler({});

    const putCalls = ddbMock.commandCalls(PutCommand);
    expect(putCalls).toHaveLength(1);
    expect(putCalls[0].args[0].input.Item.pod_link).toBe(
      'https://www.theringer.com/podcasts/the-rewatchables'
    );
  });

  it('skips episodes whose title cannot be parsed', async () => {
    parseURLSpy.mockResolvedValue({
      items: [makeEpisode({ title: 'Mailbag Special Without Movie Title', guid: 'guid-no-title' })],
    });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(ddbMock.calls()).toHaveLength(0);
    expect(axiosGetSpy).not.toHaveBeenCalled();
  });

  it('skips episodes that already exist in DynamoDB via GetCommand', async () => {
    parseURLSpy.mockResolvedValue({ items: [makeEpisode()] });
    ddbMock.on(GetCommand).resolves({ Item: { pod_guid: 'guid-star-wars-1' } });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(ddbMock.commandCalls(GetCommand)).toHaveLength(1);
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
    expect(axiosGetSpy).not.toHaveBeenCalled();
  });

  it('skips episodes when TMDB search returns no results', async () => {
    parseURLSpy.mockResolvedValue({ items: [makeEpisode()] });
    ddbMock.on(GetCommand).resolves({});
    axiosGetSpy.mockResolvedValueOnce({ data: { results: [] } });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      { podCount: 1, saveCount: 0, skipCount: 1 },
      'Podcast processing complete'
    );
  });

  it('skips episodes when TMDB search returns only non-English results', async () => {
    parseURLSpy.mockResolvedValue({ items: [makeEpisode()] });
    ddbMock.on(GetCommand).resolves({});
    axiosGetSpy.mockResolvedValueOnce({
      data: {
        results: [
          { id: 1, original_language: 'ja', original_title: 'スター・ウォーズ', popularity: 50 },
          { id: 2, original_language: 'es', original_title: 'La Guerra de las Galaxias', popularity: 30 },
        ],
      },
    });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      { podCount: 1, saveCount: 0, skipCount: 1 },
      'Podcast processing complete'
    );
  });

  it('handles ConditionalCheckFailedException on PutCommand by skipping and continuing', async () => {
    const ep1 = makeEpisode({ guid: 'guid-1' });
    const ep2 = makeEpisode({ guid: 'guid-2' });
    parseURLSpy.mockResolvedValue({ items: [ep1, ep2] });
    ddbMock.on(GetCommand).resolves({});

    const conditionalError = new Error('The conditional request failed');
    conditionalError.name = 'ConditionalCheckFailedException';
    ddbMock.on(PutCommand).rejectsOnce(conditionalError).resolvesOnce({});

    axiosGetSpy
      .mockResolvedValueOnce({
        data: { results: [{ id: 11, original_language: 'en', original_title: 'Star Wars', popularity: 100 }] },
      })
      .mockResolvedValueOnce({ data: sampleMovieDetails })
      .mockResolvedValueOnce({
        data: { results: [{ id: 11, original_language: 'en', original_title: 'Star Wars', popularity: 100 }] },
      })
      .mockResolvedValueOnce({ data: sampleMovieDetails });

    const result = await app.handler({});

    expect(result).toBe('Lambda function execution successful!');
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(2);
    expect(loggerInfoSpy).toHaveBeenCalledWith(
      { podCount: 2, saveCount: 1, skipCount: 1 },
      'Podcast processing complete'
    );
  });

  it('returns false immediately on non-conditional DynamoDB PutCommand errors', async () => {
    parseURLSpy.mockResolvedValue({ items: [makeEpisode()] });
    ddbMock.on(GetCommand).resolves({});

    const ddbError = new Error('Provisioned throughput exceeded');
    ddbError.name = 'ProvisionedThroughputExceededException';
    ddbMock.on(PutCommand).rejects(ddbError);

    axiosGetSpy
      .mockResolvedValueOnce({
        data: { results: [{ id: 11, original_language: 'en', original_title: 'Star Wars', popularity: 100 }] },
      })
      .mockResolvedValueOnce({ data: sampleMovieDetails });

    const result = await app.handler({});

    expect(result).toBe(false);
  });

  it('returns failure message when RSS feed fetch fails', async () => {
    parseURLSpy.mockRejectedValue(new Error('Network timeout'));

    const result = await app.handler({});

    expect(result).toBe('Lambda function failed!');
    expect(ddbMock.calls()).toHaveLength(0);
  });

  it('returns failure message when TMDB request throws an error', async () => {
    parseURLSpy.mockResolvedValue({ items: [makeEpisode()] });
    ddbMock.on(GetCommand).resolves({});
    axiosGetSpy.mockRejectedValue(new Error('TMDB 503 Service Unavailable'));

    const result = await app.handler({});

    expect(result).toBe('Lambda function failed!');
    expect(ddbMock.commandCalls(PutCommand)).toHaveLength(0);
  });
});

describe('packages/rss_polling/app.js findBestMatch', () => {
  it('returns the single element when results has length 1', () => {
    const only = { id: 1, original_title: 'Heat', popularity: 42 };
    expect(app.findBestMatch([only], 'Heat')).toBe(only);
  });

  it('returns the match with highest popularity', () => {
    const results = [
      { id: 1, original_title: 'Heat (1972)', popularity: 10 },
      { id: 2, original_title: 'Heat', popularity: 85.4 },
      { id: 3, original_title: 'Heat (1986)', popularity: 25 },
    ];
    expect(app.findBestMatch(results, 'Heat')).toEqual(results[1]);
  });

  it('handles numeric strings and sinks missing/invalid popularity values to the bottom', () => {
    const results = [
      { id: 1, original_title: 'No Pop', popularity: undefined },
      { id: 2, original_title: 'NaN Pop', popularity: 'not-a-number' },
      { id: 3, original_title: 'String Pop', popularity: '45.5' },
      { id: 4, original_title: 'Low Pop', popularity: 5 },
    ];
    expect(app.findBestMatch(results, 'Test')).toEqual(results[2]);
  });

  it('returns null when results is empty', () => {
    expect(app.findBestMatch([], 'Empty')).toBeNull();
  });
});

describe('packages/rss_polling/app-lambda.js', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('delegates to app.handler(event, context) and returns its result', async () => {
    const handlerSpy = vi.spyOn(app, 'handler').mockResolvedValue('Lambda function execution successful!');
    const event = { source: 'aws.events' };
    const context = { awsRequestId: 'req-123' };

    const result = await appLambda.handler(event, context);

    expect(handlerSpy).toHaveBeenCalledWith(event, context);
    expect(result).toBe('Lambda function execution successful!');
  });
});
