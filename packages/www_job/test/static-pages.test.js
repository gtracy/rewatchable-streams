import { createRequire } from 'module';
import { describe, it, expect } from 'vitest';

const require = createRequire(import.meta.url);
const {
    slugify,
    getMovieSlug,
    getServiceSlug,
    groupPodcastsByMovie,
    groupMoviesByService,
    renderMoviePageHtml,
    renderStreamingHubHtml,
    generateStaticPages
} = require('../static-pages');

function makePodcast(overrides = {}) {
    const movieOverrides = overrides.movie || {};
    return {
        pod_title: overrides.pod_title ?? "'The Godfather' With Bill Simmons",
        pod_desc: overrides.pod_desc ?? 'Classic episode breaking down The Godfather.',
        pod_date: overrides.pod_date ?? '2025-05-10T04:00:00.000Z',
        pod_link: overrides.pod_link ?? 'https://cdn.example.com/episodes/godfather.mp3',
        movie: {
            tmdb_id: 238,
            imdb_id: 'tt0068646',
            title: 'The Godfather',
            movie_title: 'The Godfather',
            overview: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
            releaseYear: 1972,
            runtime: 175,
            img: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
            genres: ['Drama', 'Crime'],
            directors: ['Francis Ford Coppola'],
            cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
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

describe('slugify, getMovieSlug, and getServiceSlug', () => {
    it('matches the shared slug contract for punctuation, +, &, apostrophes, and diacritics', () => {
        expect(slugify('Paramount+')).toBe('paramount-plus');
        expect(slugify('Prime Video')).toBe('prime-video');
        expect(slugify('Netflix')).toBe('netflix');
        expect(slugify('Fast & Furious')).toBe('fast-and-furious');
        expect(slugify("Ocean's Eleven")).toBe('oceans-eleven');
        expect(slugify('Amélie')).toBe('amelie');
        expect(slugify('  ---Hello, World!---  ')).toBe('hello-world');
        expect(slugify('')).toBe('');
    });

    it('builds movie slugs with release year, without release year, and with tmdb fallback', () => {
        expect(getMovieSlug(makePodcast())).toBe('the-godfather-1972');
        expect(getMovieSlug({ title: 'Heat', releaseYear: 1995 })).toBe('heat-1995');
        expect(getMovieSlug({ title: 'Heat' })).toBe('heat');
        expect(getMovieSlug({ title: '!!!', tmdb_id: 949 })).toBe('movie-949');
        expect(getMovieSlug({ title: '' })).toBe('movie-unknown');
    });

    it('builds service slugs via slugify', () => {
        expect(getServiceSlug('Paramount+')).toBe('paramount-plus');
        expect(getServiceSlug('Apple TV+')).toBe('apple-tv-plus');
        expect(getServiceSlug('Max')).toBe('max');
    });
});

describe('groupPodcastsByMovie', () => {
    it('groups multiple episodes for the same movie slug onto one movie page ordered newest-first', () => {
        const ep1 = makePodcast({
            pod_title: "'Heat' (2017)",
            pod_date: '2017-09-01T00:00:00.000Z',
            pod_link: 'https://cdn.example.com/heat-1.mp3',
            movie: { tmdb_id: 949, title: 'Heat', releaseYear: 1995 }
        });
        const ep2 = makePodcast({
            pod_title: "'Re-Heat' (2020)",
            pod_date: '2020-05-15T00:00:00.000Z',
            pod_link: 'https://cdn.example.com/heat-2.mp3',
            movie: { tmdb_id: 949, title: 'Heat', releaseYear: 1995 }
        });
        const ep3 = makePodcast({
            pod_title: "'Three-Heat' (2023)",
            pod_date: '2023-07-20T00:00:00.000Z',
            pod_link: 'https://cdn.example.com/heat-3.mp3',
            movie: { tmdb_id: 949, title: 'Heat', releaseYear: 1995 }
        });

        const groups = groupPodcastsByMovie([ep1, ep3, ep2]);

        expect(groups).toHaveLength(1);
        expect(groups[0].slug).toBe('heat-1995');
        expect(groups[0].path).toBe('/movie/heat-1995/');
        expect(groups[0].episodes.map((e) => e.pod_title)).toEqual([
            "'Three-Heat' (2023)",
            "'Re-Heat' (2020)",
            "'Heat' (2017)"
        ]);
    });
});

describe('groupMoviesByService', () => {
    it('creates the free hub and per-service hubs sorted by count descending', () => {
        const podcasts = [
            makePodcast(),
            makePodcast({
                pod_title: "'Heat'",
                pod_date: '2025-06-01T00:00:00.000Z',
                movie: {
                    tmdb_id: 949,
                    title: 'Heat',
                    releaseYear: 1995,
                    streamingOptions: [
                        { type: 'subscription', serviceName: 'Paramount+', link: 'https://paramountplus.com/heat' },
                        { type: 'subscription', serviceName: 'Netflix', link: 'https://netflix.com/heat' }
                    ]
                }
            })
        ];

        const movieGroups = groupPodcastsByMovie(podcasts);
        const hubs = groupMoviesByService(movieGroups);

        expect(hubs[0].slug).toBe('free');
        expect(hubs[0].path).toBe('/streaming/free/');
        expect(hubs[0].count).toBe(1);
        expect(hubs[0].movies[0].slug).toBe('the-godfather-1972');

        const paramountHub = hubs.find((h) => h.slug === 'paramount-plus');
        expect(paramountHub).toBeTruthy();
        expect(paramountHub.path).toBe('/streaming/paramount-plus/');
        expect(paramountHub.count).toBe(2);

        // Paramount+ (2 movies) comes before 1-movie services like Hulu, Netflix, Pluto TV, Prime Video
        expect(hubs[1].slug).toBe('paramount-plus');
    });
});

describe('renderMoviePageHtml', () => {
    it('renders complete dark-themed HTML with metadata, poster, credits, streaming, audio, and JSON-LD @graph', () => {
        const [group] = groupPodcastsByMovie([makePodcast()]);
        const html = renderMoviePageHtml(group, {
            baseUrl: 'https://watchthatpod.com',
            generatedAt: '2026-11-27T12:00:00.000Z'
        });

        expect(html).toContain('<title>Where to Stream The Godfather (1972) — The Rewatchables | Watch That Pod</title>');
        expect(html).toContain('<link rel="canonical" href="https://watchthatpod.com/movie/the-godfather-1972/">');
        expect(html).toContain('property="og:image" content="https://watchthatpod.com/og-image.jpg"');
        expect(html).toContain('name="twitter:card" content="summary_large_image"');
        expect(html).toContain('name="twitter:title"');
        expect(html).toContain('background: #121212');
        expect(html).toContain('background: #1e1e1e');
        expect(html).toContain('color: #90caf9');
        expect(html).toContain('width="180" height="270" loading="lazy"');
        expect(html).toContain('aspect-ratio: 2 / 3');
        expect(html).toContain('175 min');
        expect(html).toContain('href="/?director=Francis%20Ford%20Coppola"');
        expect(html).toContain('href="/?actor=Al%20Pacino"');
        expect(html).toContain('https://www.imdb.com/title/tt0068646/');
        expect(html).toContain('Free!');
        expect(html).toContain('Subscription');
        expect(html).toContain('Premium (Paramount+ with Showtime)');
        expect(html).toContain('Rent $3.99');
        expect(html).toContain('href="/streaming/paramount-plus/"');
        expect(html).toContain('rel="noopener noreferrer"');
        expect(html).toContain('<audio controls preload="none" src="https://cdn.example.com/episodes/godfather.mp3">');

        const jsonLdMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
        expect(jsonLdMatch).toBeTruthy();
        const parsed = JSON.parse(jsonLdMatch[1]);
        expect(parsed['@context']).toBe('https://schema.org');

        const breadcrumb = parsed['@graph'].find((n) => n['@type'] === 'BreadcrumbList');
        const movieNode = parsed['@graph'].find((n) => n['@type'] === 'Movie');
        const episodeNode = parsed['@graph'].find((n) => n['@type'] === 'PodcastEpisode');

        expect(breadcrumb.itemListElement).toHaveLength(2);
        expect(movieNode.name).toBe('The Godfather');
        expect(movieNode.datePublished).toBe('1972');
        expect(movieNode.sameAs).toEqual([
            'https://www.imdb.com/title/tt0068646/',
            'https://www.themoviedb.org/movie/238'
        ]);
        expect(movieNode.potentialAction.length).toBe(4);
        expect(movieNode.potentialAction[0]['@type']).toBe('WatchAction');
        expect(episodeNode.partOfSeries['@type']).toBe('PodcastSeries');
        expect(episodeNode.associatedMedia['@type']).toBe('AudioObject');
        expect(episodeNode.associatedMedia.contentUrl).toBe('https://cdn.example.com/episodes/godfather.mp3');
    });

    it('escapes malicious HTML and </script> sequences in movie and episode fields', () => {
        const malicious = makePodcast({
            pod_title: 'Bad </script><script>alert(1)</script>',
            pod_desc: '<img src=x onerror=alert(1)>',
            pod_link: 'javascript:alert(1)',
            movie: {
                tmdb_id: 99,
                title: 'Film & <script>evil()</script>',
                releaseYear: 2001,
                overview: 'A <b>bold</b> & dangerous plot',
                directors: ['Dir <A>'],
                cast: ['Actor "B"'],
                streamingOptions: [
                    { type: 'free', serviceName: 'Tubi & <Free>', link: 'javascript:void(0)' }
                ]
            }
        });
        const [group] = groupPodcastsByMovie([malicious]);
        const html = renderMoviePageHtml(group, { generatedAt: '2026-11-27T00:00:00.000Z' });

        // Exactly one closing </script> tag (the JSON-LD tag itself)
        expect(html.match(/<\/script>/gi)).toHaveLength(1);
        expect(html).not.toContain('javascript:');
        expect(html).not.toContain('<script>alert(1)');
        expect(html).not.toContain('<img src=x');
        expect(html).toContain('Film &amp; &lt;script&gt;evil()&lt;/script&gt;');
        expect(html).toContain('A &lt;b&gt;bold&lt;/b&gt; &amp; dangerous plot');
    });
});

describe('renderStreamingHubHtml', () => {
    it('renders streaming hub HTML with navigation pills, movie cards, and CollectionPage/ItemList JSON-LD', () => {
        const podcasts = [
            makePodcast(),
            makePodcast({
                pod_title: "'Heat' With Chris Ryan",
                pod_date: '2025-06-01T00:00:00.000Z',
                movie: {
                    tmdb_id: 949,
                    title: 'Heat',
                    releaseYear: 1995,
                    directors: ['Michael Mann'],
                    streamingOptions: [
                        { type: 'free', serviceName: 'Tubi', link: 'https://tubitv.com/heat' }
                    ]
                }
            })
        ];
        const movieGroups = groupPodcastsByMovie(podcasts);
        const hubs = groupMoviesByService(movieGroups);
        const freeHub = hubs[0];

        const html = renderStreamingHubHtml(freeHub, {
            baseUrl: 'https://watchthatpod.com',
            generatedAt: '2026-11-27T12:00:00.000Z',
            allHubs: hubs
        });

        expect(html).toContain('<title>Free Rewatchables Movies to Stream Right Now | Watch That Pod</title>');
        expect(html).toContain('<link rel="canonical" href="https://watchthatpod.com/streaming/free/">');
        expect(html).toContain('2 movies · Updated 2026-11-27');
        expect(html).toContain('href="/streaming/free/" aria-current="page"');
        expect(html).toContain('href="/streaming/paramount-plus/"');
        expect(html).toContain('href="/movie/the-godfather-1972/"');
        expect(html).toContain('href="/movie/heat-1995/"');
        expect(html).toContain('https://tubitv.com/heat');

        const jsonLdMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
        expect(jsonLdMatch).toBeTruthy();
        const parsed = JSON.parse(jsonLdMatch[1]);
        const breadcrumb = parsed['@graph'].find((n) => n['@type'] === 'BreadcrumbList');
        const collection = parsed['@graph'].find((n) => n['@type'] === 'CollectionPage');
        const itemList = parsed['@graph'].find((n) => n['@type'] === 'ItemList');

        expect(breadcrumb.itemListElement).toHaveLength(2);
        expect(collection.url).toBe('https://watchthatpod.com/streaming/free/');
        expect(itemList.numberOfItems).toBe(2);
        expect(itemList.itemListElement).toHaveLength(2);
    });
});

describe('generateStaticPages', () => {
    it('generates S3 keys, canonical paths, hubs, and movie groups together', () => {
        const result = generateStaticPages([makePodcast()], '2026-11-27T12:00:00.000Z');

        expect(result.movieGroups).toHaveLength(1);
        expect(result.hubs.map((h) => h.path)).toEqual([
            '/streaming/free/',
            '/streaming/hulu/',
            '/streaming/paramount-plus/',
            '/streaming/pluto-tv/',
            '/streaming/prime-video/'
        ]);
        expect(result.pages.map((p) => p.key)).toEqual([
            'streaming/free/index.html',
            'streaming/hulu/index.html',
            'streaming/paramount-plus/index.html',
            'streaming/pluto-tv/index.html',
            'streaming/prime-video/index.html',
            'movie/the-godfather-1972/index.html'
        ]);
        expect(result.paths).toContain('/movie/the-godfather-1972/');
        expect(result.paths).toContain('/streaming/free/');
    });
});
