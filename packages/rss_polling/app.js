'use strict';

const path = require('path');
const _ = require('underscore');
const axios = require('axios');
let Parser = require('rss-parser');

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '../../.env.json')});
const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/search/movie';

function extractMovieTitle(str) {
  const regex = /['\u2018\u2019\u0022\u201C\u201d](.*?)['\u2018\u2019\u0022\u201C\u201d]/;
  const match = str.match(regex);
  if( match ) {
    logger.debug(str);

    // Some of the movie titles are just wrong. Fix them here.
    if( match[1] === 'A Few Good (Re)Men' ) {
      return 'A Few Good Men';
    } else if( match[1] === 'Kicking and Screaming (1995)' ) {
      return 'Kicking and Screaming';
    } else if( match[1] === 'The Re-Heat' ) {
      return 'Heat';
    } else if( match[1] === 'The Re-Departed' ) {
      return 'The Departed';
    } else if( match[1] === 'Wayne' ) {
      return 'Wayne\'s World';
    } else {
      return match[1];
    }
    // some of the movie titles are poorly formatted. fix those too.
  } else if( str === 'Creed With Bill Simmons, Wesley Morris, Sean Fennessey, and K. Austin Collins' ) {
    return 'Creed';
  } else if( str === "The Omen’ With Bill Simmons and Chris Ryan" ) {
    return 'The Omen';
  } else if( str === "Miami Vice: Calderone’s Return (Part 1 + 2)" ) {
    return 'Miami Vice';
} else {
    logger.error('missing movie title - '+str);
    return null;
  }
}

exports.handler = async (event) => {
  if( !process.env.TMDB_API_KEY ) {
    logger.error('Failed to initialize job.');
    logger.error(path.resolve(__dirname, '.env.json'));
    return;
  }
  logger.debug(config.getAWSConfig());
  const client = new DynamoDBClient(config.getAWSConfig());
  const docClient = DynamoDBDocumentClient.from(client);

  // Fetch Podcast RSS Feed
  try {
    let parser = new Parser();
    const feed = await parser.parseURL('https://feeds.megaphone.fm/the-rewatchables');
    const episodes = feed.items;

    // Loop through each episode and lookup the movie
    // details from the TMDB API
    for (const episode of episodes) {
      const movieTitle = extractMovieTitle(episode.title);
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
        logger.debug('Episode already exists, skipping: ' + episode.guid);
        continue;
      }

      // Query TMDB by movie title
      logger.debug('Query TMDB for: '+movieTitle);
      const searchUrl = `${TMDB_API_BASE_URL}?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}&include_adult=false&language=en-US`;
      const response = await axios.get(searchUrl);
      const results = response.data.results;

      if (results.length > 0) {
        // Filter out non-English titles
        const englishResults = results.filter(result => result.original_language === 'en');
        if (englishResults.length === 0) {
          logger.error('No English results found for: ' + movieTitle);
          continue;
        }
        const first_english_match = findBestMatch(englishResults, movieTitle);
        logger.info('TMDB search match - '+first_english_match.original_title);

        const movieId = first_english_match.id; // Get ID from first search result

        // Fetch movie details using TMDB ID
        logger.debug('Fetch TMDB for '+movieTitle+' datails - '+movieId);
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
            logger.info('new movie pod found - '+ movieDetails.original_title);
            logger.info('inserted podcast details into Dynamo - '+item.Item.pod_guid);
        } catch (error) {
          if (error.name === 'ConditionalCheckFailedException') {
            logger.debug('Movie with guid: '+item.Item.pod_guid+' already exists - '+movieDetails.original_title);
          } else {
            logger.error({ 
              error: {
                message: error.message, 
                stack: error.stack,
              } 
            }, "Error inserting item into DynamoDB");              
            return false;
          }
        }
      } else {
        logger.error(`Movie not found on TMDB: ${movieTitle}`);
      }
    }
    return 'Lambda function execution successful!';
  } catch (error) {
    logger.error({error},'Error processing RSS feed');
    return 'Lambda function failed!';
  }
};

function findBestMatch(results, movieTitle) {
  if( results.length == 0 ) {
    logger.debug('single result found - '+first_english_match.original_title);
    return results[0];
  } else {
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
    
    logger.debug('multiple results found - '+sortedResults[0].original_title);
    return sortedResults[0];
  }
}