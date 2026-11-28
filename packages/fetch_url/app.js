const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const pino = require("pino");

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Environment variables
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchables';
const S3_KEY = process.env.S3_KEY || 'data_files/podcast_movie_data.json';
const parsedExpiry = parseInt(process.env.URL_EXPIRY_SECONDS, 10);
const URL_EXPIRY_SECONDS = Number.isInteger(parsedExpiry) && parsedExpiry > 0 ? parsedExpiry : 3600; // 1 hour default

const DEFAULT_ALLOWED_ORIGINS = 'https://watchthatpod.com,https://www.watchthatpod.com';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || DEFAULT_ALLOWED_ORIGINS)
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

// Module-scoped S3 client reused across warm Lambda invocations
const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-2'
});

/**
 * Build CORS response headers using the configured origin allowlist
 */
function getCorsHeaders(event) {
    const requestOrigin = event?.headers?.origin || event?.headers?.Origin;
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Vary': 'Origin'
    };

    if (requestOrigin && ALLOWED_ORIGINS.includes(requestOrigin)) {
        headers['Access-Control-Allow-Origin'] = requestOrigin;
    }

    return headers;
}

/**
 * Generate a signed URL for the podcast data JSON file
 */
async function generateSignedUrl(client = s3Client) {
    try {
        // Create the GetObject command
        const command = new GetObjectCommand({
            Bucket: S3_BUCKET,
            Key: S3_KEY,
        });

        // Generate the signed URL
        const signedUrl = await getSignedUrl(client, command, {
            expiresIn: URL_EXPIRY_SECONDS
        });

        logger.info(
            { bucket: S3_BUCKET, key: S3_KEY, expiresIn: URL_EXPIRY_SECONDS },
            'Generated signed URL'
        );

        return {
            success: true,
            url: signedUrl,
            expires_in: URL_EXPIRY_SECONDS,
            bucket: S3_BUCKET,
            key: S3_KEY,
            generated_at: new Date().toISOString()
        };

    } catch (error) {
        logger.error(
            { err: error, bucket: S3_BUCKET, key: S3_KEY },
            'Error generating signed URL'
        );
        throw error;
    }
}

/**
 * Lambda handler function
 */
async function handler(event, context) {
    const headers = getCorsHeaders(event);
    const httpMethod = (event?.httpMethod || event?.requestContext?.http?.method || '').toUpperCase();

    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers: {
                ...headers,
                'Allow': 'GET, OPTIONS'
            },
            body: JSON.stringify({
                success: false,
                error: 'Method not allowed'
            })
        };
    }

    try {
        const result = await generateSignedUrl();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result)
        };

    } catch (error) {
        logger.error({ err: error }, 'Handler error');

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                success: false,
                error: 'Internal server error',
                generated_at: new Date().toISOString()
            })
        };
    }
}

module.exports = {
    handler,
    generateSignedUrl,
    getCorsHeaders
};
