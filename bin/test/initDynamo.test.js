import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createRequire } from 'module';
import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBClient, CreateTableCommand } from '@aws-sdk/client-dynamodb';

const require = createRequire(import.meta.url);

process.env.LOG_LEVEL = 'silent';

const ddbMock = mockClient(DynamoDBClient);
const initDynamo = require('../initDynamo');

describe('bin/initDynamo.js', () => {
  let consoleLogSpy;
  let consoleErrorSpy;
  let loggerInfoSpy;
  let loggerErrorSpy;

  beforeEach(() => {
    ddbMock.reset();
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    loggerInfoSpy = vi.spyOn(initDynamo.logger, 'info');
    loggerErrorSpy = vi.spyOn(initDynamo.logger, 'error');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('does not create tables automatically on module import', () => {
    expect(ddbMock.calls()).toHaveLength(0);
  });

  it('createPodcastMoviesTable sends CreateTableCommand with expected schema', async () => {
    ddbMock.on(CreateTableCommand).resolves({});

    await initDynamo.createPodcastMoviesTable('podcast-movies-test');

    const calls = ddbMock.commandCalls(CreateTableCommand);
    expect(calls).toHaveLength(1);
    expect(calls[0].args[0].input).toEqual({
      TableName: 'podcast-movies-test',
      KeySchema: [{ AttributeName: 'pod_guid', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'pod_guid', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    });
    expect(loggerInfoSpy).toHaveBeenCalledWith({ tableName: 'podcast-movies-test' }, 'Table created');
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('createPodcastMoviesTable handles ResourceInUseException gracefully', async () => {
    const err = new Error('Table already exists');
    err.name = 'ResourceInUseException';
    ddbMock.on(CreateTableCommand).rejects(err);

    await expect(initDynamo.createPodcastMoviesTable('podcast-movies-test')).resolves.toBeUndefined();
    expect(loggerInfoSpy).toHaveBeenCalledWith({ tableName: 'podcast-movies-test' }, 'Table already exists');
    expect(loggerErrorSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('createPodcastMoviesTable logs unexpected errors without throwing', async () => {
    const err = new Error('AccessDenied');
    err.name = 'AccessDeniedException';
    ddbMock.on(CreateTableCommand).rejects(err);

    await expect(initDynamo.createPodcastMoviesTable('podcast-movies-test')).resolves.toBeUndefined();
    expect(loggerErrorSpy).toHaveBeenCalledWith(
      { err, tableName: 'podcast-movies-test' },
      'Error creating table'
    );
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('createMovieStreamsTable sends CreateTableCommand with GSI last_updated-index', async () => {
    ddbMock.on(CreateTableCommand).resolves({});

    await initDynamo.createMovieStreamsTable('movie-streams-test');

    const calls = ddbMock.commandCalls(CreateTableCommand);
    expect(calls).toHaveLength(1);
    expect(calls[0].args[0].input).toEqual({
      TableName: 'movie-streams-test',
      KeySchema: [{ AttributeName: 'tmdb_id', KeyType: 'HASH' }],
      AttributeDefinitions: [
        { AttributeName: 'tmdb_id', AttributeType: 'N' },
        { AttributeName: 'last_updated', AttributeType: 'S' },
        { AttributeName: 'gsi_pk', AttributeType: 'S' },
      ],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
      GlobalSecondaryIndexes: [
        {
          IndexName: 'last_updated-index',
          KeySchema: [
            { AttributeName: 'gsi_pk', KeyType: 'HASH' },
            { AttributeName: 'last_updated', KeyType: 'RANGE' },
          ],
          Projection: { ProjectionType: 'ALL' },
          ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
        },
      ],
    });
    expect(loggerInfoSpy).toHaveBeenCalledWith({ tableName: 'movie-streams-test' }, 'Table created');
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('createMovieStreamsTable handles ResourceInUseException gracefully', async () => {
    const err = new Error('Table already exists');
    err.name = 'ResourceInUseException';
    ddbMock.on(CreateTableCommand).rejects(err);

    await expect(initDynamo.createMovieStreamsTable('movie-streams-test')).resolves.toBeUndefined();
    expect(loggerInfoSpy).toHaveBeenCalledWith({ tableName: 'movie-streams-test' }, 'Table already exists');
    expect(loggerErrorSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it('createMovieStreamsTable logs unexpected errors without throwing', async () => {
    const err = new Error('InternalFailure');
    err.name = 'InternalServerError';
    ddbMock.on(CreateTableCommand).rejects(err);

    await expect(initDynamo.createMovieStreamsTable('movie-streams-test')).resolves.toBeUndefined();
    expect(loggerErrorSpy).toHaveBeenCalledWith(
      { err, tableName: 'movie-streams-test' },
      'Error creating table'
    );
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
