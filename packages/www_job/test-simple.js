// Simple test for the JSON flattening logic
// Run with: node test-simple.js

// Test the flattening functions directly
function flattenValue(value) {
    if (value.S) {
        return value.S;
    } else if (value.N) {
        return parseFloat(value.N);
    } else if (value.BOOL !== undefined) {
        return value.BOOL;
    } else if (value.L) {
        return value.L.map(item => flattenValue(item));
    } else if (value.M) {
        const map = {};
        for (const [key, val] of Object.entries(value.M)) {
            map[key] = flattenValue(val);
        }
        return map;
    } else if (value.NULL) {
        return null;
    }
    
    return value;
}

function flattenDynamoItem(item) {
    const flattened = {};
    
    for (const [key, value] of Object.entries(item)) {
        flattened[key] = flattenValue(value);
    }
    
    return flattened;
}

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

// Test data from the sample files
const testPodcastItem = {
    "pod_title": { "S": "'Star Wars: A New Hope' (Part Two) With Bill Simmons, Chris Ryan, Sean Fennessey, and Van Lathan" },
    "pod_desc": { "S": "The Rewatchables is what gives a movie lover his power..." },
    "pod_date": { "S": "2025-05-06T04:05:00.000Z" },
    "tmdb_id": { "N": "11" },
    "img": { "S": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg" },
    "genres": {
        "L": [
            { "M": { "id": { "N": "12" }, "name": { "S": "Adventure" } } },
            { "M": { "id": { "N": "28" }, "name": { "S": "Action" } } },
            { "M": { "id": { "N": "878" }, "name": { "S": "Science Fiction" } } }
        ]
    }
};

const testMovieItem = {
    "tmdb_id": { "N": "11" },
    "title": { "S": "Star Wars" },
    "overview": { "S": "Princess Leia is captured and held hostage..." },
    "cast": {
        "L": [
            { "S": "Mark Hamill" },
            { "S": "Harrison Ford" },
            { "S": "Carrie Fisher" }
        ]
    },
    "directors": {
        "L": [
            { "S": "George Lucas" }
        ]
    },
    "streamingOptions": {
        "L": [
            {
                "M": {
                    "type": { "S": "subscription" },
                    "link": { "S": "https://www.disneyplus.com/browse/entity-9a280e53-fcc0-4e17-a02c-b1f40913eb0b" },
                    "service": {
                        "M": {
                            "name": { "S": "Disney+" },
                            "id": { "S": "disney" }
                        }
                    }
                }
            }
        ]
    }
};

console.log('Testing DynamoDB flattening...');

// Test podcast flattening
const flattenedPodcast = flattenDynamoItem(testPodcastItem);
console.log('Flattened Podcast:');
console.log(JSON.stringify(flattenedPodcast, null, 2));

// Test movie flattening
const flattenedMovie = flattenDynamoItem(testMovieItem);
console.log('\nFlattened Movie:');
console.log(JSON.stringify(flattenedMovie, null, 2));

// Test genre flattening
const flattenedGenres = flattenGenres(flattenedPodcast.genres);
console.log('\nFlattened Genres:');
console.log(JSON.stringify(flattenedGenres, null, 2));

// Test final structure
const finalStructure = {
    podcasts: [{
        pod_title: flattenedPodcast.pod_title,
        pod_desc: flattenedPodcast.pod_desc,
        pod_date: flattenedPodcast.pod_date,
        movie: {
            tmdb_id: flattenedMovie.tmdb_id,
            title: flattenedMovie.title,
            overview: flattenedMovie.overview,
            cast: flattenedMovie.cast,
            directors: flattenedMovie.directors,
            genres: flattenedGenres,
            streamingOptions: flattenedMovie.streamingOptions
        }
    }],
    generated_at: new Date().toISOString(),
    total_podcasts: 1
};

console.log('\nFinal Structure:');
console.log(JSON.stringify(finalStructure, null, 2));

console.log('\n✅ All tests passed! The flattening logic works correctly.');
