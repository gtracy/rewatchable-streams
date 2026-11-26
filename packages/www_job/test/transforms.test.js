import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

const require = createRequire(import.meta.url);
const fixtures = require('../../../test/fixtures');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_PATH = path.resolve(__dirname, '../app.js');

let filterStreamingOptions;
let flattenGenres;
let savedLogLevel;

beforeAll(() => {
    savedLogLevel = process.env.LOG_LEVEL;
    process.env.LOG_LEVEL = 'silent';

    delete require.cache[APP_PATH];
    ({ filterStreamingOptions, flattenGenres } = require('../app'));
});

afterAll(() => {
    if (savedLogLevel === undefined) {
        delete process.env.LOG_LEVEL;
    } else {
        process.env.LOG_LEVEL = savedLogLevel;
    }
    delete require.cache[APP_PATH];
});

describe('flattenGenres', () => {
    it('flattens genre objects from samples/streamingDetails.json to genre names', () => {
        const details = fixtures.loadSample('streamingDetails.json');
        expect(flattenGenres(details.genres)).toEqual(['Comedy', 'Crime']);
    });

    it('passes through already-flattened string genres', () => {
        expect(flattenGenres(['Action', 'Adventure', 'Sci-Fi'])).toEqual([
            'Action',
            'Adventure',
            'Sci-Fi'
        ]);
    });

    it('handles mixed arrays of genre objects and plain strings', () => {
        const mixed = [
            { id: '12', name: 'Adventure' },
            'Drama',
            { id: '28', name: 'Action' }
        ];
        expect(flattenGenres(mixed)).toEqual(['Adventure', 'Drama', 'Action']);
    });

    it('returns object as-is when it lacks a truthy name property', () => {
        const noName = { id: '99' };
        const emptyName = { id: '100', name: '' };
        expect(flattenGenres([noName, emptyName])).toEqual([noName, emptyName]);
    });

    it('returns an empty array for an empty array input', () => {
        expect(flattenGenres([])).toEqual([]);
    });

    it.each([null, undefined, 'Action', 42, { name: 'Action' }])(
        'returns an empty array for non-array input: %j',
        (input) => {
            expect(flattenGenres(input)).toEqual([]);
        }
    );

    it('safely handles null elements without throwing TypeError', () => {
        expect(flattenGenres([null])).toEqual([null]);
        expect(flattenGenres([null, { id: '28', name: 'Action' }, undefined, 'Drama'])).toEqual([
            null,
            'Action',
            undefined,
            'Drama'
        ]);
    });
});

describe('filterStreamingOptions', () => {
    it('flattens service properties and removes subtitles on sample stream-entry.json', () => {
        const entry = fixtures.loadSample('stream-entry.json');
        const originalSnapshot = structuredClone(entry);

        const [filtered] = filterStreamingOptions([entry]);

        expect(filtered.subtitles).toBeUndefined();
        expect(filtered.service).toBeUndefined();
        expect(filtered.serviceName).toBe('Apple TV');
        expect(filtered.serviceId).toBe('apple');
        expect(filtered.serviceThemeColorCode).toBe('#000000');
        expect(filtered.serviceHomePage).toBe('https://tv.apple.com/');
        expect(filtered.serviceImageSet).toEqual(entry.service.imageSet);

        // Preserves non-service, non-subtitle fields
        expect(filtered.type).toBe('rent');
        expect(filtered.link).toBe(entry.link);
        expect(filtered.quality).toBe('hd');
        expect(filtered.price).toEqual(entry.price);
        expect(filtered.audios).toEqual([]);
        expect(filtered.expiresSoon).toBe(false);
        expect(filtered.availableSince).toBe(1714600763);

        // Does not mutate the original input object
        expect(entry).toEqual(originalSnapshot);
    });

    it('filters all streamingOptions from samples/data.json first podcast', () => {
        const sampleData = fixtures.loadSample('data.json');
        const rawOptions = sampleData.podcasts[0].movie.streamingOptions;
        expect(rawOptions.length).toBeGreaterThan(1);

        const filtered = filterStreamingOptions(rawOptions);
        expect(filtered).toHaveLength(rawOptions.length);

        for (const opt of filtered) {
            expect(opt).not.toHaveProperty('subtitles');
            expect(opt).not.toHaveProperty('service');
            expect(opt.serviceName).toBeTruthy();
            expect(opt.serviceId).toBeTruthy();
        }

        // Addon field on Hulu/Showtime option is preserved
        expect(filtered[0].serviceName).toBe('Hulu');
        expect(filtered[0].addon.name).toBe('Paramount+ with Showtime');
        expect(filtered[1].serviceName).toBe('Paramount+');
        expect(filtered[2].serviceName).toBe('Pluto TV');
    });

    it('handles streaming options without service or subtitles properties', () => {
        const minimal = [{ type: 'free', link: 'https://example.com/watch' }];
        const [filtered] = filterStreamingOptions(minimal);

        expect(filtered).toEqual({ type: 'free', link: 'https://example.com/watch' });
        expect(filtered).not.toHaveProperty('serviceName');
    });

    it('returns an empty array for an empty array input', () => {
        expect(filterStreamingOptions([])).toEqual([]);
    });

    it.each([null, undefined, 'invalid', 123, { service: { name: 'Hulu' } }])(
        'returns an empty array for non-array input: %j',
        (input) => {
            expect(filterStreamingOptions(input)).toEqual([]);
        }
    );
});
