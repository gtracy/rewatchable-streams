'use strict';

// Shared test fixtures for the rewatchable-streams packages.
//
// Loads the sample data that already ships in the repo (samples/, plus the
// top-level current_data.json / star_wars.json / unforgiven.json) so tests
// assert against realistic payloads instead of inventing their own.
//
// Require from a package test with:
//   const fixtures = require('../../../test/fixtures');

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const SAMPLES_DIR = path.join(REPO_ROOT, 'samples');

// Parse a JSON file at a repo-root-relative path.
function readJson(relativePath) {
    return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, relativePath), 'utf8'));
}

// Load one of the JSON fixtures under samples/ by file name,
// e.g. loadSample('stream-entry.json').
function loadSample(fileName) {
    return readJson(path.join('samples', fileName));
}

// The current website data file at the repo root.
function loadCurrentData() {
    return readJson('current_data.json');
}

// List the JSON fixture files available under samples/.
function listSamples() {
    return fs.readdirSync(SAMPLES_DIR).filter((name) => name.endsWith('.json'));
}

module.exports = { readJson, loadSample, loadCurrentData, listSamples };
