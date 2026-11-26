'use strict';

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env.json');
if (fs.existsSync(envPath)) {
  require('dotenv-json')({ path: envPath });
}
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());
const fetchStream = require('../../utils/streams').fetchStream;

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, QueryCommand } = require("@aws-sdk/lib-dynamodb");


exports.handler = async (event, context) => {
  let refresh_count = 0;

  try {
    const parsedLimit = parseInt(process.env.STREAM_REFRESH_LIMIT, 10);
    const limit = Number.isNaN(parsedLimit) || parsedLimit <= 0 ? 5 : parsedLimit;
    const oldestMovies = await getOldestMovieStreams(limit);
    for (const movie of oldestMovies) {
        await fetchStream(movie.tmdb_id);
        refresh_count++;
    }
    logger.info({ refreshCount: refresh_count }, 'Refreshed movie streams');
  } catch (error) {
    logger.error({ err: error }, 'An error occurred in main execution');
  }

};


/**
 * Fetches the N oldest records from the movie_streams table using the corrected GSI.
 *
 * @param {number} limit - The maximum number of records to fetch (e.g., 25).
 * @returns {Promise<Array<object>>} - A list of the oldest movie stream records.
 */
async function getOldestMovieStreams(limit) {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
    logger.info({ limit, tableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE }, 'Attempting to fetch oldest records');

    const queryCommand = new QueryCommand({
        TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
        IndexName: 'last_updated-index',
        KeyConditionExpression: `#gsi_pk = :pk_val`,
        ExpressionAttributeNames: {
          '#gsi_pk': 'gsi_pk',
        },
        ExpressionAttributeValues: {
          ':pk_val': 'ALL_MOVIES',
        },
        ScanIndexForward: true, // true = oldest first
        Limit: limit,
        ProjectionExpression: "tmdb_id, title, last_updated"
    });

    try {
        const result = await docClient.send(queryCommand);
        logger.info({ count: result.Items ? result.Items.length : 0 }, 'Successfully fetched oldest movie stream records');
        return result.Items || [];
    } catch (error) {
        logger.error({ err: error, limit, tableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE }, 'Error fetching oldest movie streams');
        throw error;
    }
}

exports.getOldestMovieStreams = getOldestMovieStreams;
exports.logger = logger;
