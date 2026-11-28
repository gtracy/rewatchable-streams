const fs = require('fs');
const path = require('path');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const config = require('../../config');
const logger = require('pino')(config.getLogConfig());

// Environment variables
const PODCAST_MOVIES_TABLE = process.env.PODCAST_MOVIES_TABLE || 'podcast_movies';
const MOVIE_STREAMS_TABLE = process.env.MOVIE_STREAMS_TABLE || 'movie_streams';
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchables';
const S3_KEY = process.env.S3_KEY || 'data_files/podcast_movie_data.json';

/**
 * Main application function that generates JSON data for the website
 */
async function generateRewatchableStreamsData() {
    logger.info('Starting rewatchable streams data generation...');

    try {
        // Initialize AWS clients
        const region = process.env.AWS_REGION || 'us-east-2';
        const awsConfig = config.getAWSConfig();
        const dynamoClient = new DynamoDBClient(
            awsConfig.endpoint ? { region, endpoint: awsConfig.endpoint } : { region }
        );
        const docClient = DynamoDBDocumentClient.from(dynamoClient);

        // Fetch all podcasts from DynamoDB
        const podcasts = await fetchAllPodcasts(docClient);
        logger.info({ count: podcasts.length }, 'Found podcasts');

        // Fetch movie data for each podcast and merge
        const enrichedPodcasts = await enrichPodcastsWithMovieData(docClient, podcasts);
        logger.info({ count: enrichedPodcasts.length }, 'Enriched podcasts with movie data');

        // Create the final JSON structure
        const result = {
            podcasts: enrichedPodcasts,
            generated_at: new Date().toISOString(),
            total_podcasts: enrichedPodcasts.length
        };

        // Write to local file when LOCAL_OUTPUT_PATH is set, otherwise upload to S3
        const localOutputPath = process.env.LOCAL_OUTPUT_PATH;
        if (localOutputPath) {
            const resolvedPath = path.resolve(localOutputPath);
            fs.mkdirSync(path.dirname(resolvedPath), { recursive: true });
            fs.writeFileSync(resolvedPath, JSON.stringify(result, null, 2), 'utf8');
            logger.info({ outputPath: resolvedPath }, 'Successfully wrote data to local file');
        } else {
            const s3Client = new S3Client({ region });
            await uploadToS3(s3Client, result);
            logger.info({ bucket: S3_BUCKET, key: S3_KEY }, 'Successfully uploaded data to S3');
        }

        return {
            success: true,
            total_podcasts: enrichedPodcasts.length,
            generated_at: result.generated_at
        };

    } catch (error) {
        logger.error({ err: error }, 'Error generating data');
        throw error;
    }
}

/**
 * Fetch all podcasts from the podcast_movies table with pagination
 */
async function fetchAllPodcasts(docClient) {
    const items = [];
    let lastEvaluatedKey;

    do {
        const params = {
            TableName: PODCAST_MOVIES_TABLE,
            FilterExpression: 'gsi_pk = :gsi_pk',
            ExpressionAttributeValues: {
                ':gsi_pk': 'ALL_PODS'
            }
        };

        if (lastEvaluatedKey) {
            params.ExclusiveStartKey = lastEvaluatedKey;
        }

        try {
            const command = new ScanCommand(params);
            const result = await docClient.send(command);
            if (result.Items) {
                items.push(...result.Items);
            }
            lastEvaluatedKey = result.LastEvaluatedKey;
        } catch (error) {
            logger.error({ err: error, table: PODCAST_MOVIES_TABLE }, 'Error scanning podcasts table');
            throw error;
        }
    } while (lastEvaluatedKey);

    return items;
}

/**
 * Fetch all movies from movie_streams table with pagination and index by tmdb_id
 */
async function fetchAllMovies(docClient) {
    const moviesByTmdbId = new Map();
    let lastEvaluatedKey;

    do {
        const params = {
            TableName: MOVIE_STREAMS_TABLE
        };

        if (lastEvaluatedKey) {
            params.ExclusiveStartKey = lastEvaluatedKey;
        }

        try {
            const command = new ScanCommand(params);
            const result = await docClient.send(command);
            if (result.Items) {
                for (const item of result.Items) {
                    if (item && item.tmdb_id !== undefined && !moviesByTmdbId.has(item.tmdb_id)) {
                        moviesByTmdbId.set(item.tmdb_id, item);
                    }
                }
            }
            lastEvaluatedKey = result.LastEvaluatedKey;
        } catch (error) {
            logger.error({ err: error, table: MOVIE_STREAMS_TABLE }, 'Error scanning movie streams table');
            throw error;
        }
    } while (lastEvaluatedKey);

    return moviesByTmdbId;
}

/**
 * Enrich podcasts with movie data from movie_streams table using a single paginated scan
 */
async function enrichPodcastsWithMovieData(docClient, podcasts) {
    if (!Array.isArray(podcasts) || podcasts.length === 0) {
        return [];
    }

    const moviesByTmdbId = await fetchAllMovies(docClient);
    const enrichedPodcasts = [];

    for (const podcast of podcasts) {
        try {
            const movieData = moviesByTmdbId.get(podcast.tmdb_id);

            if (movieData) {
                // Merge podcast and movie data
                const enrichedPodcast = {
                    pod_title: podcast.pod_title,
                    pod_desc: podcast.pod_desc,
                    pod_date: podcast.pod_date,
                    pod_link: podcast.pod_link,
                    movie: {
                        tmdb_id: movieData.tmdb_id,
                        imdb_id: movieData.imdb_id,
                        movie_title: movieData.title,
                        title: movieData.title,
                        overview: movieData.overview,
                        tagline: movieData.tagline,
                        release_date: movieData.releaseYear ? movieData.releaseYear.toString() : null,
                        releaseYear: movieData.releaseYear,
                        runtime: movieData.runtime,
                        img: podcast.img,
                        imageSet: movieData.imageSet,
                        id: movieData.id,
                        genres: flattenGenres(movieData.genres || []),
                        cast: movieData.cast || [],
                        directors: movieData.directors || [],
                        streamingOptions: filterStreamingOptions(movieData.streamingOptions || [])
                    }
                };

                enrichedPodcasts.push(enrichedPodcast);
            } else {
                logger.warn({ tmdbId: podcast.tmdb_id }, 'No movie data found for podcast');
            }
        } catch (error) {
            logger.error(
                { err: error, podTitle: podcast?.pod_title, tmdbId: podcast?.tmdb_id },
                'Error enriching podcast'
            );
        }
    }

    return enrichedPodcasts;
}

/**
 * Fetch movie data from movie_streams table by tmdb_id with pagination
 */
async function fetchMovieData(docClient, tmdbId) {
    let lastEvaluatedKey;

    do {
        const params = {
            TableName: MOVIE_STREAMS_TABLE,
            FilterExpression: 'tmdb_id = :tmdb_id',
            ExpressionAttributeValues: {
                ':tmdb_id': tmdbId
            }
        };

        if (lastEvaluatedKey) {
            params.ExclusiveStartKey = lastEvaluatedKey;
        }

        try {
            const command = new ScanCommand(params);
            const result = await docClient.send(command);

            if (result.Items && result.Items.length > 0) {
                return result.Items[0];
            }
            lastEvaluatedKey = result.LastEvaluatedKey;
        } catch (error) {
            logger.error({ err: error, tmdbId, table: MOVIE_STREAMS_TABLE }, 'Error fetching movie data');
            throw error;
        }
    } while (lastEvaluatedKey);

    return null;
}

/**
 * Filter streaming options to remove subtitles and flatten service object
 */
function filterStreamingOptions(streamingOptions) {
    if (!Array.isArray(streamingOptions)) {
        return [];
    }

    return streamingOptions.map(option => {
        // Create a copy of the option to avoid mutating the original
        const filteredOption = { ...option };

        // Remove subtitles if it exists
        if (filteredOption.subtitles) {
            delete filteredOption.subtitles;
        }

        // Flatten service object properties into the main option
        if (filteredOption.service) {
            const service = filteredOption.service;

            // Add service properties directly to the option
            filteredOption.serviceName = service.name;
            filteredOption.serviceThemeColorCode = service.themeColorCode;
            filteredOption.serviceId = service.id;
            filteredOption.serviceImageSet = service.imageSet;
            filteredOption.serviceHomePage = service.homePage;

            // Remove the original service object
            delete filteredOption.service;
        }

        return filteredOption;
    });
}

/**
 * Flatten genres array to just names
 */
function flattenGenres(genres) {
    if (!Array.isArray(genres)) {
        return [];
    }

    return genres.map(genre => {
        if (genre && typeof genre === 'object' && genre.name) {
            return genre.name;
        }
        return genre;
    });
}

/**
 * Upload JSON data to S3
 */
async function uploadToS3(s3Client, data) {
    const params = {
        Bucket: S3_BUCKET,
        Key: S3_KEY,
        Body: JSON.stringify(data, null, 2),
        ContentType: 'application/json',
        CacheControl: 'max-age=3600' // Cache for 1 hour
    };

    try {
        const command = new PutObjectCommand(params);
        await s3Client.send(command);
    } catch (error) {
        logger.error({ err: error, bucket: S3_BUCKET, key: S3_KEY }, 'Error uploading data to S3');
        throw error;
    }
}

/**
 * Lambda handler function
 */
async function handler(event, context) {
    try {
        const result = await generateRewatchableStreamsData();
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Data generation completed successfully',
                ...result
            })
        };
    } catch (error) {
        logger.error({ err: error }, 'Lambda handler error');
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error generating data',
                error: error.message
            })
        };
    }
}

module.exports = {
    handler,
    generateRewatchableStreamsData,
    fetchAllPodcasts,
    fetchAllMovies,
    enrichPodcastsWithMovieData,
    fetchMovieData,
    filterStreamingOptions,
    flattenGenres,
    uploadToS3
};
