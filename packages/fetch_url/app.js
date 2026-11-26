const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const pino = require("pino");

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

// Environment variables
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchables';
const S3_KEY = process.env.S3_KEY || 'data_files/podcast_movie_data.json';
const parsedExpiry = parseInt(process.env.URL_EXPIRY_SECONDS, 10);
const URL_EXPIRY_SECONDS = Number.isInteger(parsedExpiry) && parsedExpiry > 0 ? parsedExpiry : 3600; // 1 hour default

const CORS_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

/**
 * Generate a signed URL for the podcast data JSON file
 */
async function generateSignedUrl() {
    try {
        // Initialize S3 client
        const s3Client = new S3Client({
            region: process.env.AWS_REGION || 'us-east-2'
        });

        // Create the GetObject command
        const command = new GetObjectCommand({
            Bucket: S3_BUCKET,
            Key: S3_KEY,
        });

        // Generate the signed URL
        const signedUrl = await getSignedUrl(s3Client, command, {
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
    const httpMethod = event?.httpMethod || event?.requestContext?.http?.method;
    if (httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: ''
        };
    }

    try {
        const result = await generateSignedUrl();

        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify(result)
        };

    } catch (error) {
        logger.error({ err: error }, 'Handler error');

        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({
                success: false,
                error: error.message,
                generated_at: new Date().toISOString()
            })
        };
    }
}

module.exports = {
    handler,
    generateSignedUrl
};
