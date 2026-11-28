import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const require = createRequire(import.meta.url);
const Module = require('module');
const { GetObjectCommand } = require('@aws-sdk/client-s3');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_PATH = path.resolve(__dirname, '../app.js');
const APP_LOCAL_PATH = path.resolve(__dirname, '../app-local.js');
const LAMBDA_PATH = path.resolve(__dirname, '../app-lambda.js');

const ENV_KEYS = ['S3_BUCKET', 'S3_KEY', 'URL_EXPIRY_SECONDS', 'AWS_REGION', 'LOG_LEVEL'];

const EXPECTED_CORS_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

const SAMPLE_SIGNED_URL =
    'https://rewatchables.s3.us-east-2.amazonaws.com/data_files/podcast_movie_data.json?X-Amz-Signature=mock';

let origModuleLoad;
let savedEnv;
let mockGetSignedUrl;

function loadAppFresh() {
    delete require.cache[APP_PATH];
    delete require.cache[LAMBDA_PATH];
    return require('../app');
}

beforeEach(() => {
    savedEnv = {};
    for (const key of ENV_KEYS) {
        savedEnv[key] = process.env[key];
        delete process.env[key];
    }
    process.env.LOG_LEVEL = 'silent';

    mockGetSignedUrl = vi.fn().mockResolvedValue(SAMPLE_SIGNED_URL);

    origModuleLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === '@aws-sdk/s3-request-presigner') {
            return { getSignedUrl: mockGetSignedUrl };
        }
        return origModuleLoad.apply(this, arguments);
    };
});

afterEach(() => {
    Module._load = origModuleLoad;

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

describe('generateSignedUrl', () => {
    it('generates a signed URL using default bucket, key, expiry, and region', async () => {
        const { generateSignedUrl } = loadAppFresh();
        const result = await generateSignedUrl();

        expect(mockGetSignedUrl).toHaveBeenCalledTimes(1);
        const [client, command, options] = mockGetSignedUrl.mock.calls[0];

        expect(await client.config.region()).toBe('us-east-2');
        expect(command).toBeInstanceOf(GetObjectCommand);
        expect(command.input).toEqual({
            Bucket: 'rewatchables',
            Key: 'data_files/podcast_movie_data.json'
        });
        expect(options).toEqual({ expiresIn: 3600 });

        expect(result).toMatchObject({
            success: true,
            url: SAMPLE_SIGNED_URL,
            expires_in: 3600,
            bucket: 'rewatchables',
            key: 'data_files/podcast_movie_data.json'
        });
        expect(new Date(result.generated_at).toISOString()).toBe(result.generated_at);
    });

    it('uses custom S3_BUCKET, S3_KEY, URL_EXPIRY_SECONDS, and AWS_REGION env vars', async () => {
        process.env.S3_BUCKET = 'my-custom-bucket';
        process.env.S3_KEY = 'custom/path/data.json';
        process.env.URL_EXPIRY_SECONDS = '900';
        process.env.AWS_REGION = 'us-west-2';

        const customUrl = 'https://my-custom-bucket.s3.us-west-2.amazonaws.com/custom/path/data.json?sig=1';
        mockGetSignedUrl.mockResolvedValue(customUrl);

        const { generateSignedUrl } = loadAppFresh();
        const result = await generateSignedUrl();

        const [client, command, options] = mockGetSignedUrl.mock.calls[0];
        expect(await client.config.region()).toBe('us-west-2');
        expect(command.input).toEqual({
            Bucket: 'my-custom-bucket',
            Key: 'custom/path/data.json'
        });
        expect(options).toEqual({ expiresIn: 900 });

        expect(result).toMatchObject({
            success: true,
            url: customUrl,
            expires_in: 900,
            bucket: 'my-custom-bucket',
            key: 'custom/path/data.json'
        });
    });

    it.each(['not-a-number', '', '0', '-1', '-3600'])(
        'falls back to 3600s when URL_EXPIRY_SECONDS is %j',
        async (expiryVal) => {
            process.env.URL_EXPIRY_SECONDS = expiryVal;

            const { generateSignedUrl } = loadAppFresh();
            const result = await generateSignedUrl();

            expect(result.expires_in).toBe(3600);
            expect(mockGetSignedUrl.mock.calls[0][2]).toEqual({ expiresIn: 3600 });
        }
    );

    it('rethrows errors from getSignedUrl', async () => {
        mockGetSignedUrl.mockRejectedValue(new Error('CredentialsProviderError'));

        const { generateSignedUrl } = loadAppFresh();
        await expect(generateSignedUrl()).rejects.toThrow('CredentialsProviderError');
    });
});

describe('handler', () => {
    it('returns HTTP 200 with CORS headers and signed URL payload on success', async () => {
        const { handler } = loadAppFresh();
        const response = await handler({ httpMethod: 'GET' }, {});

        expect(response.statusCode).toBe(200);
        expect(response.headers).toEqual(EXPECTED_CORS_HEADERS);

        const body = JSON.parse(response.body);
        expect(body).toMatchObject({
            success: true,
            url: SAMPLE_SIGNED_URL,
            expires_in: 3600,
            bucket: 'rewatchables',
            key: 'data_files/podcast_movie_data.json'
        });
        expect(new Date(body.generated_at).toISOString()).toBe(body.generated_at);
    });

    it('returns HTTP 500 with CORS headers and error JSON when signing fails', async () => {
        mockGetSignedUrl.mockRejectedValue(new Error('S3 presign failed'));

        const { handler } = loadAppFresh();
        const response = await handler({ httpMethod: 'GET' }, {});

        expect(response.statusCode).toBe(500);
        expect(response.headers).toEqual(EXPECTED_CORS_HEADERS);

        const body = JSON.parse(response.body);
        expect(body).toMatchObject({
            success: false,
            error: 'S3 presign failed'
        });
        expect(new Date(body.generated_at).toISOString()).toBe(body.generated_at);
    });

    it('short-circuits REST API Gateway OPTIONS preflight without calling getSignedUrl', async () => {
        const { handler } = loadAppFresh();
        const response = await handler({ httpMethod: 'OPTIONS' }, {});

        expect(response.statusCode).toBe(200);
        expect(response.headers).toEqual(EXPECTED_CORS_HEADERS);
        expect(response.body).toBe('');
        expect(mockGetSignedUrl).not.toHaveBeenCalled();
    });

    it('short-circuits HTTP API v2 OPTIONS preflight without calling getSignedUrl', async () => {
        const { handler } = loadAppFresh();
        const response = await handler({ requestContext: { http: { method: 'OPTIONS' } } }, {});

        expect(response.statusCode).toBe(200);
        expect(response.headers).toEqual(EXPECTED_CORS_HEADERS);
        expect(response.body).toBe('');
        expect(mockGetSignedUrl).not.toHaveBeenCalled();
    });
});

describe('logging hygiene', () => {
    it('contains zero console.* calls in app.js and app-local.js', () => {
        for (const filePath of [APP_PATH, APP_LOCAL_PATH]) {
            const content = fs.readFileSync(filePath, 'utf8');
            expect(content).not.toMatch(/\bconsole\./);
        }
    });
});

describe('app-lambda', () => {
    it('exports handler delegating to app.handler', async () => {
        loadAppFresh();
        const lambdaEntry = require('../app-lambda');

        const response = await lambdaEntry.handler(
            { httpMethod: 'GET', path: '/url' },
            { awsRequestId: 'req-123' }
        );

        expect(response.statusCode).toBe(200);
        expect(response.headers).toEqual(EXPECTED_CORS_HEADERS);
        expect(JSON.parse(response.body).url).toBe(SAMPLE_SIGNED_URL);
    });
});
