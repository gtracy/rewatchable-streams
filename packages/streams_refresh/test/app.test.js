import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient, QueryCommand } from '@aws-sdk/lib-dynamodb';

const require = createRequire(import.meta.url);

// Stub utils/streams before loading app.js.
const mockFetchStream = vi.fn();
const utilsStreamsPath = require.resolve('../../../utils/streams');
require.cache[utilsStreamsPath] = {
  id: utilsStreamsPath,
  filename: utilsStreamsPath,
  loaded: true,
  exports: { fetchStream: mockFetchStream },
};

process.env.LOG_LEVEL = 'silent';

const app = require('../app');
const appLambda = require('../app-lambda');

const ddbMock = mockClient(DynamoDBDocumentClient);

describe('packages/streams_refresh/app.js getOldestMovieStreams', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    ddbMock.reset();
    process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'test-movie-streams';
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env = { ...originalEnv };
  });

  it('queries DynamoDB using last_updated-index sorted oldest first', async () => {
    const items = [
      { tmdb_id: 11, title: 'Star Wars', last_updated: '2025-01-01T00:00:00.000Z' },
      { tmdb_id: 115, title: 'The Big Lebowski', last_updated: '2025-01-02T00:00:00.000Z' },
    ];
    ddbMock.on(QueryCommand).resolves({ Items: items });

    const result = await app.getOldestMovieStreams(10);

    expect(result).toEqual(items);
    const queryCalls = ddbMock.commandCalls(QueryCommand);
    expect(queryCalls).toHaveLength(1);
    expect(queryCalls[0].args[0].input).toEqual({
      TableName: 'test-movie-streams',
      IndexName: 'last_updated-index',
      KeyConditionExpression: '#gsi_pk = :pk_val',
      ExpressionAttributeNames: { '#gsi_pk': 'gsi_pk' },
      ExpressionAttributeValues: { ':pk_val': 'ALL_MOVIES' },
      ScanIndexForward: true,
      Limit: 10,
      ProjectionExpression: 'tmdb_id, title, last_updated',
    });
  });

  it('returns an empty array when DynamoDB returns no Items field', async () => {
    ddbMock.on(QueryCommand).resolves({});

    const result = await app.getOldestMovieStreams(5);

    expect(result).toEqual([]);
  });

  it('rethrows DynamoDB query errors', async () => {
    ddbMock.on(QueryCommand).rejects(new Error('Index not found'));

    await expect(app.getOldestMovieStreams(5)).rejects.toThrow('Index not found');
  });
});

describe('packages/streams_refresh/app.js handler', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    ddbMock.reset();
    mockFetchStream.mockReset();
    mockFetchStream.mockResolvedValue(undefined);
    process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'test-movie-streams';
    delete process.env.STREAM_REFRESH_LIMIT;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env = { ...originalEnv };
  });

  it('refreshes oldest movies using default limit of 5', async () => {
    ddbMock.on(QueryCommand).resolves({
      Items: [
        { tmdb_id: 11, title: 'Star Wars', last_updated: '2025-01-01T00:00:00.000Z' },
        { tmdb_id: 680, title: 'Pulp Fiction', last_updated: '2025-01-02T00:00:00.000Z' },
      ],
    });

    await app.handler({}, {});

    const queryCalls = ddbMock.commandCalls(QueryCommand);
    expect(queryCalls).toHaveLength(1);
    expect(queryCalls[0].args[0].input.Limit).toBe(5);
    expect(mockFetchStream.mock.calls).toEqual([[11], [680]]);
  });

  it('uses STREAM_REFRESH_LIMIT env var parsed as integer when provided', async () => {
    process.env.STREAM_REFRESH_LIMIT = '15';
    ddbMock.on(QueryCommand).resolves({ Items: [] });

    await app.handler({}, {});

    const queryCalls = ddbMock.commandCalls(QueryCommand);
    expect(queryCalls).toHaveLength(1);
    expect(queryCalls[0].args[0].input.Limit).toBe(15);
    expect(mockFetchStream).not.toHaveBeenCalled();
  });

  it.each(['51', '100', '99999'])(
    'caps STREAM_REFRESH_LIMIT "%s" at maximum of 50',
    async (highLimit) => {
      process.env.STREAM_REFRESH_LIMIT = highLimit;
      ddbMock.on(QueryCommand).resolves({ Items: [] });

      await app.handler({}, {});

      const queryCalls = ddbMock.commandCalls(QueryCommand);
      expect(queryCalls).toHaveLength(1);
      expect(queryCalls[0].args[0].input.Limit).toBe(50);
    }
  );

  it.each(['not-a-number', '0', '-5', ''])(
    'falls back to default limit of 5 when STREAM_REFRESH_LIMIT is "%s"',
    async (invalidLimit) => {
      process.env.STREAM_REFRESH_LIMIT = invalidLimit;
      ddbMock.on(QueryCommand).resolves({ Items: [] });

      await app.handler({}, {});

      const queryCalls = ddbMock.commandCalls(QueryCommand);
      expect(queryCalls).toHaveLength(1);
      expect(queryCalls[0].args[0].input.Limit).toBe(5);
    }
  );

  it('catches DynamoDB query errors without throwing', async () => {
    ddbMock.on(QueryCommand).rejects(new Error('DynamoDB unavailable'));

    await expect(app.handler({}, {})).resolves.toBeUndefined();
    expect(mockFetchStream).not.toHaveBeenCalled();
  });

  it('catches fetchStream errors without throwing', async () => {
    ddbMock.on(QueryCommand).resolves({
      Items: [
        { tmdb_id: 11, title: 'Star Wars' },
        { tmdb_id: 115, title: 'The Big Lebowski' },
      ],
    });
    mockFetchStream.mockRejectedValueOnce(new Error('API error'));

    await expect(app.handler({}, {})).resolves.toBeUndefined();
    expect(mockFetchStream).toHaveBeenCalledTimes(1);
    expect(mockFetchStream).toHaveBeenCalledWith(11);
  });
});

describe('packages/streams_refresh/app-lambda.js', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('delegates (event, context) directly to app.handler', async () => {
    const handlerSpy = vi.spyOn(app, 'handler').mockResolvedValue('done');
    const event = { source: 'aws.events' };
    const context = { awsRequestId: 'req-789' };

    const result = await appLambda.handler(event, context);

    expect(handlerSpy).toHaveBeenCalledWith(event, context);
    expect(result).toBe('done');
  });
});
