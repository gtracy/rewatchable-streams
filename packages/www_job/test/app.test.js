import { createRequire } from 'module';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mockClient } from 'aws-sdk-client-mock';

const require = createRequire(import.meta.url);
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { CloudFrontClient, CreateInvalidationCommand } = require('@aws-sdk/client-cloudfront');
const fixtures = require('../../../test/fixtures');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_PATH = path.resolve(__dirname, '../app.js');
const APP_LOCAL_PATH = path.resolve(__dirname, '../app-local.js');
const SEO_ARTIFACTS_PATH = path.resolve(__dirname, '../seo-artifacts.js');
const LAMBDA_PATH = path.resolve(__dirname, '../app-lambda.js');

const ddbMock = mockClient(DynamoDBDocumentClient);
const s3Mock = mockClient(S3Client);
const cfMock = mockClient(CloudFrontClient);

const ENV_KEYS = [
    'PODCAST_MOVIES_TABLE',
    'MOVIE_STREAMS_TABLE',
    'S3_BUCKET',
    'S3_KEY',
    'WEBAPP_PREFIX',
    'CLOUDFRONT_DISTRIBUTION_ID',
    'AWS_REGION',
    'LOG_LEVEL',
    'LOCAL_OUTPUT_PATH',
    'NODE_ENV'
];

let savedEnv;

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
    process.env.LOG_LEVEL = 'silent';

    ddbMock.reset();
    s3Mock.reset();
    cfMock.reset();
});

afterEach(() => {
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

    it('paginates through all pages when LastEvaluatedKey is present', async () => {
        const { fetchAllPodcasts } = loadAppFresh();
        const { podcastItem } = buildSamplePodcastAndMovie();
        const secondPodcast = { ...podcastItem, pod_guid: 'guid-heat', pod_title: 'Heat', tmdb_id: 949 };
        const lastKey = { pod_guid: 'guid-godfather' };

        ddbMock
            .on(ScanCommand)
            .resolvesOnce({ Items: [podcastItem], LastEvaluatedKey: lastKey })
            .resolvesOnce({ Items: [secondPodcast] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const items = await fetchAllPodcasts(docClient);

        expect(items).toEqual([podcastItem, secondPodcast]);
        const calls = ddbMock.commandCalls(ScanCommand);
        expect(calls).toHaveLength(2);
        expect(calls[0].args[0].input.ExclusiveStartKey).toBeUndefined();
        expect(calls[1].args[0].input.ExclusiveStartKey).toEqual(lastKey);
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

    it('performs a single scan of movie_streams to enrich multiple podcasts (no N+1)', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();
        const podcast2 = { ...podcastItem, pod_guid: 'guid-2', pod_title: 'Heat', tmdb_id: 949 };
        const podcast3 = { ...podcastItem, pod_guid: 'guid-3', pod_title: 'Jaws', tmdb_id: 578 };
        const movie2 = { ...movieItem, tmdb_id: 949, title: 'Heat' };
        const movie3 = { ...movieItem, tmdb_id: 578, title: 'Jaws' };

        ddbMock.on(ScanCommand, { TableName: 'movie_streams' }).resolves({
            Items: [movieItem, movie2, movie3]
        });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [podcastItem, podcast2, podcast3]);

        expect(enriched).toHaveLength(3);
        expect(enriched.map(e => e.movie.title)).toEqual(['The Godfather', 'Heat', 'Jaws']);
        expect(ddbMock.commandCalls(ScanCommand)).toHaveLength(1);
    });

    it('paginates movie_streams table when enriching podcasts across multiple pages', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();
        const podcast2 = { ...podcastItem, pod_guid: 'guid-2', pod_title: 'Heat', tmdb_id: 949 };
        const movie2 = { ...movieItem, tmdb_id: 949, title: 'Heat' };
        const lastKey = { tmdb_id: 238 };

        ddbMock
            .on(ScanCommand, { TableName: 'movie_streams' })
            .resolvesOnce({ Items: [movieItem], LastEvaluatedKey: lastKey })
            .resolvesOnce({ Items: [movie2] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [podcastItem, podcast2]);

        expect(enriched).toHaveLength(2);
        expect(enriched.map(e => e.movie.title)).toEqual(['The Godfather', 'Heat']);
        const calls = ddbMock.commandCalls(ScanCommand);
        expect(calls).toHaveLength(2);
        expect(calls[1].args[0].input.ExclusiveStartKey).toEqual(lastKey);
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

        ddbMock.on(ScanCommand, { TableName: 'movie_streams' }).resolves({ Items: [movieItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [
            unmatchedPodcast,
            podcastItem
        ]);

        expect(enriched).toHaveLength(1);
        expect(enriched[0].movie.tmdb_id).toBe(238);
        expect(ddbMock.commandCalls(ScanCommand)).toHaveLength(1);
    });

    it('continues enriching remaining podcasts when one podcast entry fails to transform', async () => {
        const { enrichPodcastsWithMovieData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock.on(ScanCommand, { TableName: 'movie_streams' }).resolves({ Items: [movieItem] });

        const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-2' }));
        const enriched = await enrichPodcastsWithMovieData(docClient, [
            null,
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
    it('fetches podcasts, enriches with movies, uploads JSON and SEO artifacts to S3, and returns summary', async () => {
        const { generateRewatchableStreamsData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'podcast_movies' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'movie_streams' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});
        s3Mock.on(GetObjectCommand).rejects(new Error('NoSuchKey'));

        const summary = await generateRewatchableStreamsData();

        expect(summary.success).toBe(true);
        expect(summary.total_podcasts).toBe(1);
        expect(new Date(summary.generated_at).toISOString()).toBe(summary.generated_at);

        const s3Calls = s3Mock.commandCalls(PutObjectCommand);
        expect(s3Calls).toHaveLength(7);

        const byKey = Object.fromEntries(s3Calls.map((call) => [call.args[0].input.Key, call.args[0].input]));

        const uploaded = JSON.parse(byKey['data_files/podcast_movie_data.json'].Body);
        expect(uploaded.total_podcasts).toBe(1);
        expect(uploaded.generated_at).toBe(summary.generated_at);
        expect(uploaded.podcasts).toHaveLength(1);
        expect(uploaded.podcasts[0].movie.title).toBe('The Godfather');

        expect(byKey['webapp/llms.txt']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'text/plain; charset=utf-8',
            CacheControl: 'max-age=3600'
        });
        expect(byKey['webapp/llms.txt'].Body).toContain('# Watch That Pod');

        expect(byKey['webapp/llms-full.txt']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'text/plain; charset=utf-8',
            CacheControl: 'max-age=3600'
        });
        expect(byKey['webapp/llms-full.txt'].Body).toContain('## The Godfather (1972)');

        expect(byKey['webapp/sitemap.xml']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'application/xml; charset=utf-8',
            CacheControl: 'max-age=3600'
        });
        expect(byKey['webapp/sitemap.xml'].Body).toContain('<loc>https://watchthatpod.com/</loc>');

        expect(byKey['webapp/ai-catalog.json']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'application/json; charset=utf-8',
            CacheControl: 'max-age=3600'
        });
        const aiCatalog = JSON.parse(byKey['webapp/ai-catalog.json'].Body);
        expect(aiCatalog.specVersion).toBe('1.0');
        expect(aiCatalog.host).toEqual({ displayName: 'Watch That Pod' });
        expect(Array.isArray(aiCatalog.entries)).toBe(true);
        expect(aiCatalog.entries.length).toBeGreaterThan(0);

        expect(byKey['webapp/.well-known/ai-catalog.json']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'application/json; charset=utf-8',
            CacheControl: 'max-age=3600'
        });
        expect(byKey['webapp/.well-known/ard.json']).toMatchObject({
            Bucket: 'rewatchables',
            ContentType: 'application/json; charset=utf-8',
            CacheControl: 'max-age=3600'
        });

        // CloudFront invalidation skipped when CLOUDFRONT_DISTRIBUTION_ID is unset
        expect(cfMock.commandCalls(CreateInvalidationCommand)).toHaveLength(0);
    });

    it('enriches webapp/index.html when present in S3 and invalidates CloudFront when configured', async () => {
        process.env.CLOUDFRONT_DISTRIBUTION_ID = 'E3UTGKV2VWOXDQ';

        const { generateRewatchableStreamsData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'podcast_movies' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'movie_streams' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});
        s3Mock.on(GetObjectCommand, { Bucket: 'rewatchables', Key: 'webapp/index.html' }).resolves({
            Body: {
                transformToString: async () => [
                    '<html><head>',
                    '<!-- SEO_JSONLD_START -->',
                    '<script type="application/ld+json">{}</script>',
                    '<!-- SEO_JSONLD_END -->',
                    '</head><body>',
                    '<!-- SEO_NOSCRIPT_START -->',
                    '<noscript>Enable JS</noscript>',
                    '<!-- SEO_NOSCRIPT_END -->',
                    '</body></html>'
                ].join('\n')
            }
        });
        cfMock.on(CreateInvalidationCommand).resolves({ Invalidation: { Id: 'INV-123' } });

        const summary = await generateRewatchableStreamsData();
        expect(summary.success).toBe(true);

        const s3Calls = s3Mock.commandCalls(PutObjectCommand);
        expect(s3Calls).toHaveLength(8);
        const indexPut = s3Calls.find((c) => c.args[0].input.Key === 'webapp/index.html');
        expect(indexPut).toBeTruthy();
        expect(indexPut.args[0].input).toMatchObject({
            Bucket: 'rewatchables',
            Key: 'webapp/index.html',
            ContentType: 'text/html; charset=utf-8',
            CacheControl: 'max-age=300'
        });
        expect(indexPut.args[0].input.Body).toContain('The Godfather');
        expect(indexPut.args[0].input.Body).toContain('PodcastSeries');
        expect(indexPut.args[0].input.Body).toContain('/llms.txt');

        const cfCalls = cfMock.commandCalls(CreateInvalidationCommand);
        expect(cfCalls).toHaveLength(1);
        expect(cfCalls[0].args[0].input.DistributionId).toBe('E3UTGKV2VWOXDQ');
        expect(cfCalls[0].args[0].input.InvalidationBatch.Paths).toEqual({
            Quantity: 7,
            Items: [
                '/index.html',
                '/sitemap.xml',
                '/llms.txt',
                '/llms-full.txt',
                '/ai-catalog.json',
                '/.well-known/ai-catalog.json',
                '/.well-known/ard.json'
            ]
        });
    });

    it('does not fail the job when CloudFront invalidation errors', async () => {
        process.env.CLOUDFRONT_DISTRIBUTION_ID = 'E3UTGKV2VWOXDQ';

        const { generateRewatchableStreamsData } = loadAppFresh();
        ddbMock.on(ScanCommand).resolves({ Items: [] });
        s3Mock.on(PutObjectCommand).resolves({});
        s3Mock.on(GetObjectCommand).rejects(new Error('NoSuchKey'));
        cfMock.on(CreateInvalidationCommand).rejects(new Error('AccessDenied'));

        const summary = await generateRewatchableStreamsData();
        expect(summary.success).toBe(true);
        expect(cfMock.commandCalls(CreateInvalidationCommand)).toHaveLength(1);
    });

    it('respects custom environment variables for tables, S3 destination, and WEBAPP_PREFIX', async () => {
        process.env.PODCAST_MOVIES_TABLE = 'custom_podcasts';
        process.env.MOVIE_STREAMS_TABLE = 'custom_movies';
        process.env.S3_BUCKET = 'custom-bucket';
        process.env.S3_KEY = 'custom/data.json';
        process.env.WEBAPP_PREFIX = 'site/';
        process.env.AWS_REGION = 'us-west-2';

        const { generateRewatchableStreamsData } = loadAppFresh();
        const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

        ddbMock
            .on(ScanCommand, { TableName: 'custom_podcasts' })
            .resolves({ Items: [podcastItem] })
            .on(ScanCommand, { TableName: 'custom_movies' })
            .resolves({ Items: [movieItem] });
        s3Mock.on(PutObjectCommand).resolves({});
        s3Mock.on(GetObjectCommand).rejects(new Error('NoSuchKey'));

        const summary = await generateRewatchableStreamsData();

        expect(summary.total_podcasts).toBe(1);
        const putKeys = s3Mock.commandCalls(PutObjectCommand).map((c) => ({
            Bucket: c.args[0].input.Bucket,
            Key: c.args[0].input.Key
        }));
        expect(putKeys).toEqual([
            { Bucket: 'custom-bucket', Key: 'custom/data.json' },
            { Bucket: 'custom-bucket', Key: 'site/llms.txt' },
            { Bucket: 'custom-bucket', Key: 'site/llms-full.txt' },
            { Bucket: 'custom-bucket', Key: 'site/sitemap.xml' },
            { Bucket: 'custom-bucket', Key: 'site/ai-catalog.json' },
            { Bucket: 'custom-bucket', Key: 'site/.well-known/ai-catalog.json' },
            { Bucket: 'custom-bucket', Key: 'site/.well-known/ard.json' }
        ]);
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

    it('writes JSON to LOCAL_OUTPUT_PATH and skips S3 upload when LOCAL_OUTPUT_PATH is set', async () => {
        const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'www-job-local-'));
        const outPath = path.join(tmpDir, 'nested', 'local-data.json');
        process.env.LOCAL_OUTPUT_PATH = outPath;

        try {
            const { generateRewatchableStreamsData } = loadAppFresh();
            const { podcastItem, movieItem } = buildSamplePodcastAndMovie();

            ddbMock
                .on(ScanCommand, { TableName: 'podcast_movies' })
                .resolves({ Items: [podcastItem] })
                .on(ScanCommand, { TableName: 'movie_streams' })
                .resolves({ Items: [movieItem] });

            const summary = await generateRewatchableStreamsData();

            expect(summary.success).toBe(true);
            expect(summary.total_podcasts).toBe(1);
            expect(s3Mock.commandCalls(PutObjectCommand)).toHaveLength(0);

            const written = JSON.parse(fs.readFileSync(outPath, 'utf8'));
            expect(written.total_podcasts).toBe(1);
            expect(written.podcasts).toHaveLength(1);
            expect(written.podcasts[0].pod_title).toBe(podcastItem.pod_title);
        } finally {
            fs.rmSync(tmpDir, { recursive: true, force: true });
        }
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

    it('returns HTTP 500 with generic client-safe error message when generation fails', async () => {
        const { handler } = loadAppFresh();
        ddbMock.on(ScanCommand).rejects(new Error('Boom from DynamoDB'));

        const response = await handler({}, {});

        expect(response.statusCode).toBe(500);
        expect(JSON.parse(response.body)).toEqual({
            message: 'Error generating data',
            error: 'Internal server error'
        });
        expect(response.body).not.toContain('Boom from DynamoDB');
    });

    it('does not export removed dead function fetchMovieData', () => {
        const appModule = loadAppFresh();
        expect(appModule.fetchMovieData).toBeUndefined();
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

describe('logging hygiene', () => {
    it('contains zero console.* calls in app.js, app-local.js, and seo-artifacts.js', () => {
        for (const filePath of [APP_PATH, APP_LOCAL_PATH, SEO_ARTIFACTS_PATH]) {
            const content = fs.readFileSync(filePath, 'utf8');
            expect(content).not.toMatch(/\bconsole\./);
        }
    });
});
