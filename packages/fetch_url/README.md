# Fetch URL Lambda Function

This Lambda function generates signed URLs for the podcast data JSON file stored in S3.

## Purpose

The web application needs to fetch the `podcast_movie_data.json` file from S3, but since the S3 bucket is private, we need to generate signed URLs that provide temporary access to the file.

## Features

- Generates signed URLs for S3 objects
- Configurable expiration time (default: 1 hour)
- CORS headers for web application access
- Error handling and logging

## Environment Variables

- `S3_BUCKET`: S3 bucket name (default: `rewatchables`)
- `S3_KEY`: S3 object key (default: `data_files/podcast_movie_data.json`)
- `URL_EXPIRY_SECONDS`: URL expiration time in seconds (default: `3600`)
- `AWS_REGION`: AWS region (default: `us-east-2`)

## Local Testing

```bash
npm install
node app-local.js
```

## Deployment

```bash
./deploy.sh
```

## API Response

### Success Response (200)
```json
{
  "success": true,
  "url": "https://rewatchables.s3.amazonaws.com/data_files/podcast_movie_data.json?X-Amz-Algorithm=...",
  "expires_in": 3600,
  "bucket": "rewatchables",
  "key": "data_files/podcast_movie_data.json",
  "generated_at": "2025-09-10T02:00:00.000Z"
}
```

### Error Response (500)
```json
{
  "success": false,
  "error": "Error message",
  "generated_at": "2025-09-10T02:00:00.000Z"
}
```

## Usage with API Gateway

This Lambda function is designed to be used with API Gateway:

1. Create an API Gateway REST API
2. Create a GET method
3. Set the Lambda function as the integration
4. Enable CORS
5. Deploy the API

The web application can then call the API Gateway endpoint to get a signed URL for the JSON data.

## Security

- Signed URLs expire after the specified time
- S3 bucket remains private
- CORS headers allow web application access
- No sensitive data exposed in the response
