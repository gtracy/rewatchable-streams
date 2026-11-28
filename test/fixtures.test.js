'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fixtures = require('./fixtures');

describe('test/fixtures.js', () => {
    it('exports the expected helper functions', () => {
        assert.equal(typeof fixtures.readJson, 'function');
        assert.equal(typeof fixtures.loadSample, 'function');
        assert.equal(typeof fixtures.loadCurrentData, 'function');
        assert.equal(typeof fixtures.listSamples, 'function');
        assert.equal(typeof fixtures.listRootFixtures, 'function');
    });

    it('listSamples returns a sorted non-empty list of JSON sample files', () => {
        const samples = fixtures.listSamples();
        assert.ok(samples.length > 0, 'expected at least one sample fixture');
        assert.deepEqual(samples, [...samples].sort());
        for (const name of samples) {
            assert.ok(name.endsWith('.json'), `expected .json extension for ${name}`);
        }

        const expected = [
            'data.json',
            'dynamoMovie-StarWars.json',
            'dynamoPod-StarWars.json',
            'stream-entry.json',
            'streamingDetails.json',
            'streams-pulp.json',
            'tmdb-movie.json',
        ];
        for (const name of expected) {
            assert.ok(samples.includes(name), `missing expected sample: ${name}`);
        }
    });

    it('every sample fixture parses as valid JSON and returns fresh objects', () => {
        for (const name of fixtures.listSamples()) {
            const first = fixtures.loadSample(name);
            const second = fixtures.loadSample(name);
            assert.equal(typeof first, 'object');
            assert.notEqual(first, null);
            assert.notEqual(first, second, `expected fresh object per loadSample(${name}) call`);
        }
    });

    it('every root fixture parses as valid JSON', () => {
        const rootFiles = fixtures.listRootFixtures();
        assert.ok(rootFiles.includes('current_data.json'));
        for (const name of rootFiles) {
            const data = fixtures.readJson(name);
            assert.equal(typeof data, 'object');
            assert.notEqual(data, null);
        }
    });

    it('throws when loading a nonexistent fixture', () => {
        assert.throws(() => fixtures.loadSample('does-not-exist.json'), { code: 'ENOENT' });
    });
});

describe('fixture schema integrity', () => {
    function assertSiteDataShape(data, label) {
        assert.ok(Array.isArray(data.podcasts), `${label}: podcasts should be an array`);
        assert.ok(data.podcasts.length > 0, `${label}: podcasts should not be empty`);
        assert.equal(data.total_podcasts, data.podcasts.length, `${label}: total_podcasts should match podcasts.length`);
        assert.ok(!Number.isNaN(Date.parse(data.generated_at)), `${label}: generated_at should be a valid date`);

        for (const pod of data.podcasts) {
            assert.equal(typeof pod.pod_title, 'string');
            assert.equal(typeof pod.pod_date, 'string');
            assert.equal(typeof pod.movie, 'object');
            assert.notEqual(pod.movie, null);
        }
    }

    it('current_data.json matches the site data schema', () => {
        assertSiteDataShape(fixtures.loadCurrentData(), 'current_data.json');
    });

    it('samples/data.json matches the site data schema', () => {
        assertSiteDataShape(fixtures.loadSample('data.json'), 'samples/data.json');
    });

    it('samples/dynamoMovie-StarWars.json has DynamoDB AttributeValue movie_streams fields', () => {
        const movie = fixtures.loadSample('dynamoMovie-StarWars.json');
        assert.equal(typeof movie.tmdb_id?.N, 'string');
        assert.equal(typeof movie.imdb_id?.S, 'string');
        assert.equal(typeof movie.title?.S, 'string');
        assert.ok(Array.isArray(movie.streamingOptions?.L));
    });

    it('samples/dynamoPod-StarWars.json has DynamoDB AttributeValue podcast_movies fields', () => {
        const pod = fixtures.loadSample('dynamoPod-StarWars.json');
        assert.equal(typeof pod.pod_guid?.S, 'string');
        assert.equal(typeof pod.pod_title?.S, 'string');
        assert.equal(typeof pod.movie_title?.S, 'string');
        assert.equal(typeof pod.tmdb_id?.N, 'string');
        assert.ok(Array.isArray(pod.genres?.L));
    });

    it('samples/stream-entry.json has MOTN streaming option fields', () => {
        const entry = fixtures.loadSample('stream-entry.json');
        assert.equal(typeof entry.service, 'object');
        assert.notEqual(entry.service, null);
        assert.equal(typeof entry.type, 'string');
        assert.equal(typeof entry.link, 'string');
    });

    it('MOTN movie fixtures have core metadata fields', () => {
        const motnFixtures = [
            ['samples/streamingDetails.json', fixtures.loadSample('streamingDetails.json')],
            ['samples/streams-pulp.json', fixtures.loadSample('streams-pulp.json')],
            ['star_wars.json', fixtures.readJson('star_wars.json')],
            ['unforgiven.json', fixtures.readJson('unforgiven.json')],
        ];
        for (const [label, data] of motnFixtures) {
            assert.equal(typeof data.id, 'string', `${label}: id`);
            assert.equal(typeof data.imdbId, 'string', `${label}: imdbId`);
            assert.equal(typeof data.tmdbId, 'string', `${label}: tmdbId`);
            assert.equal(typeof data.title, 'string', `${label}: title`);
            assert.ok(Array.isArray(data.genres), `${label}: genres`);
        }
    });

    it('samples/tmdb-movie.json has TMDB movie details fields', () => {
        const tmdb = fixtures.loadSample('tmdb-movie.json');
        assert.equal(typeof tmdb.id, 'number');
        assert.equal(typeof tmdb.imdb_id, 'string');
        assert.equal(typeof tmdb.title, 'string');
        assert.equal(typeof tmdb.release_date, 'string');
        assert.ok(Array.isArray(tmdb.genres));
    });
});
