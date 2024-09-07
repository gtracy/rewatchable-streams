'use strict';

const path = require('path');
const _ = require('underscore');
const axios = require('axios');
let Parser = require('rss-parser');

const dotenv = require('dotenv-json')({path:path.resolve(__dirname, '.env.json')});
const config = require('../shared/config');
const logger = require('pino')(config.getLogConfig());

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

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

      // Query TMDB by movie title
      logger.debug('Query TMDB for: '+movieTitle);
      const searchUrl = `${TMDB_API_BASE_URL}?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}`;
      const response = await axios.get(searchUrl);
      const results = response.data.results;

      if (results.length > 0) {

        // match algorithm is weak - we find the first english language movie in the list
        //   todo: incorporate rating vote counts
        const first_english_match = _.findWhere(results, { original_language: 'en' });
        const movieId = first_english_match.id; // Get ID from first search result

        // Fetch movie details using TMDB ID
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
            pod_date : episode.pubDate,
            pod_desc : episode.content,
            pod_guid : episode.guid, // Key
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
    console.error(error);
    return 'Lambda function failed!';
  }
};