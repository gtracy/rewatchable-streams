'use strict';

// Set environment variables for local testing before requiring app
process.env.PODCAST_MOVIES_TABLE = 'podcast_movies';
process.env.MOVIE_STREAMS_TABLE = 'movie_streams';
process.env.S3_BUCKET = 'rewatchables';
process.env.S3_KEY = 'data_files/podcast_movie_data.json';
process.env.AWS_REGION = 'us-east-2';

// Set AWS profile for rewatchables-runner
// process.env.AWS_PROFILE = 'rewatchables-runner';

const config = require('../../config');
const logger = require('pino')(config.getLogConfig());
const app = require('./app');

const mockEvent = {};

app.handler(mockEvent)
    .then(result => {
        logger.info({ result }, 'Local test completed');
    })
    .catch(error => {
        logger.error({ err: error }, 'Local test failed');
    });
