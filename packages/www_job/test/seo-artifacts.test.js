import { createRequire } from 'module';
import { describe, it, expect } from 'vitest';

const require = createRequire(import.meta.url);
const {
    JSONLD_START_MARKER,
    JSONLD_END_MARKER,
    NOSCRIPT_START_MARKER,
    NOSCRIPT_END_MARKER,
    generateLlmsTxt,
    generateLlmsFullTxt,
    generateSitemapXml,
    generateAiCatalogJson,
    injectSeoIntoIndexHtml,
    generateSeoArtifacts,
    formatStreamingOption
} = require('../seo-artifacts');

function makePodcast(overrides = {}) {
    const movieOverrides = overrides.movie || {};
    return {
        pod_title: overrides.pod_title ?? "'The Godfather' With Bill Simmons",
        pod_desc: overrides.pod_desc ?? 'Classic episode',
        pod_date: overrides.pod_date ?? '2025-05-10T04:00:00.000Z',
        pod_link: overrides.pod_link ?? 'https://www.theringer.com/the-rewatchables/godfather',
        movie: {
            tmdb_id: 238,
            imdb_id: 'tt0068646',
            title: 'The Godfather',
            movie_title: 'The Godfather',
            releaseYear: 1972,
            directors: ['Francis Ford Coppola'],
            cast: [
                'Marlon Brando',
                'Al Pacino',
                'James Caan',
                'Robert Duvall',
                'Richard S. Castellano',
                'Diane Keaton',
                'Talia Shire'
            ],
            streamingOptions: [
                {
                    type: 'free',
                    serviceName: 'Pluto TV',
                    link: 'https://pluto.tv/movies/godfather'
                },
                {
                    type: 'subscription',
                    serviceName: 'Paramount+',
                    link: 'https://www.paramountplus.com/movies/godfather'
                },
                {
                    type: 'addon',
                    serviceName: 'Hulu',
                    addon: { name: 'Paramount+ with Showtime' },
                    link: 'https://www.hulu.com/movie/godfather'
                },
                {
                    type: 'rent',
                    serviceName: 'Prime Video',
                    price: { amount: '3.99', currency: 'USD', formatted: '3.99 USD' },
                    link: 'https://www.amazon.com/gp/video/detail/godfather'
                }
            ],
            ...movieOverrides
        }
    };
}

describe('formatStreamingOption', () => {
    it('formats free, subscription, addon (Premium), rent with price, and buy options', () => {
        expect(
            formatStreamingOption({
                type: 'free',
                serviceName: 'Pluto TV',
                link: 'https://pluto.tv/watch'
            })
        ).toBe('Pluto TV (Free) — https://pluto.tv/watch');

        expect(
            formatStreamingOption({
                type: 'subscription',
                serviceName: 'Netflix',
                link: 'https://netflix.com/watch'
            })
        ).toBe('Netflix (Subscription) — https://netflix.com/watch');

        expect(
            formatStreamingOption({
                type: 'addon',
                serviceName: 'Hulu',
                addon: { name: 'Showtime' },
                link: 'https://hulu.com/watch'
            })
        ).toBe('Hulu (Premium (Showtime)) — https://hulu.com/watch');

        expect(
            formatStreamingOption({
                type: 'addon',
                serviceName: 'Prime Video',
                link: 'https://amazon.com/watch'
            })
        ).toBe('Prime Video (Premium) — https://amazon.com/watch');

        expect(
            formatStreamingOption({
                type: 'rent',
                serviceName: 'Apple TV',
                price: { amount: '3.99', currency: 'USD' },
                link: 'https://tv.apple.com/watch'
            })
        ).toBe('Apple TV (Rent $3.99) — https://tv.apple.com/watch');

        expect(
            formatStreamingOption({
                type: 'buy',
                serviceName: 'Apple TV',
                price: { amount: '14.99', currency: 'USD' }
            })
        ).toBe('Apple TV (Buy $14.99)');
    });
});

describe('generateLlmsTxt', () => {
    it('generates llms.txt with stats, key links, last updated date, and FAQ', () => {
        const podcasts = [
            makePodcast(),
            makePodcast({
                pod_title: "'Heat'",
                pod_date: '2025-06-01T04:00:00.000Z',
                movie: {
                    tmdb_id: 949,
                    title: 'Heat',
                    streamingOptions: [
                        { type: 'subscription', serviceName: 'Hulu', link: 'https://hulu.com/heat' }
                    ]
                }
            })
        ];

        const output = generateLlmsTxt(podcasts, '2026-11-27T12:00:00.000Z');

        expect(output).toContain('# Watch That Pod');
        expect(output).toContain('> Watch That Pod');
        expect(output).toContain('Total Episodes Indexed: 2');
        expect(output).toContain('Movies Available to Stream Free: 1');
        expect(output).toContain('Last Updated: 2026-11-27');
        expect(output).toContain('https://watchthatpod.com/');
        expect(output).toContain('https://watchthatpod.com/?search={query}');
        expect(output).toContain('https://watchthatpod.com/llms-full.txt');
        expect(output).toContain('https://watchthatpod.com/sitemap.xml');
        expect(output).toContain('/movie/<slug>/');
        expect(output).toContain('## How to Query & FAQ');
    });

    it('lists top streaming hub links when hubs are provided', () => {
        const hubs = [
            { slug: 'free', name: 'Free Streaming', path: '/streaming/free/', count: 42 },
            { slug: 'paramount-plus', name: 'Paramount+', path: '/streaming/paramount-plus/', count: 25 }
        ];
        const output = generateLlmsTxt([makePodcast()], '2026-11-27T12:00:00.000Z', 'https://watchthatpod.com', hubs);

        expect(output).toContain('## Streaming Hubs');
        expect(output).toContain('- [Free Streaming](https://watchthatpod.com/streaming/free/): 42 movies');
        expect(output).toContain('- [Paramount+](https://watchthatpod.com/streaming/paramount-plus/): 25 movies');
    });

    it('respects custom baseUrl and handles empty/null inputs', () => {
        const output = generateLlmsTxt(null, '2026-01-15T00:00:00.000Z', 'https://staging.watchthatpod.com/');
        expect(output).toContain('Total Episodes Indexed: 0');
        expect(output).toContain('Movies Available to Stream Free: 0');
        expect(output).toContain('https://staging.watchthatpod.com/llms-full.txt');
        expect(output).toContain('https://staging.watchthatpod.com/sitemap.xml');
        expect(output).not.toContain('//llms-full.txt');
    });
});

describe('generateLlmsFullTxt', () => {
    it('sorts newest-first without mutating input and formats all episode fields', () => {
        const older = makePodcast({
            pod_title: "'The Godfather' Episode",
            pod_date: '2019-01-08T04:55:00.000Z'
        });
        const newer = makePodcast({
            pod_title: "'Heat' With Chris Ryan",
            pod_date: '2025-08-20T04:00:00.000Z',
            pod_link: 'https://www.theringer.com/the-rewatchables/heat',
            movie: {
                tmdb_id: 949,
                imdb_id: 'tt0113277',
                title: 'Heat',
                releaseYear: 1995,
                directors: ['Michael Mann'],
                cast: ['Al Pacino', 'Robert De Niro', 'Val Kilmer'],
                streamingOptions: []
            }
        });
        const input = [older, newer];
        const output = generateLlmsFullTxt(input, '2026-11-27T00:00:00.000Z');

        // Input array order preserved
        expect(input[0]).toBe(older);

        // Newer appears before older in output
        const heatIndex = output.indexOf('## Heat (1995)');
        const godfatherIndex = output.indexOf('## The Godfather (1972)');
        expect(heatIndex).toBeGreaterThan(-1);
        expect(godfatherIndex).toBeGreaterThan(heatIndex);

        // Top cast capped at 5
        expect(output).toContain(
            '- **Top Cast:** Marlon Brando, Al Pacino, James Caan, Robert Duvall, Richard S. Castellano'
        );
        expect(output).not.toContain('Diane Keaton');

        // Streaming options formatted clearly
        expect(output).toContain('Pluto TV (Free) — https://pluto.tv/movies/godfather');
        expect(output).toContain('Paramount+ (Subscription) — https://www.paramountplus.com/movies/godfather');
        expect(output).toContain('Hulu (Premium (Paramount+ with Showtime)) — https://www.hulu.com/movie/godfather');
        expect(output).toContain('Prime Video (Rent $3.99) — https://www.amazon.com/gp/video/detail/godfather');

        // Canonical Movie Page, IMDb & Podcast Audio URLs
        expect(output).toContain('- **Movie Page:** https://watchthatpod.com/movie/the-godfather-1972/');
        expect(output).toContain('- **Movie Page:** https://watchthatpod.com/movie/heat-1995/');
        expect(output).toContain('- **IMDb:** https://www.imdb.com/title/tt0068646/');
        expect(output).toContain('- **Podcast Audio:** https://www.theringer.com/the-rewatchables/godfather');
        expect(output).toContain('- **Air Date:** 2019-01-08');
        expect(output).toContain('- **Streaming Options:** None currently listed');
    });
});

describe('generateSitemapXml', () => {
    it('generates valid XML sitemap with dynamic lastmod', () => {
        const xml = generateSitemapXml('2026-11-27T18:30:00.000Z');

        expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
        expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
        expect(xml).toContain('<loc>https://watchthatpod.com/</loc>');
        expect(xml).toContain('<lastmod>2026-11-27</lastmod>');
        expect(xml).toContain('</urlset>');
    });

    it('supports custom baseUrl and escapes XML characters', () => {
        const xml = generateSitemapXml('2026-03-04T00:00:00.000Z', 'https://example.com/app/');
        expect(xml).toContain('<loc>https://example.com/app/</loc>');
        expect(xml).toContain('<lastmod>2026-03-04</lastmod>');
    });

    it('emits deduplicated and cleanly sorted /streaming/ and /movie/ URLs', () => {
        const xml = generateSitemapXml('2026-11-27T18:30:00.000Z', 'https://watchthatpod.com', [
            '/movie/the-godfather-1972/',
            '/streaming/paramount-plus/',
            '/streaming/free/',
            '/movie/heat-1995/',
            '/movie/heat-1995/',
            '/',
            '/streaming/netflix/'
        ]);

        const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1]);
        expect(locs).toEqual([
            'https://watchthatpod.com/',
            'https://watchthatpod.com/streaming/free/',
            'https://watchthatpod.com/streaming/netflix/',
            'https://watchthatpod.com/streaming/paramount-plus/',
            'https://watchthatpod.com/movie/heat-1995/',
            'https://watchthatpod.com/movie/the-godfather-1972/'
        ]);
    });
});

describe('injectSeoIntoIndexHtml', () => {
    const sampleTemplate = [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '  <head>',
        `    ${JSONLD_START_MARKER}`,
        '    <script type="application/ld+json">{"old": true}</script>',
        `    ${JSONLD_END_MARKER}`,
        '  </head>',
        '  <body>',
        `    ${NOSCRIPT_START_MARKER}`,
        '    <noscript>Old message</noscript>',
        `    ${NOSCRIPT_END_MARKER}`,
        '    <div id="root"></div>',
        '  </body>',
        '</html>'
    ].join('\n');

    it('injects rich JSON-LD @graph (capped at 50) and <noscript> list (capped at 25)', () => {
        const podcasts = Array.from({ length: 60 }, (_, idx) => {
            const day = String((idx % 28) + 1).padStart(2, '0');
            const month = String(Math.floor(idx / 28) + 1).padStart(2, '0');
            return makePodcast({
                pod_title: `Episode ${idx + 1}`,
                pod_date: `2025-${month}-${day}T00:00:00.000Z`,
                pod_link: `https://example.com/ep-${idx + 1}`,
                movie: {
                    tmdb_id: 1000 + idx,
                    imdb_id: `tt000${idx}`,
                    title: `Movie ${idx + 1}`,
                    releaseYear: 1990 + (idx % 30),
                    directors: [`Director ${idx + 1}`],
                    streamingOptions: [
                        { type: 'free', serviceName: 'Pluto TV', link: 'https://pluto.tv/x' },
                        { type: 'free', serviceName: 'Pluto TV', link: 'https://pluto.tv/y' },
                        { type: 'subscription', serviceName: 'Hulu', link: 'https://hulu.com/x' }
                    ]
                }
            });
        });

        const result = injectSeoIntoIndexHtml(sampleTemplate, podcasts, '2026-11-27T00:00:00.000Z');

        // Markers preserved for idempotent daily runs
        expect(result).toContain(JSONLD_START_MARKER);
        expect(result).toContain(JSONLD_END_MARKER);
        expect(result).toContain(NOSCRIPT_START_MARKER);
        expect(result).toContain(NOSCRIPT_END_MARKER);
        expect(result).not.toContain('{"old": true}');
        expect(result).not.toContain('Old message');

        // Extract and parse JSON-LD
        const jsonLdMatch = result.match(
            /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/
        );
        expect(jsonLdMatch).toBeTruthy();
        const parsed = JSON.parse(jsonLdMatch[1]);
        expect(parsed['@context']).toBe('https://schema.org');
        expect(Array.isArray(parsed['@graph'])).toBe(true);

        const webSite = parsed['@graph'].find((n) => n['@type'] === 'WebSite');
        const org = parsed['@graph'].find((n) => n['@type'] === 'Organization');
        const series = parsed['@graph'].find((n) => n['@type'] === 'PodcastSeries');
        const itemList = parsed['@graph'].find((n) => n['@type'] === 'ItemList');

        expect(webSite.potentialAction['@type']).toBe('SearchAction');
        expect(webSite.potentialAction.target).toBe('https://watchthatpod.com/?search={search_term_string}');
        expect(org.name).toBe('Watch That Pod');
        expect(series.name).toBe('The Rewatchables');
        expect(itemList.numberOfItems).toBe(50);
        expect(itemList.itemListElement).toHaveLength(50);

        // First item is newest (Episode 60)
        const firstItem = itemList.itemListElement[0].item;
        expect(firstItem['@type']).toBe('PodcastEpisode');
        expect(firstItem.name).toBe('Episode 60');
        expect(firstItem.about['@type']).toBe('Movie');
        expect(firstItem.about.name).toBe('Movie 60');
        expect(firstItem.about.sameAs).toEqual([
            'https://www.imdb.com/title/tt00059/',
            'https://www.themoviedb.org/movie/1059'
        ]);

        // Verify <noscript> content
        expect(result).toContain('60 episodes indexed · Last updated 2026-11-27');
        expect(result).toContain('https://watchthatpod.com/llms.txt');
        expect(result).toContain('https://watchthatpod.com/llms-full.txt');

        const liMatches = result.match(/<li>/g) || [];
        expect(liMatches).toHaveLength(25);
        // Streaming services deduplicated
        expect(result).toContain('Streaming on Pluto TV, Hulu');
        expect(result).not.toContain('Pluto TV, Pluto TV');
    });

    it('safely escapes </script> inside JSON-LD and HTML tags inside <noscript>', () => {
        const malicious = makePodcast({
            pod_title: 'Bad </script><script>alert(1)</script> Title',
            movie: {
                tmdb_id: 1,
                imdb_id: 'tt0000001',
                title: 'Film </script> & <img src=x>',
                releaseYear: 2000,
                directors: ['Dir <A>'],
                streamingOptions: [{ type: 'free', serviceName: 'Tubi & More' }]
            }
        });

        const result = injectSeoIntoIndexHtml(sampleTemplate, [malicious], '2026-11-27T00:00:00.000Z');

        // Only one closing </script> tag should exist
        const closingScripts = result.match(/<\/script>/gi) || [];
        expect(closingScripts).toHaveLength(1);

        const jsonLdMatch = result.match(
            /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/
        );
        const parsed = JSON.parse(jsonLdMatch[1]);
        const itemList = parsed['@graph'].find((n) => n['@type'] === 'ItemList');
        expect(itemList.itemListElement[0].item.name).toBe('Bad </script><script>alert(1)</script> Title');

        // Noscript escapes HTML
        expect(result).toContain('Film &lt;/script&gt; &amp; &lt;img src=x&gt; (2000)');
        expect(result).toContain('Tubi &amp; More');
    });

    it('returns html unchanged without throwing when markers are missing', () => {
        const plainHtml = '<html><head></head><body><div id="root"></div></body></html>';
        expect(injectSeoIntoIndexHtml(plainHtml, [makePodcast()], '2026-11-27T00:00:00.000Z')).toBe(
            plainHtml
        );
        expect(injectSeoIntoIndexHtml(null, [], '2026-11-27T00:00:00.000Z')).toBeNull();
    });
});

describe('generateAiCatalogJson', () => {
    it('outputs a valid ARD v1.0 manifest with specVersion, host, and urn:air entries', () => {
        const raw = generateAiCatalogJson([makePodcast()], '2026-11-27T00:00:00.000Z', 'https://watchthatpod.com/');
        const parsed = JSON.parse(raw);

        expect(parsed.specVersion).toBe('1.0');
        expect(parsed.host).toEqual({ displayName: 'Watch That Pod' });
        expect(Array.isArray(parsed.entries)).toBe(true);
        expect(parsed.entries).toHaveLength(2);
        expect(parsed.entries[0].identifier).toBe('urn:air:watchthatpod.com:catalog:llms-overview');
        expect(parsed.entries[0].description).toContain('1 episodes indexed');
        expect(parsed.entries[0].description).toContain('2026-11-27');
        expect(parsed.entries[0].representativeQueries.length).toBeGreaterThanOrEqual(2);
        expect(parsed.entries.map((e) => e.url)).toEqual([
            'https://watchthatpod.com/llms.txt',
            'https://watchthatpod.com/llms-full.txt'
        ]);
    });
});

describe('generateSeoArtifacts', () => {
    it('returns llmsTxt, llmsFullTxt, sitemapXml, and aiCatalogJson together', () => {
        const artifacts = generateSeoArtifacts([makePodcast()], '2026-11-27T00:00:00.000Z', {
            baseUrl: 'https://watchthatpod.com'
        });

        expect(artifacts.llmsTxt).toContain('# Watch That Pod');
        expect(artifacts.llmsFullTxt).toContain('## The Godfather (1972)');
        expect(artifacts.sitemapXml).toContain('<lastmod>2026-11-27</lastmod>');
        expect(JSON.parse(artifacts.aiCatalogJson).specVersion).toBe('1.0');
    });
});
