const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Environment variables
const PODCAST_MOVIES_TABLE = process.env.PODCAST_MOVIES_TABLE || 'podcast_movies';
const MOVIE_STREAMS_TABLE = process.env.MOVIE_STREAMS_TABLE || 'movie_streams';
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchable-streams-webapp-1757203168';
const S3_KEY = process.env.S3_KEY || 'data.json';

/**
 * Main application function that generates JSON data for the website
 */
async function generateRewatchableStreamsData() {
    console.log('Starting rewatchable streams data generation...');
    
    try {
        // Initialize AWS clients
        const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-2' });
        const docClient = DynamoDBDocumentClient.from(dynamoClient);
        const s3Client = new S3Client({ region: process.env.AWS_REGION || 'us-east-2' });
        
        // Fetch all podcasts from DynamoDB
        const podcasts = await fetchAllPodcasts(docClient);
        console.log(`Found ${podcasts.length} podcasts`);
        
        // Fetch movie data for each podcast and merge
        const enrichedPodcasts = await enrichPodcastsWithMovieData(docClient, podcasts);
        console.log(`Enriched ${enrichedPodcasts.length} podcasts with movie data`);
        
        // Create the final JSON structure
        const result = {
            podcasts: enrichedPodcasts,
            generated_at: new Date().toISOString(),
            total_podcasts: enrichedPodcasts.length
        };
        
        // Upload to S3
        await uploadToS3(s3Client, result);
        console.log('Successfully uploaded data to S3');
        
        return {
            success: true,
            total_podcasts: enrichedPodcasts.length,
            generated_at: result.generated_at
        };
        
    } catch (error) {
        console.error('Error generating data:', error);
        throw error;
    }
}

/**
 * Fetch all podcasts from the podcast_movies table
 */
async function fetchAllPodcasts(docClient) {
    const params = {
        TableName: PODCAST_MOVIES_TABLE,
        FilterExpression: 'gsi_pk = :gsi_pk',
        ExpressionAttributeValues: {
            ':gsi_pk': 'ALL_PODS'
        }
    };
    
    const command = new ScanCommand(params);
    const result = await docClient.send(command);
    return result.Items || [];
}

/**
 * Enrich podcasts with movie data from movie_streams table
 */
async function enrichPodcastsWithMovieData(docClient, podcasts) {
    const enrichedPodcasts = [];
    
    for (const podcast of podcasts) {
        try {
            // Get movie data by tmdb_id
            const movieData = await fetchMovieData(docClient, podcast.tmdb_id);
            
            if (movieData) {
                // Merge podcast and movie data
                const enrichedPodcast = {
                    pod_title: podcast.pod_title,
                    pod_desc: podcast.pod_desc,
                    pod_date: podcast.pod_date,
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
                console.warn(`No movie data found for tmdb_id: ${podcast.tmdb_id}`);
            }
        } catch (error) {
            console.error(`Error enriching podcast ${podcast.pod_title}:`, error);
        }
    }
    
    return enrichedPodcasts;
}

/**
 * Fetch movie data from movie_streams table
 */
async function fetchMovieData(docClient, tmdbId) {
    const params = {
        TableName: MOVIE_STREAMS_TABLE,
        FilterExpression: 'tmdb_id = :tmdb_id',
        ExpressionAttributeValues: {
            ':tmdb_id': tmdbId
        }
    };
    
    const command = new ScanCommand(params);
    const result = await docClient.send(command);
    
    if (result.Items && result.Items.length > 0) {
        return result.Items[0];
    }
    
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
        if (typeof genre === 'object' && genre.name) {
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
    
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
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
    enrichPodcastsWithMovieData,
    fetchMovieData,
    filterStreamingOptions,
    flattenGenres,
    uploadToS3
};
