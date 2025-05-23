'use strict';

const path = require('path');
const streamingAvailability = require('streaming-availability');

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../../.env.json')});
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");


exports.handler = async (event,context) => {  
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
  
    for (const record of event.Records) {
      if( record.eventName !== 'INSERT' ) {
        logger.info('Skipping non-insert event:', record.eventName);
        continue;
      }
      const tmdb_id_number = parseInt(record.dynamodb.NewImage.tmdb_id.N,10);
      const movie_id = 'movie/'+tmdb_id_number;
      const imdb_id = record.dynamodb.NewImage.imdb_id.S;
      logger.debug('lookup movie '+imdb_id);

      try {
          const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
            apiKey: process.env.MOVIE_OF_THE_NIGHT_API_KEY
          }));
          const streamingDetails = await client.showsApi.getShow({id: movie_id});
          logger.debug('title: '+streamingDetails.title);
          logger.debug('tmdbId: '+streamingDetails.tmdbId);
          //logger.debug({streamingDetails})

          // build a new object with the minimal data we need
          let movieStream = {
              "id": streamingDetails.id,
              "imdb_id": streamingDetails.imdbId,
              "tmdb_id": tmdb_id_number,
              "title": streamingDetails.title,
              "overview": streamingDetails.overview,
              "releaseYear": streamingDetails.releaseYear,
              "directors": streamingDetails.directors,
              "cast": streamingDetails.cast,
              "imageSet": streamingDetails.imageSet.verticalPoster.w240,

              "last_updated": new Date().toISOString(),
              "gsi_pk": 'ALL_MOVIES'
            }

          // grab the streaming options for the US
          if( streamingDetails.streamingOptions.us ) {
              movieStream.streamingOptions = filterServices(streamingDetails.streamingOptions.us);
          }

          const dynamo_doc = {
              TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
              Item: movieStream
          };
          logger.debug({dynamo_doc});
          await docClient.send(new PutCommand(dynamo_doc));
          console.log('Streaming options saved for movie: ', movie_id);
      } catch (error) {
        console.error('Error fetching streaming details: ', error);
      }
    }
};

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