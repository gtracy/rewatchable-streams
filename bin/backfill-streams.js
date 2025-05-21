const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const streamingAvailability = require('streaming-availability');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../.env.json')});

const config = require('../config');
const logger = require('pino')(config.getLogConfig());


const client = new DynamoDBClient(config.getAWSConfig());
const docClient = DynamoDBDocumentClient.from(client);

const PODCAST_MOVIES_TABLE = process.env.DYNAMO_PODCAST_MOVIES_TABLE;
const MOVIE_STREAMS_TABLE = process.env.DYNAMO_MOVIE_STREAMS_TABLE;
console.log('PODCAST_MOVIES_TABLE:', PODCAST_MOVIES_TABLE);
console.log('MOVIE_STREAMS_TABLE:', MOVIE_STREAMS_TABLE);

// Helper function to pause for ms milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processPodcastMovies() {
  try {
    logger.info(`Scanning table: ${PODCAST_MOVIES_TABLE}`);
    let items = [];
    let lastEvaluatedKey = undefined;

    do {
      const scanCommand = new ScanCommand({
        TableName: PODCAST_MOVIES_TABLE,
        ExclusiveStartKey: lastEvaluatedKey
      });
      const scanResult = await docClient.send(scanCommand);
      if (scanResult.Items) {
        items = items.concat(scanResult.Items);
      }
      lastEvaluatedKey = scanResult.LastEvaluatedKey;
    } while (lastEvaluatedKey);
    logger.info(`Found ${items.length} entries in ${PODCAST_MOVIES_TABLE}`);

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

          const movie_id = 'movie/'+tmdbId;
          const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: process.env.MOVIE_OF_THE_NIGHT_API_KEY
          }));
          const streamingDetails = await client.showsApi.getShow({id: movie_id});
          logger.debug('title: '+streamingDetails.title);
          logger.debug('tmdbId: '+streamingDetails.tmdbId);

          // build a new object with the minimal data we need
          let movieStream = {
              "id": streamingDetails.id,
              "imdb_id": streamingDetails.imdbId,
              "tmdb_id": parseInt(tmdbId,10),
              "title": streamingDetails.title,
              "overview": streamingDetails.overview,
              "releaseYear": streamingDetails.releaseYear,
              "directors": streamingDetails.directors,
              "cast": streamingDetails.cast,
              "imageSet": streamingDetails.imageSet.verticalPoster.w240,

              "last_updated": new Date().toISOString(),
          }

          // grab the streaming options for the US
          if( streamingDetails.streamingOptions.us ) {
              logger.debug('fetching streaming options for US');
              movieStream.streamingOptions = filterServices(streamingDetails.streamingOptions.us);
          } else {
              logger.debug('no streaming options for US');
          }

          const dynamo_doc = {
              TableName: MOVIE_STREAMS_TABLE,
              Item: movieStream
          };
          //logger.debug({dynamo_doc});

          logger.info('Saving streaming options to DynamoDB...')
          await docClient.send(new PutCommand(dynamo_doc));
          logger.info('Streaming options saved for movie: ', movie_id);

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
    logger.error({error},'Error scanning podcast movies table:');
  }
}


function filterServices(services) {
  const filteredServices = {};

  for (const service of services) {
    const serviceId = service.service.id;
    const currentBest = filteredServices[serviceId];

    if (!currentBest) {
      filteredServices[serviceId] = service;
    } else {
      const typeOrder = {
        subscription: 0,
        rent: 1,
        buy: 2,
      };

      const currentTypeOrder = typeOrder[currentBest.type];
      const newTypeOrder = typeOrder[service.type];

      // If the new item has a preferred type, update
      if (newTypeOrder !== undefined) {
        if (currentTypeOrder === undefined || newTypeOrder < currentTypeOrder) {
          filteredServices[serviceId] = service;
        }
      }
      // If the current best doesn't have a type but the new one does, update
      else if (currentTypeOrder === undefined) {
        filteredServices[serviceId] = service;
      }
    }
  }

  return Object.values(filteredServices);
}

processPodcastMovies();