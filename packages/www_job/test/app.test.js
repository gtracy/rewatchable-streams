import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { mockClient } from 'aws-sdk-client-mock';

const require = createRequire(import.meta.url);
const Module = require('module');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fixtures = require('../../../test/fixtures');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_PATH = path.resolve(__dirname, '../app.js');
const LAMBDA_PATH = path.resolve(__dirname, '../app-lambda.js');

const ddbMock = mockClient(DynamoDBDocumentClient);
const s3Mock = mockClient(S3Client);

const ENV_KEYS = [
    'PODCAST_MOVIES_TABLE',
    'MOVIE_STREAMS_TABLE',
    'S3_BUCKET',
    'S3_KEY',
    'AWS_REGION'
];

let origModuleLoad;
let savedEnv;
let consoleDirSpy;

function loadAppFresh() {
    delete require.cache[APP_PATH];
    delete require.cache[LAMBDA_PATH];
    return require('../app');
}

function buildSamplePodcastAndMovie() {
    const sampleData = fixtures.loadSample('data.json');
    const first = sampleData.podcasts[0];

    const podcastItem = {
        pod_guid: 'guid-godfather',
        gsi_pk: 'ALL_PODS',
        pod_title: first.pod_title,
        pod_desc: first.pod_desc,
        pod_date: first.pod_date,
        pod_link: 'https://www.theringer.com/the-rewatchables/godfather',
        tmdb_id: first.movie.tmdb_id,
        img: first.movie.img
    };

    const movieItem = {
        tmdb_id: first.movie.tmdb_id,
        imdb_id: first.movie.imdb_id,
        title: first.movie.title,
        overview: first.movie.overview,
        tagline: "An offer you can't refuse.",
        releaseYear: first.movie.releaseYear,
        runtime: 175,
        imageSet: first.movie.imageSet,
        id: first.movie.id,
        genres: [
            { id: 'drama', name: 'Drama' },
            { id: 'crime', name: 'Crime' }
        ],
        cast: first.movie.cast,
        directors: first.movie.directors,
        streamingOptions: first.movie.streamingOptions
    };

    return { podcastItem, movieItem };
}

beforeEach(() => {
    savedEnv = {};
    for (const key of ENV_KEYS) {
        savedEnv[key] = process.env[key];
        delete process.env[key];
    }

    // Silence console.dir(process.env) inside generateRewatchableStreamsData
    consoleDirSpy = vi.spyOn(console, 'dir').mockImplementation(() => {});

    // Intercept missing ./config module required by packages/www_job/app.js
    origModuleLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === './config' && parent && parent.filename === APP_PATH) {
            return { getLogConfig: () => ({ level: 'silent' }) };
        }
        return origModuleLoad.apply(this, arguments);
    };

    ddbMock.reset();
    s3Mock.reset();
});

afterEach(() => {
    Module._load = origModuleLoad;
    consoleDirSpy.mockRestore();

    for (const key of ENV_KEYS) {
        if (savedEnv[key] === undefined) {
            delete process.env[key];
        } else {
            process.env[key] = savedEnv[key];
        }
    }

    delete require.cache[APP_PATH];
    delete require.cache[LAMBDA_PATH];
});

describe('fetchAllPodcasts', () => {
    it('scans the podcast_movies table filtered by gsi_pk = ALL_PODS', async () => {
        const { fetchAllPodcasts } = loadAppFresh();
        const { podcastItem } = buildSamplePodcastAndMovie();
        ddbMock.on(ScanCommand).resolves({ Items: [podcastItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const items = await fetchAllPodcasts(docClient);

        expect(items).toEqual([podcastItem]);
        const calls = ddbMock.commandCalls(ScanCommand);
        expect(calls).toHaveLength(1);
        expect(calls[0].args[0].input).toEqual({
            TableName: 'podcast_movies',
            FilterExpression: 'gsi_pk = :gsi_pk',
            ExpressionAttributeValues: { ':gsi_pk': 'ALL_PODS' }
        });
    });

    it('returns an empty array when DynamoDB response has no Items property', async () => {
        const { fetchAllPodcasts } = loadAppFresh();
        ddbMock.on(ScanCommand).resolves({});

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        expect(await fetchAllPodcasts(docClient)).toEqual([]);
    });

    it('performs a single scan even if LastEvaluatedKey is present (documents no pagination)', async () => {
        const { fetchAllPodcasts } = loadAppFresh();
        const { podcastItem } = buildSamplePodcastAndMovie();
        ddbMock.on(ScanCommand).resolves({
            Items: [podcastItem],
            LastEvaluatedKey: { pod_guid: 'guid-godfather' }
        });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const items = await fetchAllPodcasts(docClient);

        expect(items).toHaveLength(1);
        expect(ddbMock.commandCalls(ScanCommand)).toHaveLength(1);
    });

    it('propagates DynamoDB errors', async () => {
        const { fetchAllPodcasts } = loadAppFresh();
        ddbMock.on(ScanCommand).rejects(new Error('ProvisionedThroughputExceededException'));

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        await expect(fetchAllPodcasts(docClient)).rejects.toThrow(
            'ProvisionedThroughputExceededException'
        );
    });
});

describe('fetchMovieData', () => {
    it('scans movie_streams table by tmdb_id and returns the first matching item', async () => {
        const { fetchMovieData } = loadAppFresh();
        const { movieItem } = buildSamplePodcastAndMovie();
        ddbMock.on(ScanCommand).resolves({ Items: [movieItem, { ...movieItem, id: 'duplicate' }] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const result = await fetchMovieData(docClient, 238);

        expect(result).toEqual(movieItem);
        const calls = ddbMock.commandCalls(ScanCommand);
        expect(calls).toHaveLength(1);
        expect(calls[0].args[0].input).toEqual({
            TableName: 'movie_streams',
            FilterExpression: 'tmdb_id = :tmdb_id',
            ExpressionAttributeValues: { ':tmdb_id': 238 }
        });
    });

    it('returns null when no items match or Items is undefined', async () => {
        const { fetchMovieData } = loadAppFresh();
        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));

        ddbMock.on(ScanCommand).resolvesOnce({ Items: [] }).resolvesOnce({});

        expect(await fetchMovieData(docClient, 999999)).toBeNull();
        expect(await fetchMovieData(docClient, 888888)).toBeNull();
    });

    it('propagates DynamoDB errors', async () => {
        const { fetchMovieData } = loadAppFresh();
        ddbMock.on(ScanCommand).rejects(new Error('DynamoDB unavailable'));

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        await expect(fetchMovieData(docClient, 238)).rejects.toThrow('DynamoDB unavailable');
    });
});

describe('enrichPodcastsWithMovieData', () => {
    it('merges podcast metadata with movie data, flattening genres and streamingOptions', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();
        ddbMock.on(ScanCommand).resolves({ Items: [movieItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [podcastItem]);

        expect(enriched).toHaveLength(1);
        const entry = enriched[0];
        expect(entry.pod_title).toBe(podcastItem.pod_title);
        expect(entry.pod_desc).toBe(podcastItem.pod_desc);
        expect(entry.pod_date).toBe(podcastItem.pod_date);
        expect(entry.pod_link).toBe(podcastItem.pod_link);

        expect(entry.movie).toMatchObject({
            tmdb_id: 238,
            imdb_id: 'tt0068646',
            movie_title: 'The Godfather',
            title: 'The Godfather',
            overview: movieItem.overview,
            tagline: "An offer you can't refuse.",
            release_date: '1972',
            releaseYear: 1972,
            runtime: 175,
            img: podcastItem.img,
            imageSet: movieItem.imageSet,
            id: '82',
            genres: ['Drama', 'Crime'],
            cast: movieItem.cast,
            directors: movieItem.directors
        });

        expect(entry.movie.streamingOptions).toHaveLength(movieItem.streamingOptions.length);
        for (const opt of entry.movie.streamingOptions) {
            expect(opt).not.toHaveProperty('subtitles');
            expect(opt).not.toHaveProperty('service');
            expect(opt.serviceName).toBeTruthy();
        }
    });

    it('handles missing optional movie fields (releaseYear, genres, cast, directors, streamingOptions)', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const podcast = {
            pod_title: 'Minimal Episode',
            pod_desc: 'Desc',
            pod_date: '2025-01-01T00:00:00.000Z',
            tmdb_id: 42,
            img: '/poster.jpg'
        };
        const sparseMovie = {
            tmdb_id: 42,
            title: 'Sparse Movie'
        };
        ddbMock.on(ScanCommand).resolves({ Items: [sparseMovie] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const [entry] = await enrichPodcastsWithMovieData(docClient, [podcast]);

        expect(entry.movie.release_date).toBeNull();
        expect(entry.movie.genres).toEqual([]);
        expect(entry.movie.cast).toEqual([]);
        expect(entry.movie.directors).toEqual([]);
        expect(entry.movie.streamingOptions).toEqual([]);
    });

    it('skips podcasts whose tmdb_id has no matching movie in movie_streams', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();
        const unmatchedPodcast = {
            pod_title: 'Unmatched Episode',
            pod_desc: 'No movie in DB',
            pod_date: '2025-02-01T00:00:00.000Z',
            tmdb_id: 999999
        };

        ddbMock
            .on(ScanCommand, { ExpressionAttributeValues: { ':tmdb_id': 999999 } })
            .resolves({ Items: [] })
            .on(ScanCommand, { ExpressionAttributeValues: { ':tmdb_id': 238 } })
            .resolves({ Items: [movieItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [
            unmatchedPodcast,
            podcastItem
        ]);

        expect(enriched).toHaveLength(1);
        expect(enriched[0].movie.tmdb_id).toBe(238);
    });

    it('continues enriching remaining podcasts when one movie lookup throws', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();
        const failingPodcast = {
            pod_title: 'Failing Episode',
            tmdb_id: 500
        };

        ddbMock
            .on(ScanCommand, { ExpressionAttributeValues: { ':tmdb_id': 500 } })
            .rejects(new Error('Transient scan failure'))
            .on(ScanCommand, { ExpressionAttributeValues: { ':tmdb_id': 238 } })
            .resolves({ Items: [movieItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [
            failingPodcast,
            podcastItem
        ]);

        expect(enriched).toHaveLength(1);
        expect(enriched[0].pod_title).toBe(podcastItem.pod_title);
    });

    it('returns an empty array without querying DynamoDB when given no podcasts', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));

        const enriched = await enrichPodcastsWithMovieData(docClient, []);
        expect(enriched).toEqual([]);
        expect(ddbMock.commandCalls(ScanCommand)).toHaveLength(0);
    });
});

describe('uploadToS3', () => {
    it('uploads pretty-printed JSON with expected bucket, key, content type, and cache control', async () => {
        const { uploadToS3 } = loadAppFresh();
        s3Mock.on(PutObjectCommand).resolves({});

        const s3Client = new S3Client({ region: 'us-east-2' });
        const payload = { podcasts: [], generated_at: '2025-09-11T00:00:00.000Z', total_podcasts: 0 };
        await uploadToS3(s3Client, payload);

        const calls = s3Mock.commandCalls(PutObjectCommand);
        expect(calls).toHaveLength(1);
        expect(calls[0].args[0].input).toEqual({
            Bucket: 'rewatchables',
            Key: 'data_files/podcast_movie_data.json',
            Body: JSON.stringify(payload, null, 2),
            ContentType: 'application/json',
            CacheControl: 'max-age=3600'
        });
    });

    it('propagates S3 errors', async () => {
        const { uploadToS3 } = loadAppFresh();
        s3Mock.on(PutObjectCommand).rejects(new Error('AccessDenied'));

        const s3Client = new S3Client({ region: 'us-east-2' });
        await expect(uploadToS3(s3Client, { podcasts: [] })).rejects.toThrow('AccessDenied');
    });
});

describe('generateRewatchableStreamsData', () => {
    it('fetches podcasts, enriches with movies, uploads JSON to S3, and returns summary', async () => {
        const { generateRewatchableStreamsData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'podcast_movies' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'movie_streams' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});

        const summary = await generateRewatchableStreamsData();

        expect(summary.success).toBe(true);
        expect(summary.total_podcasts).toBe(1);
        expect(new Date(summary.generated_at).toISOString()).toBe(summary.generated_at);

        const s3Calls = s3Mock.commandCalls(PutObjectCommand);
        expect(s3Calls).toHaveLength(1);
        const uploaded = JSON.parse(s3Calls[0].args[0].input.Body);
        expect(uploaded.total_podcasts).toBe(1);
        expect(uploaded.generated_at).toBe(summary.generated_at);
        expect(uploaded.podcasts).toHaveLength(1);
        expect(uploaded.podcasts[0].movie.title).toBe('The Godfather');
    });

    it('respects custom environment variables for tables and S3 destination', async () => {
        process.env.PODCAST_MOVIES_TABLE = 'custom_podcasts';
        process.env.MOVIE_STREAMS_TABLE = 'custom_movies';
        process.env.S3_BUCKET = 'custom-bucket';
        process.env.S3_KEY = 'custom/data.json';
        process.env.AWS_REGION = 'us-west-2';

        const { generateRewatchableStreamsData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'custom_podcasts' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'custom_movies' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});

        const summary = await generateRewatchableStreamsData();

        expect(summary.total_podcasts).toBe(1);
        const s3Input = s3Mock.commandCalls(PutObjectCommand)[0].args[0].input;
        expect(s3Input.Bucket).toBe('custom-bucket');
        expect(s3Input.Key).toBe('custom/data.json');
    });

    it('handles an empty podcast_movies table and uploads empty podcasts array', async () => {
        const { generateRewatchableStreamsData } = loadAppFresh();
        ddbMock.on(ScanCommand).resolves({ Items: [] });
        s3Mock.on(PutObjectCommand).resolves({});

        const summary = await generateRewatchableStreamsData();

        expect(summary.success).toBe(true);
        expect(summary.total_podcasts).toBe(0);
        const uploaded = JSON.parse(s3Mock.commandCalls(PutObjectCommand)[0].args[0].input.Body);
        expect(uploaded.podcasts).toEqual([]);
        expect(uploaded.total_podcasts).toBe(0);
    });

    it('rethrows when DynamoDB scan fails and does not upload to S3', async () => {
        const { generateRewatchableStreamsData } = loadAppFresh();
        ddbMock.on(ScanCommand).rejects(new Error('DDB scan failed'));

        await expect(generateRewatchableStreamsData()).rejects.toThrow('DDB scan failed');
        expect(s3Mock.commandCalls(PutObjectCommand)).toHaveLength(0);
    });

    it('rethrows when S3 upload fails', async () => {
        const { generateRewatchableStreamsData } = loadAppFresh();
        ddbMock.on(ScanCommand).resolves({ Items: [] });
        s3Mock.on(PutObjectCommand).rejects(new Error('S3 PutObject failed'));

        await expect(generateRewatchableStreamsData()).rejects.toThrow('S3 PutObject failed');
    });
});

describe('handler and app-lambda', () => {
    it('returns HTTP 200 with summary body on success', async () => {
        const { handler } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'podcast_movies' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'movie_streams' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});

        const response = await handler({}, {});

        expect(response.statusCode).toBe(200);
        const body = JSON.parse(response.body);
        expect(body.message).toBe('Data generation completed successfully');
        expect(body.success).toBe(true);
        expect(body.total_podcasts).toBe(1);
        expect(body.generated_at).toBeTruthy();
    });

    it('returns HTTP 500 with error details when generation fails', async () => {
        const { handler } = loadAppFresh();
        ddbMock.on(ScanCommand).rejects(new Error('Boom from DynamoDB'));

        const response = await handler({}, {});

        expect(response.statusCode).toBe(500);
        expect(JSON.parse(response.body)).toEqual({
            message: 'Error generating data',
            error: 'Boom from DynamoDB'
        });
    });

    it('app-lambda.js exports handler delegating to app.handler', async () => {
        loadAppFresh();
        ddbMock.on(ScanCommand).resolves({ Items: [] });
        s3Mock.on(PutObjectCommand).resolves({});

        const lambdaEntry = require('../app-lambda');
        const response = await lambdaEntry.handler({ source: 'aws.events' }, { awsRequestId: 'req-1' });

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body).total_podcasts).toBe(0);
    });
});
