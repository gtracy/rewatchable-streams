const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const streamingAvailability = require('streaming-availability');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../.env.json')});

const config = require('../config');
const logger = require('pino')(config.getLogConfig());

const fetchStream = require('../utils/streams').fetchStream;

const client = new DynamoDBClient(config.getAWSConfig());
const docClient = DynamoDBDocumentClient.from(client);

const MOVIE_STREAMS_TABLE = process.env.DYNAMO_MOVIE_STREAMS_TABLE;

// Helper function to pause for ms milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processPodcastMovies() {
  try {
    logger.info(`Scanning table: ${process.env.DYNAMO_PODCAST_MOVIES_TABLE}`);
    let items = [];
    let lastEvaluatedKey = undefined;

    do {
      const scanCommand = new ScanCommand({
        TableName: process.env.DYNAMO_PODCAST_MOVIES_TABLE,
        ExclusiveStartKey: lastEvaluatedKey
      });
      const scanResult = await docClient.send(scanCommand);
      if (scanResult.Items) {
        items = items.concat(scanResult.Items);
      }
      lastEvaluatedKey = scanResult.LastEvaluatedKey;
    } while (lastEvaluatedKey);
    logger.info(`Found ${items.length} entries in ${process.env.DYNAMO_PODCAST_MOVIES_TABLE}`);

    // Collect tmdb_id values
    const tmdbIds = items
      .filter(movie => movie.tmdb_id)
      .map(movie => movie.tmdb_id);

    // Write tmdb_id list to a file
    const outputPath = path.resolve(__dirname, 'tmdb_ids.json');
    fs.writeFileSync(outputPath, JSON.stringify(tmdbIds, null, 2));
    logger.info(`Wrote ${tmdbIds.length} tmdb_id values to ${outputPath}`);

    for (const movie of items) {
      if (movie.tmdb_id) {
        const tmdbId = movie.tmdb_id;
        logger.info(`Looking up tmdb_id: ${tmdbId} in ${MOVIE_STREAMS_TABLE}`);

        const getCommand = new GetCommand({
          TableName: MOVIE_STREAMS_TABLE,
          Key: {
            tmdb_id: tmdbId,
          },
        });

        const getResult = await docClient.send(getCommand);

        if (getResult.Item) {
          logger.info(`Found entry for tmdb_id: ${tmdbId} in ${MOVIE_STREAMS_TABLE}`);
        } else {
          logger.info(`tmdb_id: ${tmdbId} not found in ${MOVIE_STREAMS_TABLE}. Creating new entry.`);
          fetchStream(tmdbId);
          logger.info('Streaming options saved for movie: '+ tmdbId);

          // Pause a random amount of time between 0 and 10 seconds
          const pauseMs = Math.floor(Math.random() * 10001);
          logger.info(`Pausing for ${pauseMs} ms...`);
          await sleep(pauseMs);
        } // end if getResult.Item
      } else {
        logger.error(`Entry in ${PODCAST_MOVIES_TABLE} missing tmdb_id:`, movie);
      }

    }

    logger.info('Finished processing podcast movies.');

  } catch (error) {
    logger.error({error},'Error scanning podcast movies table: '+tmdbId);
  }
}

processPodcastMovies();