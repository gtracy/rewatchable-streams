import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const require = createRequire(import.meta.url);

// Stub dotenv-json and utils/streams before loading backfill-streams.js.
const dotenvJsonPath = require.resolve('dotenv-json');
require.cache[dotenvJsonPath] = {
  id: dotenvJsonPath,
  filename: dotenvJsonPath,
  loaded: true,
  exports: () => ({}),
};

const mockFetchStream = vi.fn();
const utilsStreamsPath = require.resolve('../../utils/streams');
require.cache[utilsStreamsPath] = {
  id: utilsStreamsPath,
  filename: utilsStreamsPath,
  loaded: true,
  exports: { fetchStream: mockFetchStream },
};

process.env.LOG_LEVEL = 'silent';
process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'test-movie-streams';
process.env.DYNAMO_PODCAST_MOVIES_TABLE = 'test-podcast-movies';

const fs = require('fs');
const path = require('path');
const ddbMock = mockClient(DynamoDBDocumentClient);

const backfill = require('../backfill-streams');

describe('bin/backfill-streams.js', () => {
  let writeFileSyncSpy;
  let randomSpy;

  beforeEach(() => {
    ddbMock.reset();
    mockFetchStream.mockReset();
    mockFetchStream.mockResolvedValue(undefined);
    process.env.DYNAMO_PODCAST_MOVIES_TABLE = 'test-podcast-movies';
    writeFileSyncSpy = vi.spyOn(fs, 'writeFileSync').mockImplementation(() => {});
    randomSpy = vi.spyOn(Math, 'random').mockReturnValue(0);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('does not run processPodcastMovies on module import', () => {
    expect(ddbMock.calls()).toHaveLength(0);
    expect(writeFileSyncSpy).not.toHaveBeenCalled();
  });

  it('paginates ScanCommand, writes tmdb_ids.json, skips existing streams, and backfills missing ones', async () => {
    ddbMock
      .on(ScanCommand)
      .resolvesOnce({
        Items: [{ pod_guid: 'g1', tmdb_id: 11 }],
        LastEvaluatedKey: { pod_guid: 'g1' },
      })
      .resolvesOnce({
        Items: [{ pod_guid: 'g2', tmdb_id: 115 }],
      });

    ddbMock
      .on(GetCommand, { TableName: 'test-movie-streams', Key: { tmdb_id: 11 } })
      .resolves({ Item: { tmdb_id: 11 } })
      .on(GetCommand, { TableName: 'test-movie-streams', Key: { tmdb_id: 115 } })
      .resolves({});

    await backfill.processPodcastMovies();

    // Verify paginated scan
    const scanCalls = ddbMock.commandCalls(ScanCommand);
    expect(scanCalls).toHaveLength(2);
    expect(scanCalls[0].args[0].input).toEqual({
      TableName: 'test-podcast-movies',
      ExclusiveStartKey: undefined,
    });
    expect(scanCalls[1].args[0].input).toEqual({
      TableName: 'test-podcast-movies',
      ExclusiveStartKey: { pod_guid: 'g1' },
    });

    // Verify tmdb_ids.json write
    const expectedPath = path.resolve(__dirname, '../tmdb_ids.json');
    expect(writeFileSyncSpy).toHaveBeenCalledWith(expectedPath, JSON.stringify([11, 115], null, 2));

    // Verify GetCommand lookups and fetchStream call only for missing movie
    expect(ddbMock.commandCalls(GetCommand)).toHaveLength(2);
    expect(mockFetchStream).toHaveBeenCalledTimes(1);
    expect(mockFetchStream).toHaveBeenCalledWith(115);
    expect(randomSpy).toHaveBeenCalledTimes(1);
  });

  it('handles empty podcast table gracefully', async () => {
    ddbMock.on(ScanCommand).resolves({ Items: [] });

    await backfill.processPodcastMovies();

    expect(writeFileSyncSpy).toHaveBeenCalledWith(
      path.resolve(__dirname, '../tmdb_ids.json'),
      JSON.stringify([], null, 2)
    );
    expect(ddbMock.commandCalls(GetCommand)).toHaveLength(0);
    expect(mockFetchStream).not.toHaveBeenCalled();
  });

  it('sleep resolves after the requested milliseconds', async () => {
    vi.useFakeTimers();
    let resolved = false;
    const promise = backfill.sleep(500).then(() => {
      resolved = true;
    });

    await vi.advanceTimersByTimeAsync(499);
    expect(resolved).toBe(false);

    await vi.advanceTimersByTimeAsync(1);
    await promise;
    expect(resolved).toBe(true);
  });

  it('throws ReferenceError in catch block when ScanCommand fails because tmdbId is out of scope (known bug)', async () => {
    ddbMock.on(ScanCommand).rejects(new Error('Scan failed'));

    await expect(backfill.processPodcastMovies()).rejects.toThrow(ReferenceError);
  });

  it('throws ReferenceError when an item is missing tmdb_id due to undefined PODCAST_MOVIES_TABLE and tmdbId (known bug)', async () => {
    ddbMock.on(ScanCommand).resolves({ Items: [{ pod_guid: 'g-missing-tmdb' }] });

    await expect(backfill.processPodcastMovies()).rejects.toThrow(ReferenceError);
  });
});
