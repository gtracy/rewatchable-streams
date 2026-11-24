import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mockClient } from 'aws-sdk-client-mock';
// app.js resolves @aws-sdk from this package's node_modules...
import {
    DynamoDBDocumentClient,
    QueryCommand,
} from '@aws-sdk/lib-dynamodb';
// ...while utils/streams.js resolves it from utils/node_modules (utils/ is
// its own install unit). Mock both copies: the QueryCommand path lives in
// app.js, the Put/Update path lives in utils/streams.js.
import {
    DynamoDBDocumentClient as UtilsDynamoDBDocumentClient,
    PutCommand,
    UpdateCommand,
} from '../../../utils/node_modules/@aws-sdk/lib-dynamodb';

import { handler, getOldestMovieStreams } from '../app.js';
import { fetchStream } from '../../../utils/streams.js';

const ddbMock = mockClient(DynamoDBDocumentClient);
const utilsDdbMock = mockClient(UtilsDynamoDBDocumentClient);

function showFixture(overrides = {}) {
    return {
        id: 'movie/123',
        imdbId: 'tt1234567',
        tmdbId: 123,
        title: 'Test Movie',
        overview: 'A test movie.',
        releaseYear: 2020,
        directors: ['Test Director'],
        cast: ['Test Actor'],
        imageSet: { verticalPoster: { w240: 'https://example.com/poster.jpg' } },
        streamingOptions: {
            us: [
                { service: { id: 'netflix' }, type: 'subscription', link: 'https://netflix.example' },
                { service: { id: 'netflix' }, type: 'rent', link: 'https://netflix.example/rent' },
            ],
        },
        ...overrides,
    };
}

function rateLimitError() {
    const err = new Error('Request failed with status code 429');
    err.status = 429;
    err.response = { status: 429, headers: { 'retry-after': '60' } };
    return err;
}

describe('getOldestMovieStreams', () => {
    beforeEach(() => {
        ddbMock.reset();
        process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'movie_streams';
    });

    afterEach(() => {
        delete process.env.DYNAMO_MOVIE_STREAMS_TABLE;
    });

    it('queries last_updated-index oldest-first with the configured limit', async () => {
        ddbMock.on(QueryCommand).resolves({
            Items: [{ tmdb_id: 1, title: 'Oldest', last_updated: '2026-01-01T00:00:00.000Z' }],
        });

        const items = await getOldestMovieStreams(5);

        expect(items).toHaveLength(1);
        expect(items[0].tmdb_id).toBe(1);
        const calls = ddbMock.commandCalls(QueryCommand);
        expect(calls).toHaveLength(1);
        const input = calls[0].args[0].input;
        expect(input.TableName).toBe('movie_streams');
        expect(input.IndexName).toBe('last_updated-index');
        expect(input.ScanIndexForward).toBe(true);
        expect(input.Limit).toBe(5);
        expect(input.KeyConditionExpression).toContain('gsi_pk');
        expect(input.ExpressionAttributeValues[':pk_val']).toBe('ALL_MOVIES');
    });

    it('returns an empty array when the queue is empty', async () => {
        ddbMock.on(QueryCommand).resolves({ Items: [] });
        expect(await getOldestMovieStreams(5)).toEqual([]);
    });
});

describe('fetchStream', () => {
    let getShowMock;
    // Inject a fake streaming client instead of module-mocking: utils/ is a
    // separate install unit, so a vi.mock from this package cannot reach the
    // copy utils/streams.js loads.
    const fakeStreamingClient = () => ({ showsApi: { getShow: getShowMock } });

    beforeEach(() => {
        utilsDdbMock.reset();
        getShowMock = vi.fn();
        process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'movie_streams';
        process.env.MOVIE_OF_THE_NIGHT_API_KEY = 'test-key';
    });

    afterEach(() => {
        delete process.env.DYNAMO_MOVIE_STREAMS_TABLE;
        delete process.env.MOVIE_OF_THE_NIGHT_API_KEY;
    });

    it('stores stream details with last_updated and gsi_pk on success', async () => {
        getShowMock.mockResolvedValue(showFixture());
        utilsDdbMock.on(PutCommand).resolves({});

        const result = await fetchStream(123, { createStreamingClient: fakeStreamingClient });

        expect(result.ok).toBe(true);
        const puts = utilsDdbMock.commandCalls(PutCommand);
        expect(puts).toHaveLength(1);
        const item = puts[0].args[0].input.Item;
        expect(item.tmdb_id).toBe(123);
        expect(item.title).toBe('Test Movie');
        expect(item.gsi_pk).toBe('ALL_MOVIES');
        expect(item.last_updated).toMatch(/^\d{4}-\d{2}-\d{2}T/);
        // Subscription beats rent for the same service (filterServices).
        expect(item.streamingOptions).toHaveLength(1);
        expect(item.streamingOptions[0].type).toBe('subscription');
    });

    it('bumps last_updated and records refresh_status=failed when the lookup fails', async () => {
        getShowMock.mockRejectedValue(new Error('title not found'));
        utilsDdbMock.on(UpdateCommand).resolves({});

        const result = await fetchStream(123, { createStreamingClient: fakeStreamingClient });

        expect(result.ok).toBe(false);
        expect(result.rateLimited).toBe(false);
        expect(utilsDdbMock.commandCalls(PutCommand)).toHaveLength(0);
        const updates = utilsDdbMock.commandCalls(UpdateCommand);
        expect(updates).toHaveLength(1);
        const input = updates[0].args[0].input;
        expect(input.Key).toEqual({ id: 'movie/123' });
        expect(input.UpdateExpression).toContain('last_updated');
        expect(input.ExpressionAttributeValues[':st']).toBe('failed');
        expect(input.ExpressionAttributeValues[':pk']).toBe('ALL_MOVIES');
        expect(input.ExpressionAttributeValues[':lu']).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });

    it('reports rateLimited and still bumps the queue on a 429', async () => {
        getShowMock.mockRejectedValue(rateLimitError());
        utilsDdbMock.on(UpdateCommand).resolves({});

        const result = await fetchStream(123, { createStreamingClient: fakeStreamingClient });

        expect(result.ok).toBe(false);
        expect(result.rateLimited).toBe(true);
        expect(result.retryAfter).toBe('60');
        // The failing title still advances to the back of the queue.
        expect(utilsDdbMock.commandCalls(UpdateCommand)).toHaveLength(1);
    });
});

describe('handler (batch refresh)', () => {
    let getShowMock;
    const fakeStreamingClient = () => ({ showsApi: { getShow: getShowMock } });

    beforeEach(() => {
        ddbMock.reset();
        utilsDdbMock.reset();
        getShowMock = vi.fn();
        process.env.DYNAMO_MOVIE_STREAMS_TABLE = 'movie_streams';
        process.env.MOVIE_OF_THE_NIGHT_API_KEY = 'test-key';
        process.env.STREAM_REFRESH_LIMIT = '5';
        process.env.STREAM_REFRESH_PACING_MS = '0';
    });

    afterEach(() => {
        delete process.env.DYNAMO_MOVIE_STREAMS_TABLE;
        delete process.env.MOVIE_OF_THE_NIGHT_API_KEY;
        delete process.env.STREAM_REFRESH_LIMIT;
        delete process.env.STREAM_REFRESH_PACING_MS;
    });

    function queueMovies(ids) {
        ddbMock.on(QueryCommand).resolves({
            Items: ids.map((tmdb_id) => ({ tmdb_id, title: `Movie ${tmdb_id}` })),
        });
        utilsDdbMock.on(PutCommand).resolves({});
        utilsDdbMock.on(UpdateCommand).resolves({});
    }

    it('refreshes the oldest batch and reports metrics', async () => {
        queueMovies([1, 2]);
        getShowMock.mockImplementation(({ id }) =>
            Promise.resolve(showFixture({ id, tmdbId: parseInt(id.split('/')[1], 10) }))
        );

        const metrics = await handler({}, {}, { createStreamingClient: fakeStreamingClient });

        expect(metrics.movies_examined).toBe(2);
        expect(metrics.movies_updated).toBe(2);
        expect(metrics.movies_failed).toBe(0);
        expect(metrics.rate_limited).toBe(false);
        expect(getShowMock).toHaveBeenCalledTimes(2);
    });

    it('respects STREAM_REFRESH_LIMIT when querying the queue', async () => {
        process.env.STREAM_REFRESH_LIMIT = '2';
        queueMovies([1, 2, 3]);
        getShowMock.mockResolvedValue(showFixture());

        await handler({}, {}, { createStreamingClient: fakeStreamingClient });

        const queryInput = ddbMock.commandCalls(QueryCommand)[0].args[0].input;
        expect(queryInput.Limit).toBe(2);
    });

    it('stops the batch immediately on a 429 and does not fetch the remaining titles', async () => {
        queueMovies([1, 2, 3]);
        getShowMock.mockRejectedValueOnce(rateLimitError());

        const metrics = await handler({}, {}, { createStreamingClient: fakeStreamingClient });

        expect(metrics.movies_examined).toBe(1);
        expect(metrics.movies_failed).toBe(1);
        expect(metrics.rate_limited).toBe(true);
        expect(getShowMock).toHaveBeenCalledTimes(1);
    });

    it('keeps going after a non-rate-limit failure (queue advances)', async () => {
        queueMovies([1, 2]);
        getShowMock
            .mockRejectedValueOnce(new Error('title not found'))
            .mockResolvedValueOnce(showFixture({ id: 'movie/2', tmdbId: 2 }));

        const metrics = await handler({}, {}, { createStreamingClient: fakeStreamingClient });

        expect(metrics.movies_examined).toBe(2);
        expect(metrics.movies_updated).toBe(1);
        expect(metrics.movies_failed).toBe(1);
        expect(metrics.rate_limited).toBe(false);
        expect(getShowMock).toHaveBeenCalledTimes(2);
    });

    it('paces fetches by STREAM_REFRESH_PACING_MS', async () => {
        process.env.STREAM_REFRESH_PACING_MS = '100';
        queueMovies([1, 2]);
        getShowMock.mockResolvedValue(showFixture());

        const start = Date.now();
        await handler({}, {}, { createStreamingClient: fakeStreamingClient });
        const elapsed = Date.now() - start;

        expect(getShowMock).toHaveBeenCalledTimes(2);
        expect(elapsed).toBeGreaterThanOrEqual(90);
    });
});
