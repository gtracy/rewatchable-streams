// Test file for the Lambda function
// Run with: node test.js

const { handler } = require('./index');

// Mock AWS SDK for testing
const mockDynamoData = {
    podcasts: [
        {
            pod_title: { S: "Test Podcast" },
            pod_desc: { S: "Test Description" },
            pod_date: { S: "2025-01-01T00:00:00.000Z" },
            tmdb_id: { N: "11" },
            img: { S: "/test-image.jpg" },
            genres: {
                L: [
                    { M: { id: { N: "12" }, name: { S: "Adventure" } } },
                    { M: { id: { N: "28" }, name: { S: "Action" } } }
                ]
            }
        }
    ],
    movies: [
        {
            tmdb_id: { N: "11" },
            title: { S: "Star Wars" },
            overview: { S: "Test overview" },
            cast: {
                L: [
                    { S: "Mark Hamill" },
                    { S: "Harrison Ford" }
                ]
            },
            directors: {
                L: [
                    { S: "George Lucas" }
                ]
            },
            streamingOptions: {
                L: [
                    {
                        M: {
                            type: { S: "subscription" },
                            link: { S: "https://example.com" },
                            service: {
                                M: {
                                    name: { S: "Disney+" },
                                    id: { S: "disney" }
                                }
                            }
                        }
                    }
                ]
            }
        }
    ]
};

// Mock the AWS SDK
const AWS = require('aws-sdk');

// Set region for testing
AWS.config.update({ region: 'us-east-2' });

// Mock DynamoDB
const mockDynamoDB = {
    scan: (params) => {
        return {
            promise: () => {
                if (params.TableName === 'podcast_movies') {
                    return Promise.resolve({ Items: mockDynamoData.podcasts });
                } else if (params.TableName === 'movie_streams') {
                    return Promise.resolve({ Items: mockDynamoData.movies });
                }
                return Promise.resolve({ Items: [] });
            }
        };
    }
};

// Mock S3
const mockS3 = {
    putObject: (params) => {
        console.log('S3 Upload:', {
            Bucket: params.Bucket,
            Key: params.Key,
            ContentType: params.ContentType
        });
        return {
            promise: () => Promise.resolve({})
        };
    }
};

// Override the AWS services
AWS.DynamoDB = function() { return mockDynamoDB; };
AWS.S3 = function() { return mockS3; };

// Test the handler
async function testHandler() {
    console.log('Testing Lambda function...');
    
    try {
        const result = await handler({});
        console.log('Success!');
        console.log('Response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

testHandler();
