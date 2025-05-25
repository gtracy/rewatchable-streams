'use strict';

const path = require('path');
const streamingAvailability = require('streaming-availability');

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../../.env.json')});
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());
const fetchStream = require('../../utils/streams').fetchStream;

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, QueryCommand } = require("@aws-sdk/lib-dynamodb");


exports.handler = async (event,context) => {  

  try {
    const oldest25Movies = await getOldestMovieStreams(5);
    oldest25Movies.forEach(movie => {
      logger.info(`- Title: ${movie.title}, TMDB ID: ${movie.tmdb_id}, Last Updated: ${movie.last_updated}`);
    });

    // Refresh the streaming detils
    for (const movie of oldest25Movies) {
        await fetchStream(movie.tmdb_id);
    }

  } catch (error) {
    console.error("An error occurred in main execution:", error);
  }

};


/**
 * Fetches the N oldest records from the movie_streams table using the corrected GSI.
 *
 * @param {number} limit - The maximum number of records to fetch (e.g., 25).
 * @returns {Promise<Array<object>>} - A list of the oldest movie stream records.
 */
async function getOldestMovieStreams(limit = 25) {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
    console.log(`Attempting to fetch ${limit} oldest records from table '${process.env.DYNAMO_MOVIE_STREAMS_TABLE}'`);

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
        console.log(`Successfully fetched ${result.Items ? result.Items.length : 0} records.`);
        return result.Items || [];
    } catch (error) {
        console.error("Error fetching oldest movie streams:", error);
        throw error;
    }
}