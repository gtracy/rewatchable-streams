'use strict'

const app = require('./app');

// Set environment variables for local testing
process.env.PODCAST_MOVIES_TABLE = 'podcast_movies';
process.env.MOVIE_STREAMS_TABLE = 'movie_streams';
process.env.S3_BUCKET = 'rewatchables';
process.env.S3_KEY = 'data_files/podcast_movie_data.json';
process.env.CLOUDFRONT_DISTRIBUTION_ID = 'E7U2S8GNRUT2S';
process.env.AWS_REGION = 'us-east-2';

// Set AWS profile for rewatchables-runner
//process.env.AWS_PROFILE = 'rewatchables-runner';

const mockEvent = {};

app.handler(mockEvent)
    .then(result => {
        console.log('Local test completed:', result);
    })
    .catch(error => {
        console.error('Local test failed:', error);
    });
