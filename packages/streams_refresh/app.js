'use strict';

const fs = require('fs');
const path = require('path');

// .env.json holds local secrets and is gitignored; on Lambda the same values
// come from the function configuration, so only load the file when present.
// (Previously this threw ENOENT at require time whenever .env.json was
// missing, so the handler could not even load on Lambda.)
const envJsonPath = path.resolve(__dirname, '../../.env.json');
if (fs.existsSync(envJsonPath)) {
    require('dotenv-json')({ path: envJsonPath });
}
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());
const fetchStream = require('../../utils/streams').fetchStream;

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, QueryCommand } = require("@aws-sdk/lib-dynamodb");

// Quota economics (see issue #72): ~450 titles in the catalog, Movie of the
// Night enforces per-minute burst limits and a monthly quota. At the default
// 5 movies/hour the catalog refreshes every ~3.75 days on ~3,600 calls/month,
// well below a standard 10,000 req/mo quota.
const DEFAULT_LIMIT = 5;
const DEFAULT_PACING_MS = 500;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRefreshLimit() {
    const parsed = parseInt(process.env.STREAM_REFRESH_LIMIT || '', 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_LIMIT;
}

function getPacingMs() {
    const parsed = parseInt(process.env.STREAM_REFRESH_PACING_MS || '', 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : DEFAULT_PACING_MS;
}

exports.handler = async (event, context, deps = {}) => {
    const limit = getRefreshLimit();
    const pacingMs = getPacingMs();
    const metrics = {
        movies_examined: 0,
        movies_updated: 0,
        movies_failed: 0,
        rate_limited: false,
        // The streaming-availability client does not surface quota headers,
        // so remaining quota is unknown here; 429 responses are the quota
        // signal and stop the batch (see below).
        api_quota_remaining: null,
    };

    try {
        const oldestMovies = await getOldestMovieStreams(limit);
        for (let i = 0; i < oldestMovies.length; i++) {
            const movie = oldestMovies[i];
            // Pace fetches so the batch never bursts past the API's
            // per-minute limit. No delay before the first fetch.
            if (i > 0 && pacingMs > 0) {
                await sleep(pacingMs);
            }
            metrics.movies_examined++;
            const result = await fetchStream(movie.tmdb_id, deps);
            if (result && result.ok) {
                metrics.movies_updated++;
            } else {
                metrics.movies_failed++;
                if (result && result.rateLimited) {
                    // Stop the batch immediately and exit cleanly instead of
                    // hammering a rate-limited API; Lambda will not retry in
                    // an error storm and the next hourly run picks up where
                    // this one stopped. fetchStream already bumped the
                    // failed title's last_updated so the queue still advances.
                    metrics.rate_limited = true;
                    logger.warn(
                        { movie, retryAfter: result.retryAfter },
                        'Rate limit (429) from streaming API — stopping this batch'
                    );
                    break;
                }
            }
        }
        logger.info(
            { ...metrics, refresh_count: metrics.movies_updated },
            `refreshed ${metrics.movies_updated} movies (${metrics.movies_failed} failed, ${metrics.movies_examined} examined)`
        );
    } catch (error) {
        logger.error({ error, ...metrics }, "An error occurred in main execution:");
    }

    return metrics;
};


/**
 * Fetches the N oldest records from the movie_streams table using the corrected GSI.
 *
 * @param {number} limit - The maximum number of records to fetch (e.g., 25).
 * @returns {Promise<Array<object>>} - A list of the oldest movie stream records.
 */
async function getOldestMovieStreams(limit) {
    const client = new DynamoDBClient(config.getAWSConfig());
    const docClient = DynamoDBDocumentClient.from(client);
    logger.info(`Attempting to fetch ${limit} oldest records from table '${process.env.DYNAMO_MOVIE_STREAMS_TABLE}'`);

    const queryCommand = new QueryCommand({
        TableName: process.env.DYNAMO_MOVIE_STREAMS_TABLE,
        IndexName: 'last_updated-index',
        KeyConditionExpression: `#gsi_pk = :pk_val`,
        ExpressionAttributeNames: {
          '#gsi_pk': 'gsi_pk',
        },
        ExpressionAttributeValues: {
          ':pk_val': 'ALL_MOVIES',
        },
        ScanIndexForward: true, // true = oldest first
        Limit: limit,
        ProjectionExpression: "tmdb_id, title, last_updated"
    });

    try {
        const result = await docClient.send(queryCommand);
        logger.info(`Successfully fetched ${result.Items ? result.Items.length : 0} records.`);
        return result.Items || [];
    } catch (error) {
        logger.error({error},"Error fetching oldest movie streams:");
        throw error;
    }
}

// Exported for unit tests (test/streams_refresh.test.js).
exports.getOldestMovieStreams = getOldestMovieStreams;
