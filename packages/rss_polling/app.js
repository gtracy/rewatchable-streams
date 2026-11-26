'use strict';

const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const axios = require('axios');
let Parser = require('rss-parser');

const envPath = path.resolve(__dirname, '../../.env.json');
if (fs.existsSync(envPath)) {
  require('dotenv-json')({ path: envPath });
}
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");
const { extractMovieTitle } = require('./title');

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/search/movie';

exports.handler = async (event) => {
  if( !process.env.TMDB_API_KEY ) {
    logger.error({ envPath }, 'Failed to initialize job: missing TMDB_API_KEY');
    return;
  }
  logger.debug({ awsConfig: config.getAWSConfig() }, 'Initialized AWS config');
  const client = new DynamoDBClient(config.getAWSConfig());
  const docClient = DynamoDBDocumentClient.from(client);

  // Fetch Podcast RSS Feed
  try {
    let pod_count = 0;
    let skip_count = 0;
    let save_count = 0;

    let parser = new Parser();
    const feed = await parser.parseURL('https://feeds.megaphone.fm/the-rewatchables');
    const episodes = feed.items;

    // Loop through each episode and lookup the movie
    // details from the TMDB API
    for (const episode of episodes) {
      pod_count++;

      const movieTitle = extractMovieTitle(episode.title, logger);
      if( !movieTitle ) {
        continue;
      }

      // Check if episode already exists in DynamoDB
      const getParams = {
        TableName: process.env.DYNAMO_PODCAST_MOVIES_TABLE,
        Key: { pod_guid: episode.guid }
      };
      const existing = await docClient.send(new GetCommand(getParams));
      if (existing && existing.Item) {
        logger.debug({ podGuid: episode.guid }, 'Episode already exists, skipping');
        continue;
      }

      // Query TMDB by movie title
      logger.debug({ movieTitle }, 'Querying TMDB');
      const searchUrl = `${TMDB_API_BASE_URL}?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false&language=en-US`;
      const response = await axios.get(searchUrl);
      const results = response.data.results;

      if (results.length > 0) {
        // Filter out non-English titles
        const englishResults = results.filter(result => result.original_language === 'en');
        if (englishResults.length === 0) {
          logger.error({ movieTitle }, 'No English results found');
          skip_count++;
          continue;
        }
        const first_english_match = findBestMatch(englishResults, movieTitle);
        if (!first_english_match) {
          logger.error({ movieTitle }, 'No matching English result found');
          skip_count++;
          continue;
        }
        logger.info({ movieTitle, matchedTitle: first_english_match.original_title, tmdbId: first_english_match.id }, 'TMDB search match found');

        const movieId = first_english_match.id; // Get ID from first search result

        // Fetch movie details using TMDB ID
        logger.debug({ movieTitle, movieId }, 'Fetching TMDB movie details');
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`;
        const detailsResponse = await axios.get(detailsUrl);
        const movieDetails = detailsResponse.data;

        const item = {
          TableName: process.env.DYNAMO_PODCAST_MOVIES_TABLE,
          Item: {
            tmdb_id : movieId,
            imdb_id : movieDetails.imdb_id,
            movie_title : movieDetails.original_title,
            tagline : movieDetails.tagline,
            overview : movieDetails.overview,
            runtime : movieDetails.runtime,
            release_date : movieDetails.release_date,
            img : movieDetails.poster_path,
            genres : movieDetails.genres,
          
            pod_title : episode.title,
            pod_link : episode.enclosure ? episode.enclosure.url : 'https://www.theringer.com/podcasts/the-rewatchables',
            pod_date : new Date(episode.pubDate).toISOString(),
            pod_desc : episode.content,
            pod_guid : episode.guid, // Key

            last_updated : new Date().toISOString(),
            gsi_pk : 'ALL_PODS'
          },
          ConditionExpression: 'attribute_not_exists(pod_guid)'
        };
  
        try {
            const data = await docClient.send(new PutCommand(item));
            logger.info({ movieTitle: movieDetails.original_title, podGuid: item.Item.pod_guid }, 'Inserted new movie podcast into DynamoDB');
            save_count++;
        } catch (error) {
          if (error.name === 'ConditionalCheckFailedException') {
            logger.debug({ podGuid: item.Item.pod_guid, movieTitle: movieDetails.original_title }, 'Movie podcast already exists');
            skip_count++;
          } else {
            logger.error({
              err: error,
              podGuid: item.Item.pod_guid,
            }, 'Error inserting item into DynamoDB');
            return false;
          }
        }
      } else {
        logger.error({ movieTitle }, 'Movie not found on TMDB');
        skip_count++;
      }
    }
    logger.info({ podCount: pod_count, saveCount: save_count, skipCount: skip_count }, 'Podcast processing complete');
    return 'Lambda function execution successful!';
  } catch (error) {
    logger.error({ err: error }, 'Error processing RSS feed');
    return 'Lambda function failed!';
  }
};

function findBestMatch(results, movieTitle) {
  if (!results || results.length === 0) {
    logger.debug({ movieTitle }, 'No TMDB results to match');
    return null;
  }
  if (results.length === 1) {
    logger.debug({ movieTitle, matchedTitle: results[0].original_title }, 'Single TMDB result found');
    return results[0];
  }

  const sortedResults = _.sortBy(results, item => {
      let popularity = item.popularity;

      // Convert to a number. If it's not a valid number (e.g., undefined, null, non-numeric string),
      // it will become NaN.
      popularity = Number(popularity);

      // If popularity is NaN, treat it as a very small number for sorting.
      // This ensures items with missing/invalid popularity always sink to the bottom
      // when sorting ascending, and thus stay at the bottom after reversing.
      if (isNaN(popularity)) {
          return -Infinity;
      }

      // Return the (cleaned) numeric popularity for sorting
      return popularity;
  }).reverse();

  logger.debug({ movieTitle, matchedTitle: sortedResults[0].original_title, resultCount: results.length }, 'Multiple TMDB results found');
  return sortedResults[0];
}

exports.findBestMatch = findBestMatch;
exports.logger = logger;
