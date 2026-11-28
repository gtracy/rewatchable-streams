'use strict';

const { getMovieSlug } = require('./static-pages');

const DEFAULT_BASE_URL = 'https://watchthatpod.com';
const JSONLD_START_MARKER = '<!-- SEO_JSONLD_START -->';
const JSONLD_END_MARKER = '<!-- SEO_JSONLD_END -->';
const NOSCRIPT_START_MARKER = '<!-- SEO_NOSCRIPT_START -->';
const NOSCRIPT_END_MARKER = '<!-- SEO_NOSCRIPT_END -->';

const JSONLD_EPISODE_LIMIT = 50;
const NOSCRIPT_EPISODE_LIMIT = 25;
const TOP_CAST_LIMIT = 5;

/**
 * Normalize base URL by removing trailing slashes.
 * @param {string} [baseUrl]
 * @returns {string}
 */
function normalizeBaseUrl(baseUrl) {
    const raw = typeof baseUrl === 'string' && baseUrl.trim() ? baseUrl.trim() : DEFAULT_BASE_URL;
    return raw.replace(/\/+$/, '');
}

/**
 * Format a Date or date-like string as YYYY-MM-DD (UTC).
 * @param {string|Date|number} value
 * @param {string} [fallback]
 * @returns {string}
 */
function formatIsoDate(value, fallback = '') {
    if (!value) {
        return fallback;
    }
    const parsed = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(parsed.getTime())) {
        return fallback;
    }
    return parsed.toISOString().slice(0, 10);
}

/**
 * Return a copy of podcasts sorted newest-first by pod_date.
 * Entries with missing or invalid pod_date are placed at the end.
 * @param {Array} podcasts
 * @returns {Array}
 */
function sortPodcastsNewestFirst(podcasts) {
    if (!Array.isArray(podcasts)) {
        return [];
    }
    return [...podcasts].sort((a, b) => {
        const timeA = a && a.pod_date ? Date.parse(a.pod_date) : NaN;
        const timeB = b && b.pod_date ? Date.parse(b.pod_date) : NaN;
        const validA = !Number.isNaN(timeA);
        const validB = !Number.isNaN(timeB);
        if (validA && validB) {
            return timeB - timeA;
        }
        if (validA) return -1;
        if (validB) return 1;
        return 0;
    });
}

/**
 * Extract the movie title from an enriched podcast entry.
 * @param {object} podcast
 * @returns {string}
 */
function getMovieTitle(podcast) {
    const movie = podcast && podcast.movie ? podcast.movie : {};
    return movie.title || movie.movie_title || podcast?.pod_title || 'Untitled Movie';
}

/**
 * Extract the release year from an enriched podcast entry.
 * @param {object} podcast
 * @returns {string|null}
 */
function getReleaseYear(podcast) {
    const movie = podcast && podcast.movie ? podcast.movie : {};
    if (movie.releaseYear !== undefined && movie.releaseYear !== null && movie.releaseYear !== '') {
        return String(movie.releaseYear);
    }
    if (movie.release_date) {
        const match = String(movie.release_date).match(/\d{4}/);
        if (match) return match[0];
    }
    return null;
}

/**
 * Format a single streaming option as `Service (Type) — <link>`.
 * @param {object} option
 * @returns {string}
 */
function formatStreamingOption(option) {
    if (!option || typeof option !== 'object') {
        return '';
    }
    const serviceName = option.serviceName || option.service?.name || 'Unknown Service';
    const rawType = typeof option.type === 'string' ? option.type.toLowerCase() : '';
    let label;

    if (rawType === 'free') {
        label = 'Free';
    } else if (rawType === 'subscription') {
        label = 'Subscription';
    } else if (rawType === 'addon') {
        label = option.addon?.name ? `Premium (${option.addon.name})` : 'Premium';
    } else if (rawType === 'rent') {
        label = formatPricedLabel('Rent', option.price);
    } else if (rawType === 'buy') {
        label = formatPricedLabel('Buy', option.price);
    } else if (rawType) {
        label = rawType.charAt(0).toUpperCase() + rawType.slice(1);
    } else {
        label = 'Stream';
    }

    const link = option.link || option.videoLink || '';
    return link ? `${serviceName} (${label}) — ${link}` : `${serviceName} (${label})`;
}

/**
 * Format a Rent/Buy label with price if available.
 * @param {string} verb
 * @param {object} [price]
 * @returns {string}
 */
function formatPricedLabel(verb, price) {
    if (!price || typeof price !== 'object') {
        return verb;
    }
    if (price.amount !== undefined && price.amount !== null && price.amount !== '') {
        const currency = (price.currency || 'USD').toUpperCase();
        if (currency === 'USD') {
            return `${verb} $${price.amount}`;
        }
        return `${verb} ${price.amount} ${currency}`;
    }
    if (price.formatted) {
        return `${verb} ${price.formatted}`;
    }
    return verb;
}

/**
 * Escape special characters for safe HTML text and attribute output.
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Escape special characters for safe XML output.
 * @param {string} text
 * @returns {string}
 */
function escapeXml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

/**
 * Serialize JSON safely for embedding inside a <script type="application/ld+json"> tag.
 * Escapes `<`, `>`, and `&` so `</script>` or HTML comment sequences can never break out.
 * @param {object} data
 * @returns {string}
 */
function safeJsonLdStringify(data) {
    return JSON.stringify(data, null, 2)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
}

/**
 * Count episodes that have at least one streaming option of the given type.
 * @param {Array} podcasts
 * @param {string} type
 * @returns {number}
 */
function countMoviesWithStreamType(podcasts, type) {
    if (!Array.isArray(podcasts)) {
        return 0;
    }
    return podcasts.filter((p) => {
        const options = p?.movie?.streamingOptions;
        return Array.isArray(options) && options.some(
            (opt) => typeof opt?.type === 'string' && opt.type.toLowerCase() === type
        );
    }).length;
}

/**
 * Generate the concise llms.txt Markdown index following the llms.txt standard.
 * @param {Array} podcasts
 * @param {string|Date} generatedAt
 * @param {string} [baseUrl='https://watchthatpod.com']
 * @param {Array<object>} [hubs=[]]
 * @returns {string}
 */
function generateLlmsTxt(podcasts, generatedAt, baseUrl = DEFAULT_BASE_URL, hubs = []) {
    const safePodcasts = Array.isArray(podcasts) ? podcasts : [];
    const safeHubs = Array.isArray(hubs) ? hubs.filter((h) => h && h.path && h.name) : [];
    const base = normalizeBaseUrl(baseUrl);
    const lastUpdated = formatIsoDate(generatedAt, new Date().toISOString().slice(0, 10));
    const totalEpisodes = safePodcasts.length;
    const freeStreamingCount = countMoviesWithStreamType(safePodcasts, 'free');
    const subscriptionStreamingCount = countMoviesWithStreamType(safePodcasts, 'subscription');

    const lines = [
        '# Watch That Pod',
        '',
        '> Watch That Pod is a daily-updated streaming guide mapping episodes of The Rewatchables podcast to current US streaming, subscription, add-on, and rental availability.',
        '',
        '## Dataset Summary',
        '',
        `- Total Episodes Indexed: ${totalEpisodes}`,
        `- Movies Available to Stream Free: ${freeStreamingCount}`,
        `- Movies Available with Subscription: ${subscriptionStreamingCount}`,
        `- Last Updated: ${lastUpdated}`,
        '',
        '## Links',
        '',
        `- [Watch That Pod](${base}/): Interactive searchable table of The Rewatchables episodes and where to watch each movie`,
        `- [Search Episodes & Movies](${base}/?search={query}): Direct search link for any movie title, director, actor, or streaming service`,
        `- [Movie Pages](${base}/movie/{slug}/): Dedicated static movie streaming and Rewatchables episode pages (URL pattern: \`/movie/<slug>/\`, e.g. \`/movie/the-godfather-1972/\`)`,
        `- [Full Episode Catalog](${base}/llms-full.txt): Complete Markdown catalog of all episodes with cast, directors, streaming options, IMDb links, and podcast audio URLs`,
        `- [XML Sitemap](${base}/sitemap.xml): Machine-readable sitemap for crawlers`,
        ''
    ];

    if (safeHubs.length > 0) {
        lines.push('## Streaming Hubs', '');
        for (const hub of safeHubs.slice(0, 12)) {
            const hubPath = hub.path.startsWith('/') ? hub.path : `/${hub.path}`;
            const countSuffix = typeof hub.count === 'number'
                ? `: ${hub.count} ${hub.count === 1 ? 'movie' : 'movies'}`
                : '';
            lines.push(`- [${hub.name}](${base}${hubPath})${countSuffix}`);
        }
        lines.push('');
    }

    lines.push(
        '## How to Query & FAQ',
        '',
        '- **How do I look up where a Rewatchables movie is streaming?** Fetch `/llms-full.txt` for the complete episode-by-episode catalog, visit a movie page at `https://watchthatpod.com/movie/<slug>/`, or direct users to `https://watchthatpod.com/?search={query}` (URL-encoded movie title, director, actor, or service name).',
        '- **What query parameters are supported on the web app?** `?search=`, `?director=`, `?actor=`, and `?service=` pre-filter the table on load.',
        '- **What do the streaming labels mean?** `Free` = ad-supported free streaming (e.g. Pluto TV, Tubi); `Subscription` = included with a standard streaming plan; `Premium` = requires a channel add-on; `Rent $X.XX` = digital rental price in USD.',
        '- **How fresh is the streaming availability?** Streaming links and catalog data are refreshed daily for US streaming catalogs.',
        ''
    );

    return lines.join('\n');
}

/**
 * Generate the full llms-full.txt Markdown catalog sorted newest-first by pod_date.
 * @param {Array} podcasts
 * @param {string|Date} generatedAt
 * @param {string} [baseUrl='https://watchthatpod.com']
 * @returns {string}
 */
function generateLlmsFullTxt(podcasts, generatedAt, baseUrl = DEFAULT_BASE_URL) {
    const sorted = sortPodcastsNewestFirst(podcasts);
    const base = normalizeBaseUrl(baseUrl);
    const lastUpdated = formatIsoDate(generatedAt, new Date().toISOString().slice(0, 10));

    const lines = [
        '# Watch That Pod — Full Episode Catalog',
        '',
        '> Complete catalog of The Rewatchables podcast episodes and current US movie streaming availability, sorted newest-first.',
        '',
        `- Source: ${base}/`,
        `- Total Episodes: ${sorted.length}`,
        `- Last Updated: ${lastUpdated}`,
        ''
    ];

    for (const podcast of sorted) {
        if (!podcast || typeof podcast !== 'object') {
            continue;
        }
        const movie = podcast.movie || {};
        const movieTitle = getMovieTitle(podcast);
        const releaseYear = getReleaseYear(podcast);
        const movieSlug = getMovieSlug(podcast);
        const heading = releaseYear ? `## ${movieTitle} (${releaseYear})` : `## ${movieTitle}`;

        lines.push(heading);
        lines.push('');
        lines.push(`- **Movie Page:** ${base}/movie/${movieSlug}/`);

        if (podcast.pod_title) {
            lines.push(`- **Podcast Episode:** ${podcast.pod_title}`);
        }

        const airDate = formatIsoDate(podcast.pod_date);
        if (airDate) {
            lines.push(`- **Air Date:** ${airDate}`);
        }

        const directors = Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [];
        if (directors.length > 0) {
            lines.push(`- **Directors:** ${directors.join(', ')}`);
        }

        const topCast = Array.isArray(movie.cast)
            ? movie.cast.filter(Boolean).slice(0, TOP_CAST_LIMIT)
            : [];
        if (topCast.length > 0) {
            lines.push(`- **Top Cast:** ${topCast.join(', ')}`);
        }

        const rawOptions = Array.isArray(movie.streamingOptions) ? movie.streamingOptions : [];
        const formattedOptions = [];
        const seenOptions = new Set();
        for (const opt of rawOptions) {
            const formatted = formatStreamingOption(opt);
            if (formatted && !seenOptions.has(formatted)) {
                seenOptions.add(formatted);
                formattedOptions.push(formatted);
            }
        }

        if (formattedOptions.length > 0) {
            lines.push('- **Streaming Options:**');
            for (const optLine of formattedOptions) {
                lines.push(`  - ${optLine}`);
            }
        } else {
            lines.push('- **Streaming Options:** None currently listed');
        }

        if (movie.imdb_id) {
            lines.push(`- **IMDb:** https://www.imdb.com/title/${movie.imdb_id}/`);
        }

        if (podcast.pod_link) {
            lines.push(`- **Podcast Audio:** ${podcast.pod_link}`);
        }

        lines.push('');
    }

    return lines.join('\n');
}

/**
 * Generate a valid XML sitemap with dynamic lastmod date, root URL, and optional extra paths.
 * @param {string|Date} generatedAt
 * @param {string} [baseUrl='https://watchthatpod.com']
 * @param {Array<string>} [extraPaths=[]]
 * @returns {string}
 */
function generateSitemapXml(generatedAt, baseUrl = DEFAULT_BASE_URL, extraPaths = []) {
    const base = normalizeBaseUrl(baseUrl);
    const lastmod = formatIsoDate(generatedAt, new Date().toISOString().slice(0, 10));

    const seen = new Set(['/']);
    const streamingPaths = [];
    const moviePaths = [];
    const otherPaths = [];

    if (Array.isArray(extraPaths)) {
        for (const rawPath of extraPaths) {
            if (typeof rawPath !== 'string' || !rawPath.trim()) {
                continue;
            }
            const normalized = rawPath.trim().startsWith('/') ? rawPath.trim() : `/${rawPath.trim()}`;
            if (seen.has(normalized)) {
                continue;
            }
            seen.add(normalized);
            if (normalized.startsWith('/streaming/')) {
                streamingPaths.push(normalized);
            } else if (normalized.startsWith('/movie/')) {
                moviePaths.push(normalized);
            } else {
                otherPaths.push(normalized);
            }
        }
    }

    streamingPaths.sort((a, b) => {
        if (a === '/streaming/free/') return -1;
        if (b === '/streaming/free/') return 1;
        return a.localeCompare(b);
    });
    moviePaths.sort((a, b) => a.localeCompare(b));
    otherPaths.sort((a, b) => a.localeCompare(b));

    const entries = [
        { path: '/', priority: '1.0' },
        ...streamingPaths.map((p) => ({ path: p, priority: '0.8' })),
        ...moviePaths.map((p) => ({ path: p, priority: '0.7' })),
        ...otherPaths.map((p) => ({ path: p, priority: '0.6' }))
    ];

    const lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ];

    for (const entry of entries) {
        lines.push(
            '  <url>',
            `    <loc>${escapeXml(`${base}${entry.path}`)}</loc>`,
            `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
            '    <changefreq>daily</changefreq>',
            `    <priority>${entry.priority}</priority>`,
            '  </url>'
        );
    }

    lines.push('</urlset>', '');
    return lines.join('\n');
}

/**
 * Build the JSON-LD @graph object for index.html.
 * @param {Array} sortedPodcasts
 * @param {string} base
 * @returns {object}
 */
function buildJsonLdGraph(sortedPodcasts, base) {
    const recentEpisodes = sortedPodcasts.slice(0, JSONLD_EPISODE_LIMIT);

    const itemListElement = recentEpisodes.map((podcast, index) => {
        const movie = podcast?.movie || {};
        const movieTitle = getMovieTitle(podcast);
        const releaseYear = getReleaseYear(podcast);
        const airDate = formatIsoDate(podcast?.pod_date);
        const directors = Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [];

        const sameAs = [];
        if (movie.imdb_id) {
            sameAs.push(`https://www.imdb.com/title/${movie.imdb_id}/`);
        }
        if (movie.tmdb_id !== undefined && movie.tmdb_id !== null && movie.tmdb_id !== '') {
            sameAs.push(`https://www.themoviedb.org/movie/${movie.tmdb_id}`);
        }

        const aboutMovie = {
            '@type': 'Movie',
            name: movieTitle
        };
        if (releaseYear) {
            aboutMovie.dateCreated = releaseYear;
        }
        if (directors.length > 0) {
            aboutMovie.director = directors.map((name) => ({
                '@type': 'Person',
                name
            }));
        }
        if (sameAs.length > 0) {
            aboutMovie.sameAs = sameAs;
        }

        const episode = {
            '@type': 'PodcastEpisode',
            name: podcast?.pod_title || movieTitle,
            partOfSeries: {
                '@id': `${base}/#podcast`
            },
            about: aboutMovie
        };
        if (airDate) {
            episode.datePublished = airDate;
        }
        if (podcast?.pod_link) {
            episode.url = podcast.pod_link;
        }

        return {
            '@type': 'ListItem',
            position: index + 1,
            item: episode
        };
    });

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${base}/#website`,
                name: 'Watch That Pod',
                alternateName: 'Watch That Pod - The Rewatchables Streaming Guide',
                description: 'Daily-updated streaming guide mapping The Rewatchables podcast episodes to where featured movies can be watched.',
                url: `${base}/`,
                publisher: {
                    '@id': `${base}/#organization`
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${base}/?search={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                }
            },
            {
                '@type': 'Organization',
                '@id': `${base}/#organization`,
                name: 'Watch That Pod',
                url: `${base}/`
            },
            {
                '@type': 'PodcastSeries',
                '@id': `${base}/#podcast`,
                name: 'The Rewatchables',
                description: 'A movie podcast discussing the most rewatchable movies of all time.',
                url: `${base}/`
            },
            {
                '@type': 'ItemList',
                '@id': `${base}/#episodes`,
                name: 'Recent Rewatchables Episodes',
                description: 'Most recent episodes of The Rewatchables indexed on Watch That Pod.',
                numberOfItems: itemListElement.length,
                itemListElement
            }
        ]
    };
}

/**
 * Build the static <noscript> HTML summary block for index.html.
 * @param {Array} sortedPodcasts
 * @param {string} lastUpdated
 * @param {string} base
 * @returns {string}
 */
function buildNoscriptHtml(sortedPodcasts, lastUpdated, base) {
    const recentEpisodes = sortedPodcasts.slice(0, NOSCRIPT_EPISODE_LIMIT);
    const listItems = recentEpisodes.map((podcast) => {
        const movie = podcast?.movie || {};
        const movieTitle = getMovieTitle(podcast);
        const releaseYear = getReleaseYear(podcast);
        const titleLabel = releaseYear ? `${movieTitle} (${releaseYear})` : movieTitle;

        const rawOptions = Array.isArray(movie.streamingOptions) ? movie.streamingOptions : [];
        const services = [];
        const seen = new Set();
        for (const opt of rawOptions) {
            const name = opt?.serviceName || opt?.service?.name;
            if (name && !seen.has(name)) {
                seen.add(name);
                services.push(name);
            }
        }

        const servicesText = services.length > 0
            ? ` — Streaming on ${services.join(', ')}`
            : '';

        return `          <li><strong>${escapeHtml(titleLabel)}</strong>${escapeHtml(servicesText)}</li>`;
    });

    const lines = [
        '    <noscript>',
        '      <main>',
        '        <h1>Watch That Pod — The Rewatchables Streaming Guide</h1>',
        `        <p>${sortedPodcasts.length} episodes indexed · Last updated ${escapeHtml(lastUpdated)}.</p>`,
        '        <p>Enable JavaScript to use the interactive table, or browse the plain-text catalog at '
            + `<a href="${escapeHtml(base)}/llms.txt">llms.txt</a> and `
            + `<a href="${escapeHtml(base)}/llms-full.txt">llms-full.txt</a>.</p>`
    ];

    if (listItems.length > 0) {
        lines.push('        <h2>Recent Episodes</h2>');
        lines.push('        <ul>');
        lines.push(...listItems);
        lines.push('        </ul>');
    }

    lines.push('      </main>');
    lines.push('    </noscript>');

    return lines.join('\n');
}

/**
 * Replace content between exact start and end markers, preserving the markers.
 * Returns the original html unchanged if markers are missing or out of order.
 * @param {string} html
 * @param {string} startMarker
 * @param {string} endMarker
 * @param {string} replacementBody
 * @returns {string}
 */
function replaceBetweenMarkers(html, startMarker, endMarker, replacementBody) {
    const startIdx = html.indexOf(startMarker);
    if (startIdx === -1) {
        return html;
    }
    const afterStart = startIdx + startMarker.length;
    const endIdx = html.indexOf(endMarker, afterStart);
    if (endIdx === -1) {
        return html;
    }

    return (
        html.slice(0, afterStart)
        + '\n'
        + replacementBody
        + '\n    '
        + html.slice(endIdx)
    );
}

/**
 * Inject rich JSON-LD and static <noscript> summary into index.html between marker comments.
 * If markers are not found, returns html unchanged without throwing.
 * @param {string} html
 * @param {Array} podcasts
 * @param {string|Date} generatedAt
 * @param {string} [baseUrl='https://watchthatpod.com']
 * @returns {string}
 */
function injectSeoIntoIndexHtml(html, podcasts, generatedAt, baseUrl = DEFAULT_BASE_URL) {
    if (typeof html !== 'string') {
        return html;
    }

    const base = normalizeBaseUrl(baseUrl);
    const lastUpdated = formatIsoDate(generatedAt, new Date().toISOString().slice(0, 10));
    const sorted = sortPodcastsNewestFirst(podcasts);

    let updated = html;

    if (updated.includes(JSONLD_START_MARKER) && updated.includes(JSONLD_END_MARKER)) {
        const jsonLd = buildJsonLdGraph(sorted, base);
        const scriptBlock = [
            '    <script type="application/ld+json">',
            safeJsonLdStringify(jsonLd),
            '    </script>'
        ].join('\n');
        updated = replaceBetweenMarkers(updated, JSONLD_START_MARKER, JSONLD_END_MARKER, scriptBlock);
    }

    if (updated.includes(NOSCRIPT_START_MARKER) && updated.includes(NOSCRIPT_END_MARKER)) {
        const noscriptBlock = buildNoscriptHtml(sorted, lastUpdated, base);
        updated = replaceBetweenMarkers(updated, NOSCRIPT_START_MARKER, NOSCRIPT_END_MARKER, noscriptBlock);
    }

    return updated;
}

/**
 * Generate the Agentic Resource Discovery (ARD v1.0) manifest
 * served at /.well-known/ard.json, /.well-known/ai-catalog.json, and /ai-catalog.json.
 * @param {Array} podcasts
 * @param {string|Date} generatedAt
 * @param {string} [baseUrl='https://watchthatpod.com']
 * @returns {string}
 */
function generateAiCatalogJson(podcasts, generatedAt, baseUrl = DEFAULT_BASE_URL) {
    const base = normalizeBaseUrl(baseUrl);
    const list = Array.isArray(podcasts) ? podcasts : [];
    const lastUpdated = formatIsoDate(generatedAt, new Date().toISOString().slice(0, 10));
    const total = list.length;

    let publisher = 'watchthatpod.com';
    try {
        publisher = new URL(base).hostname || publisher;
    } catch {
        // Keep default publisher hostname
    }

    const manifest = {
        specVersion: '1.0',
        host: {
            displayName: 'Watch That Pod'
        },
        entries: [
            {
                identifier: `urn:air:${publisher}:catalog:llms-overview`,
                displayName: 'Watch That Pod LLMs Overview',
                type: 'text/markdown; profile="urn:air:agent-skills"',
                url: `${base}/llms.txt`,
                description: `Concise Markdown overview of Watch That Pod (${total} episodes indexed, updated ${lastUpdated}), update cadence, search URL patterns, and navigation links.`,
                representativeQueries: [
                    'What is Watch That Pod and how does it track The Rewatchables movies?',
                    'How can I search The Rewatchables episodes by streaming service or director?',
                    'Where can I find a machine-readable catalog of The Rewatchables podcast episodes?'
                ]
            },
            {
                identifier: `urn:air:${publisher}:catalog:episodes-full`,
                displayName: 'The Rewatchables Full Episode & Streaming Catalog',
                type: 'text/markdown; profile="urn:air:agent-skills"',
                url: `${base}/llms-full.txt`,
                description: `Complete Markdown directory of all ${total} indexed The Rewatchables podcast episodes (updated ${lastUpdated}) mapped to featured movies, release years, directors, top cast, current US streaming and rental options, IMDb links, and podcast audio URLs.`,
                representativeQueries: [
                    'Where can I stream movies covered on The Rewatchables podcast?',
                    'Which The Rewatchables movies are streaming for free right now?',
                    'Find streaming options and podcast episode info for The Godfather on The Rewatchables'
                ]
            }
        ]
    };

    return `${JSON.stringify(manifest, null, 2)}\n`;
}

/**
 * Convenience helper to generate all static SEO/AI-SEO text artifacts at once.
 * @param {Array} enrichedPodcasts
 * @param {string|Date} generatedAt
 * @param {object} [options]
 * @param {string} [options.baseUrl='https://watchthatpod.com']
 * @returns {{ llmsTxt: string, llmsFullTxt: string, sitemapXml: string, aiCatalogJson: string }}
 */
function generateSeoArtifacts(enrichedPodcasts, generatedAt, options = {}) {
    const baseUrl = options?.baseUrl || DEFAULT_BASE_URL;
    const hubs = options?.hubs || [];
    const extraPaths = options?.extraPaths || [];
    return {
        llmsTxt: generateLlmsTxt(enrichedPodcasts, generatedAt, baseUrl, hubs),
        llmsFullTxt: generateLlmsFullTxt(enrichedPodcasts, generatedAt, baseUrl),
        sitemapXml: generateSitemapXml(generatedAt, baseUrl, extraPaths),
        aiCatalogJson: generateAiCatalogJson(enrichedPodcasts, generatedAt, baseUrl)
    };
}

module.exports = {
    DEFAULT_BASE_URL,
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
    // Exported for targeted unit testing
    formatStreamingOption,
    sortPodcastsNewestFirst,
    safeJsonLdStringify
};
