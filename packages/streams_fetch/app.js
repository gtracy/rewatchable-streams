'use strict';

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env.json');
if (fs.existsSync(envPath)) {
  require('dotenv-json')({ path: envPath });
}
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

const fetchStream = require('../../utils/streams').fetchStream;

exports.handler = async (event, context) => {
    for (const record of event.Records) {
      if( record.eventName !== 'INSERT' ) {
        logger.info({ eventName: record.eventName }, 'Skipping non-insert event');
        continue;
      }
      const tmdb_id_number = parseInt(record.dynamodb.NewImage.tmdb_id.N, 10);
      try {
        await fetchStream(tmdb_id_number);
        logger.info({ tmdbId: tmdb_id_number }, 'Refreshed streaming details for TMDB ID');
      } catch (error) {
        logger.error({ err: error, tmdbId: tmdb_id_number }, 'Error refreshing streaming details');
      }
    }
};

exports.logger = logger;
