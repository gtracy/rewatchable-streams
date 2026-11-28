'use strict';

const fs = require('fs');
const path = require('path');
const streamingAvailability = require('streaming-availability');

const envPath = path.resolve(__dirname, '../.env.json');
if (fs.existsSync(envPath)) {
    require('dotenv-json')({ path: envPath });
}
const config = require('../config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

module.exports.fetchStream = async function(tmdb_id) {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
    
    const movie_id = 'movie/'+tmdb_id;
    logger.debug({ tmdbId: tmdb_id }, 'Looking up movie streaming details');

    try {
        const apiClient = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: process.env.MOVIE_OF_THE_NIGHT_API_KEY
        }));
        const streamingDetails = await apiClient.showsApi.getShow({id: movie_id});
        if (!streamingDetails) {
            logger.error({ tmdbId: tmdb_id }, 'Empty show details returned');
            return;
        }
        logger.info({ title: streamingDetails.title, tmdbId: streamingDetails.tmdbId }, 'Grabbed show details');

        // build a new object with the minimal data we need
        let movieStream = {
            "id": streamingDetails.id,
            "imdb_id": streamingDetails.imdbId,
            "tmdb_id": tmdb_id,
            "title": streamingDetails.title,
            "overview": streamingDetails.overview,
            "releaseYear": streamingDetails.releaseYear,
            "directors": streamingDetails.directors,
            "cast": streamingDetails.cast,
            "imageSet": streamingDetails.imageSet?.verticalPoster?.w240,

            "last_updated": new Date().toISOString(),
            "gsi_pk": 'ALL_MOVIES'
        }

        // grab the streaming options for the US
        if (streamingDetails.streamingOptions?.us) {
            logger.info({ tmdbId: tmdb_id }, 'Fetching streaming options for US');
            movieStream.streamingOptions = filterServices(streamingDetails.streamingOptions.us);
        } else {
            logger.error({ tmdbId: tmdb_id }, 'No streaming options for US');
        }

        const dynamo_doc = {
            TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
            Item: movieStream
        };
        await docClient.send(new PutCommand(dynamo_doc));
        logger.info({ tmdbId: tmdb_id }, 'Streaming options saved');
    } catch (error) {
        logger.error({ err: error, tmdbId: tmdb_id }, 'Error fetching streaming details');
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

      // If the new item has a known type and either current is unknown or new has higher priority, update
      if (newTypeOrder !== undefined && (currentTypeOrder === undefined || newTypeOrder < currentTypeOrder)) {
        filteredServices[serviceId] = service;
      }
    }
  }

  return Object.values(filteredServices);
}

module.exports.filterServices = filterServices;
module.exports.logger = logger;
