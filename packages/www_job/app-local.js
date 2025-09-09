'use strict'

const app = require('./app');

// Mock event for local testing
const mockEvent = {};

// Set up local environment
process.env.PODCAST_MOVIES_TABLE = 'podcast_movies';
process.env.MOVIE_STREAMS_TABLE = 'movie_streams';
process.env.S3_BUCKET = 'rewatchable-streams-webapp-1757203168';
process.env.S3_KEY = 'data.json';

// Set AWS region for local testing
process.env.AWS_REGION = 'us-east-2';

// Run the function
app.handler(mockEvent)
    .then(result => {
        console.log('Local test completed:', result);
    })
    .catch(error => {
        console.error('Local test failed:', error);
    });
