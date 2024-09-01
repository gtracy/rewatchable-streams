'use strict';
const path = require('path');
const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '.env.json')});

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const config = require('../packages/shared/config');
console.dir(config.getAWSConfig());

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
      console.log("Table Created ", table_name);
  } catch (err) {
      if( err.name == 'ResourceInUseException' ) {
        console.log(table_name + " already exists");
      } else {
        console.error("Error", err);
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
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        }
    };

    try {
        const data = await client.send(new CreateTableCommand(params));
        console.log("Table Created ", table_name);
    } catch (err) {
        if( err.name == 'ResourceInUseException' ) {
          console.log(table_name + " already exists");
        } else {
          console.error("Error", err);
        }
    }
}


(async () => {
    await createPodcastMoviesTable(process.env.DYNAMO_PODCAST_MOVIES_TABLE);
    await createMovieStreamsTable(process.env.DYNAMO_MOVIE_STREAMS_TABLE);
})();

