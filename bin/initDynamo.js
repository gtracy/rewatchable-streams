'use strict';

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env.json');
if (fs.existsSync(envPath)) {
  require('dotenv-json')({ path: envPath });
}

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const config = require('../config');
const logger = require('pino')(config.getLogConfig());

async function createPodcastMoviesTable(table_name) {
  const client = new DynamoDBClient(config.getAWSConfig());

  const params = {
      TableName: table_name,
      KeySchema: [
        { AttributeName: 'pod_guid', KeyType: 'HASH' }
      ],
      AttributeDefinitions: [
        { AttributeName: 'pod_guid', AttributeType: 'S' }
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
  };

  try {
      const data = await client.send(new CreateTableCommand(params));
      logger.info({ tableName: table_name }, 'Table created');
  } catch (err) {
      if( err.name == 'ResourceInUseException' ) {
        logger.info({ tableName: table_name }, 'Table already exists');
      } else {
        logger.error({ err, tableName: table_name }, 'Error creating table');
      }
  }

}

async function createMovieStreamsTable(table_name) {
    const client = new DynamoDBClient(config.getAWSConfig());

    const params = {
        TableName: table_name,
        KeySchema: [
          { AttributeName: 'tmdb_id', KeyType: 'HASH' }, // Primary key
        ],
        AttributeDefinitions: [
          { AttributeName: 'tmdb_id', AttributeType: 'N' },
          { AttributeName: 'last_updated', AttributeType: 'S' },
          { AttributeName: 'gsi_pk', AttributeType: 'S' },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        },
        GlobalSecondaryIndexes: [
          {
            IndexName: 'last_updated-index',
            KeySchema: [
              { AttributeName: 'gsi_pk', KeyType: 'HASH' },
              { AttributeName: 'last_updated', KeyType: 'RANGE' }
            ],
            Projection: {
              ProjectionType: 'ALL'
            },
            ProvisionedThroughput: {
              ReadCapacityUnits: 5,
              WriteCapacityUnits: 5
            }
          }
        ]
    };

    try {
        const data = await client.send(new CreateTableCommand(params));
        logger.info({ tableName: table_name }, 'Table created');
    } catch (err) {
        if( err.name == 'ResourceInUseException' ) {
          logger.info({ tableName: table_name }, 'Table already exists');
        } else {
          logger.error({ err, tableName: table_name }, 'Error creating table');
        }
    }
}


if (require.main === module) {
  logger.debug({ region: config.getAWSConfig().region }, 'Initializing DynamoDB tables');
  (async () => {
    await createPodcastMoviesTable(process.env.DYNAMO_PODCAST_MOVIES_TABLE);
    await createMovieStreamsTable(process.env.DYNAMO_MOVIE_STREAMS_TABLE);
  })();
}

module.exports = { createPodcastMoviesTable, createMovieStreamsTable, logger };


