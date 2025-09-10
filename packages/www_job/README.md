# Rewatchable Streams Data Generation Lambda

This Lambda function generates a JSON file containing all podcast and movie data for the rewatchable streams website.

## Overview

The function:
1. Fetches all podcasts from the `podcast_movies` DynamoDB table
2. For each podcast, fetches corresponding movie data from the `movie_streams` table
3. Merges and flattens the data into a clean JSON structure
4. Uploads the result to S3 for the website to consume

## Data Structure

The generated JSON contains:
- **Podcast data**: title, description, date
- **Movie data**: title, overview, cast, directors, genres, streaming options
- **Streaming options**: service details, pricing, availability

## Environment Variables

- `PODCAST_MOVIES_TABLE`: DynamoDB table name for podcasts (default: podcast_movies)
- `MOVIE_STREAMS_TABLE`: DynamoDB table name for movies (default: movie_streams)
- `S3_BUCKET`: S3 bucket to store the JSON file
- `S3_KEY`: S3 key for the JSON file (default: data.json)

## Deployment

```bash
# Install dependencies
npm install

# Deploy to AWS
./deploy.sh

# Test locally
node test.js
```

## Testing

The function can be tested locally using the provided test file:

```bash
node test.js
```

This will run the function with mocked DynamoDB data and show the output structure.

## AWS Permissions Required

The Lambda execution role needs:
- DynamoDB read access to both tables
- S3 write access to the target bucket
- CloudWatch Logs for logging

## EventBridge Schedule

This function is designed to be triggered by EventBridge on a schedule (e.g., daily) to keep the website data fresh.
