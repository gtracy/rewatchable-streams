'use strict';

const path = require('path');
const streamingAvailability = require('streaming-availability');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../../.env.json')});
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

const fetchStream = require('../../utils/streams').fetchStream;

exports.handler = async (event,context) => {  
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
  
    for (const record of event.Records) {
      if( record.eventName !== 'INSERT' ) {
        logger.info('Skipping non-insert event:', record.eventName);
        continue;
      }
      const tmdb_id_number = parseInt(record.dynamodb.NewImage.tmdb_id.N,10);
      await fetchStream(tmdb_id_number);
      logger.info('Refreshed streaming details for TMDB ID:', tmdb_id_number);
    }
};
