'use strict'

const app = require('./app');

// Set environment variables for local testing
process.env.S3_BUCKET = 'rewatchables';
process.env.S3_KEY = 'data_files/podcast_movie_data.json';
process.env.URL_EXPIRY_SECONDS = '3600'; // 1 hour
process.env.AWS_REGION = 'us-east-2';

// Set AWS profile for rewatchables-runner
//process.env.AWS_PROFILE = 'rewatchables-runner';

const mockEvent = {};

app.handler(mockEvent)
    .then(result => {
        console.log('Local test completed:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
        console.error('Local test failed:', error);
    });
