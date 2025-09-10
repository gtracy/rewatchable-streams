const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Environment variables
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchables';
const S3_KEY = process.env.S3_KEY || 'data_files/podcast_movie_data.json';
const URL_EXPIRY_SECONDS = parseInt(process.env.URL_EXPIRY_SECONDS) || 3600; // 1 hour default

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
        
        console.log(`Generated signed URL for ${S3_BUCKET}/${S3_KEY}`);
        console.log(`URL expires in ${URL_EXPIRY_SECONDS} seconds`);
        
        return {
            success: true,
            url: signedUrl,
            expires_in: URL_EXPIRY_SECONDS,
            bucket: S3_BUCKET,
            key: S3_KEY,
            generated_at: new Date().toISOString()
        };
        
    } catch (error) {
        console.error('Error generating signed URL:', error);
        throw error;
    }
}

/**
 * Lambda handler function
 */
async function handler(event, context) {
    try {
        const result = await generateSignedUrl();
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS'
            },
            body: JSON.stringify(result)
        };
        
    } catch (error) {
        console.error('Handler error:', error);
        
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS'
            },
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
