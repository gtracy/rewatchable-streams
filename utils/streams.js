'use strict';

const fs = require('fs');
const path = require('path');
const streamingAvailability = require('streaming-availability');

// .env.json holds local secrets and is gitignored; on Lambda the same values
// come from the function configuration, so only load the file when present.
// (Previously this threw ENOENT at require time whenever .env.json was
// missing, so the module could not even load on Lambda.)
const envJsonPath = path.resolve(__dirname, '../.env.json');
if (fs.existsSync(envJsonPath)) {
    require('dotenv-json')({ path: envJsonPath });
}
const config = require('../config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

/**
 * Fetch streaming details for a TMDB id and store them in DynamoDB.
 *
 * Always returns a result object (never throws) so batch callers can keep
 * the refresh queue moving:
 *   { ok: true }                      — details fetched and stored
 *   { ok: false, rateLimited: true }  — API returned 429; caller should stop the batch
 *   { ok: false, error }              — any other failure
 *
 * On any failure the record's `last_updated` is bumped and `refresh_status`
 * is set to 'failed', so the title drops to the back of the
 * `last_updated-index` queue instead of starving it. Previously a failing
 * title stayed the oldest record forever and stalled every refresh run.
 *
 * @param {number} tmdb_id
 * @param {object} [deps] - optional overrides for testing.
 *   deps.createStreamingClient(apiKey) must return an object with
 *   `showsApi.getShow({id})`; defaults to the real Movie of the Night client.
 */
module.exports.fetchStream = async function(tmdb_id, deps = {}) {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);

    const movie_id = 'movie/'+tmdb_id;
    logger.debug('lookup movie '+tmdb_id);

    try {
        const createStreamingClient = deps.createStreamingClient || defaultCreateStreamingClient;
        const streamingClient = createStreamingClient(process.env.MOVIE_OF_THE_NIGHT_API_KEY);
        const streamingDetails = await streamingClient.showsApi.getShow({id: movie_id});
        logger.info(`grabbed show details for ${streamingDetails.title} (${streamingDetails.tmdbId})`);

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
            "imageSet": streamingDetails.imageSet.verticalPoster.w240,

            "last_updated": new Date().toISOString(),
            "gsi_pk": 'ALL_MOVIES'
        }

        // grab the streaming options for the US
        if( streamingDetails.streamingOptions.us ) {
            logger.info('fetching streaming options for US');
            movieStream.streamingOptions = filterServices(streamingDetails.streamingOptions.us);
        } else {
            logger.error('no streaming options for US');
        }

        const dynamo_doc = {
            TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
            Item: movieStream
        };
        await docClient.send(new PutCommand(dynamo_doc));
        logger.info('Streaming options saved');
        return { ok: true };
    } catch (error) {
        logger.error({error},'Error fetching streaming details: ');
        const rateLimited = isRateLimitError(error);
        await markRefreshFailed(docClient, movie_id, error);
        return {
            ok: false,
            rateLimited,
            retryAfter: error && error.response && error.response.headers
                ? error.response.headers['retry-after']
                : undefined,
            error,
        };
    }
}

function defaultCreateStreamingClient(apiKey) {
    return new streamingAvailability.Client(new streamingAvailability.Configuration({
        apiKey
    }));
}

/**
 * Bump `last_updated` and record the failure so the title drops to the back
 * of the `last_updated-index` queue. Keyed by `id` (`movie/<tmdb_id>`), the
 * same identity `fetchStream` writes on success.
 * Bookkeeping failures are logged, never thrown — they must not mask the
 * original fetch error or break the caller's batch loop.
 */
async function markRefreshFailed(docClient, movie_id, error) {
    try {
        await docClient.send(new UpdateCommand({
            TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
            Key: { id: movie_id },
            UpdateExpression: 'SET last_updated = :lu, gsi_pk = :pk, refresh_status = :st, refresh_error = :err',
            ExpressionAttributeValues: {
                ':lu': new Date().toISOString(),
                ':pk': 'ALL_MOVIES',
                ':st': 'failed',
                ':err': String((error && error.message) || error || 'unknown error').slice(0, 500),
            },
        }));
        logger.info(`Marked ${movie_id} as failed refresh; last_updated bumped so the queue advances`);
    } catch (updateError) {
        logger.error({error: updateError}, `Could not mark ${movie_id} as failed refresh`);
    }
}

function isRateLimitError(error) {
    if (!error) return false;
    if (error.status === 429 || error.statusCode === 429) return true;
    if (error.response && error.response.status === 429) return true;
    return /429|rate limit|too many requests/i.test(String(error.message || ''));
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
