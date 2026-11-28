const fs = require('fs');
const path = require('path');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { CloudFrontClient, CreateInvalidationCommand } = require("@aws-sdk/client-cloudfront");

const config = require('../../config');
const logger = require('pino')(config.getLogConfig());
const {
    generateLlmsTxt,
    generateLlmsFullTxt,
    generateSitemapXml,
    generateAiCatalogJson,
    injectSeoIntoIndexHtml
} = require('./seo-artifacts');

// Environment variables
const PODCAST_MOVIES_TABLE = process.env.PODCAST_MOVIES_TABLE || 'podcast_movies';
const MOVIE_STREAMS_TABLE = process.env.MOVIE_STREAMS_TABLE || 'movie_streams';
const S3_BUCKET = process.env.S3_BUCKET || 'rewatchables';
const S3_KEY = process.env.S3_KEY || 'data_files/podcast_movie_data.json';
const WEBAPP_PREFIX = (process.env.WEBAPP_PREFIX || 'webapp').replace(/^\/+|\/+$/g, '');
const CLOUDFRONT_DISTRIBUTION_ID = process.env.CLOUDFRONT_DISTRIBUTION_ID || '';
const CLOUDFRONT_INVALIDATION_PATHS = [
    '/index.html',
    '/sitemap.xml',
    '/llms.txt',
    '/llms-full.txt',
    '/ai-catalog.json',
    '/.well-known/ai-catalog.json',
    '/.well-known/ard.json'
];

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

            await uploadSeoArtifacts(s3Client, enrichedPodcasts, result.generated_at);
            await enrichIndexHtmlInS3(s3Client, enrichedPodcasts, result.generated_at);

            if (CLOUDFRONT_DISTRIBUTION_ID) {
                const cloudFrontClient = new CloudFrontClient({ region });
                await invalidateCloudFrontCache(cloudFrontClient, CLOUDFRONT_DISTRIBUTION_ID);
            }
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

const HEX_COLOR_REGEX = /^#[0-9a-fA-F]{3,8}$/;
const DEFAULT_THEME_COLOR = '#444';

function sanitizeHttpUrl(rawUrl) {
    if (typeof rawUrl !== 'string' || rawUrl.trim() === '') {
        return null;
    }
    try {
        const parsed = new URL(rawUrl);
        if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
            return rawUrl;
        }
    } catch {
        // Invalid URL
    }
    return null;
}

function sanitizeThemeColor(color) {
    if (typeof color === 'string' && HEX_COLOR_REGEX.test(color)) {
        return color;
    }
    return DEFAULT_THEME_COLOR;
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

        // Validate option.link to http:/https:
        if ('link' in filteredOption) {
            filteredOption.link = sanitizeHttpUrl(filteredOption.link);
        }

        // Remove subtitles if it exists
        if (filteredOption.subtitles) {
            delete filteredOption.subtitles;
        }

        // Flatten service object properties into the main option
        if (filteredOption.service) {
            const service = filteredOption.service;

            // Add service properties directly to the option
            filteredOption.serviceName = service.name;
            filteredOption.serviceThemeColorCode = sanitizeThemeColor(service.themeColorCode);
            filteredOption.serviceId = service.id;
            filteredOption.serviceImageSet = service.imageSet;
            filteredOption.serviceHomePage = sanitizeHttpUrl(service.homePage);

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
 * Build an S3 object key under WEBAPP_PREFIX
 */
function buildWebappKey(filename) {
    return WEBAPP_PREFIX ? `${WEBAPP_PREFIX}/${filename}` : filename;
}

/**
 * Upload static SEO and AI SEO artifacts (llms.txt, llms-full.txt, sitemap.xml) to S3
 */
async function uploadSeoArtifacts(s3Client, enrichedPodcasts, generatedAt) {
    const aiCatalogBody = generateAiCatalogJson(enrichedPodcasts, generatedAt);
    const artifacts = [
        {
            key: buildWebappKey('llms.txt'),
            body: generateLlmsTxt(enrichedPodcasts, generatedAt),
            contentType: 'text/plain; charset=utf-8',
            cacheControl: 'max-age=3600'
        },
        {
            key: buildWebappKey('llms-full.txt'),
            body: generateLlmsFullTxt(enrichedPodcasts, generatedAt),
            contentType: 'text/plain; charset=utf-8',
            cacheControl: 'max-age=3600'
        },
        {
            key: buildWebappKey('sitemap.xml'),
            body: generateSitemapXml(generatedAt),
            contentType: 'application/xml; charset=utf-8',
            cacheControl: 'max-age=3600'
        },
        {
            key: buildWebappKey('ai-catalog.json'),
            body: aiCatalogBody,
            contentType: 'application/json; charset=utf-8',
            cacheControl: 'max-age=3600'
        },
        {
            key: buildWebappKey('.well-known/ai-catalog.json'),
            body: aiCatalogBody,
            contentType: 'application/json; charset=utf-8',
            cacheControl: 'max-age=3600'
        },
        {
            key: buildWebappKey('.well-known/ard.json'),
            body: aiCatalogBody,
            contentType: 'application/json; charset=utf-8',
            cacheControl: 'max-age=3600'
        }
    ];

    for (const artifact of artifacts) {
        try {
            const command = new PutObjectCommand({
                Bucket: S3_BUCKET,
                Key: artifact.key,
                Body: artifact.body,
                ContentType: artifact.contentType,
                CacheControl: artifact.cacheControl
            });
            await s3Client.send(command);
            logger.info(
                { bucket: S3_BUCKET, key: artifact.key, count: enrichedPodcasts.length },
                'Uploaded SEO artifact'
            );
        } catch (error) {
            logger.error(
                { err: error, bucket: S3_BUCKET, key: artifact.key },
                'Error uploading SEO artifact to S3'
            );
            throw error;
        }
    }
}

/**
 * Read an S3 GetObject Body into a UTF-8 string across SDK stream/buffer/string shapes
 */
async function readS3BodyAsString(body) {
    if (!body) {
        return null;
    }
    if (typeof body.transformToString === 'function') {
        return body.transformToString('utf-8');
    }
    if (typeof body === 'string') {
        return body;
    }
    if (Buffer.isBuffer(body)) {
        return body.toString('utf-8');
    }
    if (typeof body[Symbol.asyncIterator] === 'function') {
        const chunks = [];
        for await (const chunk of body) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
        }
        return Buffer.concat(chunks).toString('utf-8');
    }
    return String(body);
}

/**
 * Best-effort enrichment of webapp/index.html with JSON-LD and <noscript> markup.
 * Logs and returns false if index.html is missing or cannot be updated, without failing the job.
 */
async function enrichIndexHtmlInS3(s3Client, enrichedPodcasts, generatedAt) {
    const indexKey = buildWebappKey('index.html');

    try {
        const getResponse = await s3Client.send(
            new GetObjectCommand({
                Bucket: S3_BUCKET,
                Key: indexKey
            })
        );
        const existingHtml = await readS3BodyAsString(getResponse?.Body);
        if (!existingHtml) {
            logger.warn(
                { bucket: S3_BUCKET, key: indexKey },
                'Skipping index.html SEO enrichment because object body was empty'
            );
            return false;
        }

        const enrichedHtml = injectSeoIntoIndexHtml(existingHtml, enrichedPodcasts, generatedAt);
        await s3Client.send(
            new PutObjectCommand({
                Bucket: S3_BUCKET,
                Key: indexKey,
                Body: enrichedHtml,
                ContentType: 'text/html; charset=utf-8',
                CacheControl: 'max-age=300'
            })
        );

        logger.info(
            { bucket: S3_BUCKET, key: indexKey, count: enrichedPodcasts.length },
            'Enriched and uploaded index.html'
        );
        return true;
    } catch (error) {
        logger.warn(
            { err: error, bucket: S3_BUCKET, key: indexKey },
            'Unable to enrich index.html in S3; continuing without failing job'
        );
        return false;
    }
}

/**
 * Best-effort CloudFront cache invalidation for SEO paths.
 * Never throws so invalidation errors do not fail the data generation job.
 */
async function invalidateCloudFrontCache(cloudFrontClient, distributionId) {
    if (!distributionId) {
        return false;
    }

    const params = {
        DistributionId: distributionId,
        InvalidationBatch: {
            CallerReference: `www-job-${Date.now()}`,
            Paths: {
                Quantity: CLOUDFRONT_INVALIDATION_PATHS.length,
                Items: CLOUDFRONT_INVALIDATION_PATHS
            }
        }
    };

    try {
        const response = await cloudFrontClient.send(new CreateInvalidationCommand(params));
        logger.info(
            {
                distributionId,
                invalidationId: response?.Invalidation?.Id || null,
                paths: CLOUDFRONT_INVALIDATION_PATHS
            },
            'Created CloudFront cache invalidation'
        );
        return true;
    } catch (error) {
        logger.warn(
            {
                err: error,
                distributionId,
                paths: CLOUDFRONT_INVALIDATION_PATHS
            },
            'CloudFront cache invalidation failed; continuing without failing job'
        );
        return false;
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
                error: 'Internal server error'
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
    filterStreamingOptions,
    flattenGenres,
    uploadToS3,
    uploadSeoArtifacts,
    enrichIndexHtmlInS3,
    invalidateCloudFrontCache
};
