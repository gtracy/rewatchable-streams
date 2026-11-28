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
    if (!Array.isArray(event?.Records)) {
      logger.warn({ eventType: typeof event }, 'Invalid or missing Records array in event');
      return;
    }

    for (const record of event.Records) {
      if (record?.eventName !== 'INSERT') {
        logger.info({ eventName: record?.eventName }, 'Skipping non-insert event');
        continue;
      }

      let tmdb_id_number;
      try {
        const rawTmdbId = record?.dynamodb?.NewImage?.tmdb_id?.N;
        if (typeof rawTmdbId !== 'string' || !/^\d+$/.test(rawTmdbId.trim())) {
          logger.warn({ rawTmdbId }, 'Skipping record with missing or invalid tmdb_id');
          continue;
        }
        tmdb_id_number = Number.parseInt(rawTmdbId, 10);
        if (!Number.isInteger(tmdb_id_number) || tmdb_id_number <= 0) {
          logger.warn({ rawTmdbId, tmdbId: tmdb_id_number }, 'Skipping record with non-positive tmdb_id');
          continue;
        }
        await fetchStream(tmdb_id_number);
        logger.info({ tmdbId: tmdb_id_number }, 'Refreshed streaming details for TMDB ID');
      } catch (error) {
        logger.error({ err: error, tmdbId: tmdb_id_number }, 'Error refreshing streaming details');
      }
    }
};

exports.logger = logger;
