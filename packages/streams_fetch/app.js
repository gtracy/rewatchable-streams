'use strict';

const path = require('path');
const axios = require('axios');
const streamingAvailability = require('streaming-availability');

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '.env.json')});
const config = require('./config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");


exports.handler = async (event) => {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
  
  for (const record of event.Records) {
    const movie_id = 'movie/'+record.dynamodb.NewImage.tmdb_id.N;
    const imdb_id = record.dynamodb.NewImage.imdb_id.S;
    logger.debug('lookup movie '+imdb_id);

    try {
        const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
          apiKey: process.env.MOVIE_OF_THE_NIGHT_API_KEY
        }));
        const streamingDetails = await client.showsApi.getShow({id: movie_id});
        logger.debug(streamingDetails.title);
        logger.debug(streamingDetails.tmdbId);
        console.debug(streamingDetails);
        // const usStreamingOptions = streamingDetails.filter(option => option.streamingOptions.us.length > 0);
        // logger.debug(usStreamingOptions);

        const newItem = {
          tmdb_id: movieId,
          streamingOptions: usStreamingOptions
        };

        //await docClient.send(new PutCommand(newItem));
        console.log('Streaming options saved for movie:', movieId);
    } catch (error) {
      console.error('Error fetching streaming details:', error);
    }
  }
};