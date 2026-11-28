'use strict';

/**
 * Shared test fixtures for the rewatchable-streams packages.
 *
 * Loads the sample data that already ships in the repo (`samples/`, plus the
 * top-level `current_data.json`, `star_wars.json`, and `unforgiven.json`) so
 * tests assert against realistic payloads instead of inventing their own.
 *
 * Each loader parses JSON fresh on every call, so tests may safely mutate
 * returned objects without leaking state across test cases.
 *
 * Require from a package test with:
 *   const fixtures = require('../../../test/fixtures');
 *
 * Available sample fixtures under `samples/`:
 *   - data.json                  — Generated site payload (5 podcasts)
 *   - dynamoMovie-StarWars.json  — DynamoDB `movie_streams` item (AttributeValue JSON)
 *   - dynamoPod-StarWars.json    — DynamoDB `podcast_movies` item (AttributeValue JSON)
 *   - stream-entry.json          — Single MOTN streaming option entry
 *   - streamingDetails.json      — MOTN movie metadata payload
 *   - streams-pulp.json          — MOTN movie + streamingOptions payload
 *   - tmdb-movie.json            — TMDB movie details response
 *
 * Available root fixtures:
 *   - current_data.json          — Generated site payload (12 podcasts)
 *   - star_wars.json             — MOTN payload for Star Wars
 *   - unforgiven.json            — MOTN payload for Unforgiven
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const SAMPLES_DIR = path.join(REPO_ROOT, 'samples');
const ROOT_FIXTURES = Object.freeze([
    'current_data.json',
    'star_wars.json',
    'unforgiven.json',
]);

/**
 * Parse a JSON file at a repo-root-relative path.
 * @param {string} relativePath
 * @returns {any}
 */
function readJson(relativePath) {
    return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, relativePath), 'utf8'));
}

/**
 * Load one of the JSON fixtures under `samples/` by file name,
 * e.g. `loadSample('stream-entry.json')`.
 * @param {string} fileName
 * @returns {any}
 */
function loadSample(fileName) {
    return readJson(path.join('samples', fileName));
}

/**
 * Load the current website data file (`current_data.json`) at the repo root.
 * @returns {object}
 */
function loadCurrentData() {
    return readJson('current_data.json');
}

/**
 * List the JSON fixture file names available under `samples/`, sorted
 * alphabetically for deterministic iteration.
 * @returns {string[]}
 */
function listSamples() {
    return fs
        .readdirSync(SAMPLES_DIR)
        .filter((name) => name.endsWith('.json'))
        .sort();
}

/**
 * List the top-level JSON fixture file names shipped at the repo root.
 * @returns {string[]}
 */
function listRootFixtures() {
    return [...ROOT_FIXTURES];
}

module.exports = {
    REPO_ROOT,
    SAMPLES_DIR,
    readJson,
    loadSample,
    loadCurrentData,
    listSamples,
    listRootFixtures,
};
