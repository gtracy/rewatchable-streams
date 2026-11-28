'use strict';

// Set environment variables for local testing before requiring app
process.env.S3_BUCKET = 'rewatchables';
process.env.S3_KEY = 'data_files/podcast_movie_data.json';
process.env.URL_EXPIRY_SECONDS = '3600'; // 1 hour
process.env.AWS_REGION = 'us-east-2';

// Set AWS profile for rewatchables-runner
// process.env.AWS_PROFILE = 'rewatchables-runner';

const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = require('./app');

const mockEvent = {};

app.handler(mockEvent)
    .then(result => {
        logger.info({ result }, 'Local test completed');
    })
    .catch(error => {
        logger.error({ err: error }, 'Local test failed');
    });
