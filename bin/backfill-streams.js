'use strict';

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env.json');
if (fs.existsSync(envPath)) {
  require('dotenv-json')({ path: envPath });
}

const config = require('../config');
const logger = require('pino')(config.getLogConfig());

const fetchStream = require('../utils/streams').fetchStream;

const client = new DynamoDBClient(config.getAWSConfig());
const docClient = DynamoDBDocumentClient.from(client);

// Helper function to pause for ms milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processPodcastMovies() {
  let tmdbId;
  const podcastMoviesTable = process.env.DYNAMO_PODCAST_MOVIES_TABLE;
  const movieStreamsTable = process.env.DYNAMO_MOVIE_STREAMS_TABLE;

  try {
    logger.info({ tableName: podcastMoviesTable }, 'Scanning podcast movies table');
    let items = [];
    let lastEvaluatedKey = undefined;

    do {
      const scanCommand = new ScanCommand({
        TableName: podcastMoviesTable,
        ExclusiveStartKey: lastEvaluatedKey
      });
      const scanResult = await docClient.send(scanCommand);
      if (scanResult.Items) {
        items = items.concat(scanResult.Items);
      }
      lastEvaluatedKey = scanResult.LastEvaluatedKey;
    } while (lastEvaluatedKey);
    logger.info({ count: items.length, tableName: podcastMoviesTable }, 'Found podcast movie entries');

    // Collect tmdb_id values
    const tmdbIds = items
      .filter(movie => movie.tmdb_id)
      .map(movie => movie.tmdb_id);

    // Write tmdb_id list to a file
    const outputPath = path.resolve(__dirname, 'tmdb_ids.json');
    fs.writeFileSync(outputPath, JSON.stringify(tmdbIds, null, 2));
    logger.info({ count: tmdbIds.length, outputPath }, 'Wrote tmdb_id values to file');

    for (const movie of items) {
      if (movie.tmdb_id) {
        tmdbId = movie.tmdb_id;
        logger.info({ tmdbId, tableName: movieStreamsTable }, 'Looking up tmdb_id in movie streams table');

        const getCommand = new GetCommand({
          TableName: movieStreamsTable,
          Key: {
            tmdb_id: tmdbId,
          },
        });

        const getResult = await docClient.send(getCommand);

        if (getResult.Item) {
          logger.info({ tmdbId, tableName: movieStreamsTable }, 'Found existing stream entry');
        } else {
          logger.info({ tmdbId, tableName: movieStreamsTable }, 'Stream entry not found, creating new entry');
          await fetchStream(tmdbId);
          logger.info({ tmdbId }, 'Streaming options saved for movie');

          // Pause a random amount of time between 0 and 10 seconds
          const pauseMs = Math.floor(Math.random() * 10001);
          logger.info({ pauseMs, tmdbId }, 'Pausing before next fetch');
          await sleep(pauseMs);
        } // end if getResult.Item
      } else {
        logger.error({ tableName: podcastMoviesTable, movie }, 'Entry missing tmdb_id');
      }

    }

    logger.info('Finished processing podcast movies');

  } catch (error) {
    logger.error({ err: error, tmdbId }, 'Error scanning podcast movies table');
  }
}

if (require.main === module) {
  processPodcastMovies();
}

module.exports = { processPodcastMovies, sleep, logger };
