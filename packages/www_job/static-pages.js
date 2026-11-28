'use strict';

const DEFAULT_BASE_URL = 'https://watchthatpod.com';
const TOP_HUB_PILL_LIMIT = 12;

/**
 * Shared slug generator — must match the frontend implementation exactly.
 * @param {string} value
 * @returns {string}
 */
function slugify(value) {
    return String(value || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\+/g, ' plus ')
        .replace(/&/g, ' and ')
        .replace(/['’`]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

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
 * Serialize JSON safely for embedding inside a <script type="application/ld+json"> tag.
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
 * Validate that a URL uses http: or https: before placing it in href/src attributes.
 * @param {string} url
 * @returns {string}
 */
function sanitizeHttpUrl(url) {
    if (typeof url !== 'string' || !url.trim()) {
        return '';
    }
    const trimmed = url.trim();
    try {
        const parsed = new URL(trimmed);
        if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
            return parsed.href;
        }
    } catch {
        return '';
    }
    return '';
}

/**
 * Extract the movie object whether given an enriched podcast entry or a bare movie object.
 * @param {object} movieOrPodcast
 * @returns {{ movie: object, podcast: object|null }}
 */
function unwrapMovie(movieOrPodcast) {
    if (!movieOrPodcast || typeof movieOrPodcast !== 'object') {
        return { movie: {}, podcast: null };
    }
    if (movieOrPodcast.movie && typeof movieOrPodcast.movie === 'object') {
        return { movie: movieOrPodcast.movie, podcast: movieOrPodcast };
    }
    return { movie: movieOrPodcast, podcast: null };
}

/**
 * Extract the movie title from a movie or enriched podcast entry.
 * @param {object} movieOrPodcast
 * @returns {string}
 */
function extractMovieTitle(movieOrPodcast) {
    const { movie, podcast } = unwrapMovie(movieOrPodcast);
    return movie.title || movie.movie_title || podcast?.pod_title || '';
}

/**
 * Extract the 4-digit release year from a movie or enriched podcast entry.
 * @param {object} movieOrPodcast
 * @returns {string|null}
 */
function extractReleaseYear(movieOrPodcast) {
    const { movie } = unwrapMovie(movieOrPodcast);
    if (movie.releaseYear !== undefined && movie.releaseYear !== null && movie.releaseYear !== '') {
        const match = String(movie.releaseYear).match(/\d{4}/);
        return match ? match[0] : String(movie.releaseYear);
    }
    if (movie.release_date) {
        const match = String(movie.release_date).match(/\d{4}/);
        if (match) return match[0];
    }
    return null;
}

/**
 * Build the canonical movie slug:
 * `releaseYear ? `${slugify(title)}-${releaseYear}` : slugify(title)`
 * with fallback `movie-${tmdb_id || 'unknown'}` if title slug is empty.
 * @param {object} movieOrPodcast
 * @returns {string}
 */
function getMovieSlug(movieOrPodcast) {
    const { movie } = unwrapMovie(movieOrPodcast);
    const title = extractMovieTitle(movieOrPodcast);
    const releaseYear = extractReleaseYear(movieOrPodcast);
    const titleSlug = slugify(title);

    if (!titleSlug) {
        const tmdbPart = movie.tmdb_id !== undefined && movie.tmdb_id !== null && String(movie.tmdb_id).trim() !== ''
            ? slugify(String(movie.tmdb_id)) || String(movie.tmdb_id).trim()
            : 'unknown';
        return `movie-${tmdbPart}`;
    }

    return releaseYear ? `${titleSlug}-${releaseYear}` : titleSlug;
}

/**
 * Build the canonical streaming service hub slug.
 * @param {string} serviceName
 * @returns {string}
 */
function getServiceSlug(serviceName) {
    return slugify(serviceName);
}

/**
 * Resolve a reliable poster URL for a movie.
 * Prefers TMDB poster paths (which do not expire), falling back to imageSet URLs.
 * @param {object} movie
 * @returns {string}
 */
function resolvePosterUrl(movie) {
    if (!movie || typeof movie !== 'object') {
        return '';
    }
    if (typeof movie.img === 'string' && movie.img.trim()) {
        const img = movie.img.trim();
        if (img.startsWith('/')) {
            return `https://image.tmdb.org/t/p/w342${img}`;
        }
        const safeImg = sanitizeHttpUrl(img);
        if (safeImg) {
            return safeImg;
        }
    }
    if (typeof movie.imageSet === 'string') {
        return sanitizeHttpUrl(movie.imageSet);
    }
    if (movie.imageSet && typeof movie.imageSet === 'object') {
        const vertical = movie.imageSet.verticalPoster;
        if (vertical && typeof vertical === 'object') {
            return sanitizeHttpUrl(vertical.w360 || vertical.w240 || vertical.w480 || vertical.w720 || '');
        }
    }
    return '';
}

/**
 * Sort podcasts newest-first by pod_date.
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
 * Format a streaming option type/price label for HTML badges.
 * @param {object} option
 * @returns {{ label: string, badgeClass: string, priority: number }}
 */
function describeStreamingOption(option) {
    const rawType = typeof option?.type === 'string' ? option.type.toLowerCase() : '';
    if (rawType === 'free') {
        return { label: 'Free!', badgeClass: 'badge-free', priority: 1 };
    }
    if (rawType === 'subscription') {
        return { label: 'Subscription', badgeClass: 'badge-sub', priority: 2 };
    }
    if (rawType === 'addon') {
        const addonLabel = option.addon?.name ? `Premium (${option.addon.name})` : 'Premium';
        return { label: addonLabel, badgeClass: 'badge-addon', priority: 3 };
    }
    if (rawType === 'rent') {
        return { label: formatPricedLabel('Rent', option.price), badgeClass: 'badge-rent', priority: 4 };
    }
    if (rawType === 'buy') {
        return { label: formatPricedLabel('Buy', option.price), badgeClass: 'badge-rent', priority: 5 };
    }
    if (rawType) {
        return {
            label: rawType.charAt(0).toUpperCase() + rawType.slice(1),
            badgeClass: 'badge-sub',
            priority: 6
        };
    }
    return { label: 'Stream', badgeClass: 'badge-sub', priority: 7 };
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
 * Normalize and deduplicate a movie's streaming options, sorted by best value (Free -> Sub -> Addon -> Rent -> Buy).
 * @param {Array} rawOptions
 * @returns {Array}
 */
function normalizeStreamingOptions(rawOptions) {
    if (!Array.isArray(rawOptions)) {
        return [];
    }
    const normalized = [];
    const seen = new Set();

    for (const opt of rawOptions) {
        if (!opt || typeof opt !== 'object') {
            continue;
        }
        const serviceName = (opt.serviceName || opt.service?.name || '').trim();
        if (!serviceName) {
            continue;
        }
        const serviceSlug = getServiceSlug(serviceName);
        const type = typeof opt.type === 'string' ? opt.type.toLowerCase() : '';
        const { label, badgeClass, priority } = describeStreamingOption(opt);
        const link = sanitizeHttpUrl(opt.link || opt.videoLink || '');
        const dedupeKey = `${serviceSlug}|${type}|${label}|${link}`;
        if (seen.has(dedupeKey)) {
            continue;
        }
        seen.add(dedupeKey);
        normalized.push({
            serviceName,
            serviceSlug,
            type,
            label,
            badgeClass,
            priority,
            link,
            price: opt.price || null,
            addon: opt.addon || null
        });
    }

    normalized.sort((a, b) => {
        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }
        return a.serviceName.localeCompare(b.serviceName);
    });

    return normalized;
}

/**
 * Group enriched podcast episodes by canonical movie slug so re-rewatchables share one movie page.
 * Episodes within each movie group are ordered newest-first.
 * @param {Array} podcasts
 * @returns {Array<object>}
 */
function groupPodcastsByMovie(podcasts) {
    const sorted = sortPodcastsNewestFirst(podcasts);
    const groupMap = new Map();

    for (const podcast of sorted) {
        if (!podcast || typeof podcast !== 'object') {
            continue;
        }
        const movie = podcast.movie && typeof podcast.movie === 'object' ? podcast.movie : {};
        const slug = getMovieSlug(podcast);
        const title = extractMovieTitle(podcast) || 'Untitled Movie';
        const releaseYear = extractReleaseYear(podcast);

        const episode = {
            pod_title: podcast.pod_title || title,
            pod_desc: podcast.pod_desc || '',
            pod_date: podcast.pod_date || '',
            pod_link: podcast.pod_link || ''
        };

        if (!groupMap.has(slug)) {
            groupMap.set(slug, {
                slug,
                path: `/movie/${slug}/`,
                title,
                releaseYear,
                movie: {
                    ...movie,
                    title,
                    releaseYear: movie.releaseYear ?? (releaseYear ? Number(releaseYear) : null),
                    directors: Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [],
                    cast: Array.isArray(movie.cast) ? movie.cast.filter(Boolean) : [],
                    genres: Array.isArray(movie.genres) ? movie.genres.filter(Boolean) : [],
                    streamingOptions: Array.isArray(movie.streamingOptions) ? movie.streamingOptions : []
                },
                episodes: [episode]
            });
        } else {
            const existing = groupMap.get(slug);
            existing.episodes.push(episode);
            // Backfill missing metadata from older episode if the newest one lacked it
            if (!existing.movie.overview && movie.overview) {
                existing.movie.overview = movie.overview;
            }
            if (!existing.movie.imdb_id && movie.imdb_id) {
                existing.movie.imdb_id = movie.imdb_id;
            }
            if (!existing.movie.tmdb_id && movie.tmdb_id) {
                existing.movie.tmdb_id = movie.tmdb_id;
            }
            if (!existing.movie.runtime && movie.runtime) {
                existing.movie.runtime = movie.runtime;
            }
            if (!existing.movie.img && movie.img) {
                existing.movie.img = movie.img;
            }
            if (!existing.movie.imageSet && movie.imageSet) {
                existing.movie.imageSet = movie.imageSet;
            }
            if (existing.movie.streamingOptions.length === 0 && Array.isArray(movie.streamingOptions) && movie.streamingOptions.length > 0) {
                existing.movie.streamingOptions = movie.streamingOptions;
            }
        }
    }

    return Array.from(groupMap.values());
}

/**
 * Group movie pages into streaming hubs:
 * - `/streaming/free/` for all movies with at least one `type === 'free'` option
 * - `/streaming/<serviceSlug>/` for each unique streaming service
 * Returns hubs sorted with Free first (when present), then services by movie count desc, name asc.
 * @param {Array<object>} movieGroups
 * @returns {Array<object>}
 */
function groupMoviesByService(movieGroups) {
    if (!Array.isArray(movieGroups) || movieGroups.length === 0) {
        return [];
    }

    const freeMovies = [];
    const serviceHubsMap = new Map();

    for (const group of movieGroups) {
        if (!group || typeof group !== 'object') {
            continue;
        }
        const options = normalizeStreamingOptions(group.movie?.streamingOptions || []);
        const freeOptions = options.filter((opt) => opt.type === 'free');
        if (freeOptions.length > 0) {
            freeMovies.push({
                ...group,
                matchedOptions: freeOptions
            });
        }

        const groupedByService = new Map();
        for (const opt of options) {
            if (!opt.serviceSlug || opt.serviceSlug === 'free') {
                continue;
            }
            if (!groupedByService.has(opt.serviceSlug)) {
                groupedByService.set(opt.serviceSlug, {
                    name: opt.serviceName,
                    slug: opt.serviceSlug,
                    options: []
                });
            }
            groupedByService.get(opt.serviceSlug).options.push(opt);
        }

        for (const [serviceSlug, entry] of groupedByService.entries()) {
            if (!serviceHubsMap.has(serviceSlug)) {
                serviceHubsMap.set(serviceSlug, {
                    slug: serviceSlug,
                    name: entry.name,
                    path: `/streaming/${serviceSlug}/`,
                    isFreeHub: false,
                    movies: []
                });
            }
            serviceHubsMap.get(serviceSlug).movies.push({
                ...group,
                matchedOptions: entry.options
            });
        }
    }

    const serviceHubs = Array.from(serviceHubsMap.values())
        .map((hub) => ({
            ...hub,
            count: hub.movies.length
        }))
        .sort((a, b) => {
            if (b.count !== a.count) {
                return b.count - a.count;
            }
            return a.name.localeCompare(b.name);
        });

    const hubs = [];
    if (freeMovies.length > 0) {
        hubs.push({
            slug: 'free',
            name: 'Free Streaming',
            path: '/streaming/free/',
            isFreeHub: true,
            count: freeMovies.length,
            movies: freeMovies
        });
    }
    hubs.push(...serviceHubs);

    return hubs;
}

/**
 * Shared dark-themed responsive CSS for static movie and streaming hub pages.
 * Zero external assets or JavaScript required.
 * @returns {string}
 */
function getSharedStyles() {
    return `
      :root { color-scheme: dark; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 0;
        background: #121212;
        color: #f0f0f0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
      }
      a { color: #90caf9; text-decoration: none; }
      a:hover, a:focus { text-decoration: underline; }
      .container { max-width: 960px; margin: 0 auto; padding: 24px 16px 48px; }
      .site-header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid #2c2c2c; margin-bottom: 20px; }
      .brand { font-size: 1.15rem; font-weight: 700; color: #ffffff; }
      .breadcrumbs { font-size: 0.9rem; color: #b0b0b0; margin: 0 0 20px; }
      .breadcrumbs ol { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 6px; }
      .breadcrumbs li::after { content: "›"; margin-left: 6px; color: #666; }
      .breadcrumbs li:last-child::after { content: ""; margin: 0; }
      .card { background: #1e1e1e; border: 1px solid #2d2d2d; border-radius: 10px; padding: 20px; margin-bottom: 20px; }
      .movie-hero { display: flex; gap: 24px; align-items: flex-start; }
      .poster { width: 180px; height: 270px; aspect-ratio: 2 / 3; object-fit: cover; border-radius: 8px; background: #2a2a2a; flex-shrink: 0; }
      .poster-placeholder { width: 180px; height: 270px; aspect-ratio: 2 / 3; border-radius: 8px; background: #262626; color: #888; display: flex; align-items: center; justify-content: center; text-align: center; padding: 12px; font-size: 0.9rem; flex-shrink: 0; }
      .movie-meta h1 { margin: 0 0 8px; font-size: 1.85rem; line-height: 1.25; color: #ffffff; }
      .meta-row { color: #b8b8b8; font-size: 0.95rem; margin: 0 0 12px; display: flex; flex-wrap: wrap; gap: 10px; }
      .overview { margin: 0 0 16px; color: #e0e0e0; }
      .credits { margin: 8px 0; font-size: 0.95rem; color: #d0d0d0; }
      .credits strong { color: #ffffff; }
      .section-title { margin: 0 0 14px; font-size: 1.25rem; color: #ffffff; }
      .stream-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
      .stream-item { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; background: #181818; border: 1px solid #2b2b2b; border-radius: 8px; }
      .stream-info { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; }
      .service-name { font-weight: 600; color: #ffffff; }
      .badge { display: inline-block; font-size: 0.8rem; font-weight: 600; padding: 2px 9px; border-radius: 999px; }
      .badge-free { background: #1b5e20; color: #c8e6c9; }
      .badge-sub { background: #0d47a1; color: #bbdefb; }
      .badge-addon { background: #4a148c; color: #e1bee7; }
      .badge-rent { background: #424242; color: #e0e0e0; }
      .stream-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
      .btn { display: inline-block; background: #90caf9; color: #121212; font-weight: 600; padding: 6px 14px; border-radius: 6px; font-size: 0.9rem; }
      .btn:hover, .btn:focus { background: #bbdefb; text-decoration: none; }
      .episode-item { padding: 14px 0; border-top: 1px solid #2b2b2b; }
      .episode-item:first-of-type { border-top: none; padding-top: 0; }
      .episode-title { margin: 0 0 4px; font-size: 1.05rem; color: #ffffff; }
      .episode-date { margin: 0 0 8px; font-size: 0.88rem; color: #a8a8a8; }
      .episode-desc { margin: 0 0 12px; color: #d8d8d8; white-space: pre-line; }
      audio { width: 100%; max-width: 560px; height: 40px; }
      .hub-header h1 { margin: 0 0 8px; font-size: 1.8rem; color: #ffffff; }
      .hub-subtitle { margin: 0 0 16px; color: #b8b8b8; font-size: 0.95rem; }
      .hub-pills { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 24px; }
      .pill { display: inline-block; padding: 6px 12px; border-radius: 999px; background: #1e1e1e; border: 1px solid #333; color: #90caf9; font-size: 0.88rem; }
      .pill[aria-current="page"] { background: #90caf9; color: #121212; border-color: #90caf9; font-weight: 600; }
      .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
      .movie-card { background: #1e1e1e; border: 1px solid #2d2d2d; border-radius: 10px; padding: 14px; display: flex; gap: 14px; align-items: flex-start; }
      .movie-card .poster, .movie-card .poster-placeholder { width: 90px; height: 135px; }
      .movie-card-body { flex: 1; min-width: 0; }
      .movie-card-title { margin: 0 0 4px; font-size: 1.05rem; line-height: 1.3; }
      .movie-card-meta { margin: 0 0 6px; font-size: 0.85rem; color: #b0b0b0; }
      .movie-card-ep { margin: 0 0 10px; font-size: 0.85rem; color: #cccccc; }
      .site-footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #2c2c2c; font-size: 0.88rem; color: #9e9e9e; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }
      @media (max-width: 640px) {
        .movie-hero { flex-direction: column; }
        .poster, .poster-placeholder { width: 150px; height: 225px; }
      }
    `;
}

/**
 * Render a static HTML page for a single movie (/movie/<slug>/index.html).
 * @param {object} movieGroup
 * @param {object} [options]
 * @param {string} [options.baseUrl='https://watchthatpod.com']
 * @param {string|Date} [options.generatedAt]
 * @returns {string}
 */
function renderMoviePageHtml(movieGroup, options = {}) {
    const base = normalizeBaseUrl(options.baseUrl);
    const lastUpdated = formatIsoDate(options.generatedAt, new Date().toISOString().slice(0, 10));
    const movie = movieGroup?.movie || {};
    const slug = movieGroup?.slug || getMovieSlug(movie);
    const title = movieGroup?.title || extractMovieTitle(movie) || 'Untitled Movie';
    const releaseYear = movieGroup?.releaseYear || extractReleaseYear(movie);
    const yearSuffix = releaseYear ? ` (${releaseYear})` : '';
    const canonicalUrl = `${base}/movie/${slug}/`;
    const ogImage = `${base}/og-image.jpg`;
    const posterUrl = resolvePosterUrl(movie);

    const streamingOptions = normalizeStreamingOptions(movie.streamingOptions || []);
    const directors = Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [];
    const cast = Array.isArray(movie.cast) ? movie.cast.filter(Boolean) : [];
    const genres = Array.isArray(movie.genres) ? movie.genres.filter(Boolean) : [];
    const episodes = Array.isArray(movieGroup?.episodes) ? movieGroup.episodes : [];

    const serviceNames = [];
    const seenServices = new Set();
    for (const opt of streamingOptions) {
        if (!seenServices.has(opt.serviceName)) {
            seenServices.add(opt.serviceName);
            serviceNames.push(opt.serviceName);
        }
    }

    const pageTitle = `Where to Stream ${title}${yearSuffix} — The Rewatchables | Watch That Pod`;
    const metaDescription = serviceNames.length > 0
        ? `Find where to stream ${title}${yearSuffix} in the US (${serviceNames.slice(0, 4).join(', ')}) and listen to The Rewatchables podcast episode on Watch That Pod.`
        : `Check current US streaming availability for ${title}${yearSuffix} and listen to The Rewatchables podcast episode on Watch That Pod.`;

    // Build JSON-LD @graph
    const movieId = `${canonicalUrl}#movie`;
    const sameAs = [];
    if (movie.imdb_id) {
        sameAs.push(`https://www.imdb.com/title/${movie.imdb_id}/`);
    }
    if (movie.tmdb_id !== undefined && movie.tmdb_id !== null && movie.tmdb_id !== '') {
        sameAs.push(`https://www.themoviedb.org/movie/${movie.tmdb_id}`);
    }

    const movieSchema = {
        '@type': 'Movie',
        '@id': movieId,
        name: title,
        url: canonicalUrl
    };
    if (releaseYear) {
        movieSchema.datePublished = String(releaseYear);
    }
    if (movie.overview) {
        movieSchema.description = movie.overview;
    }
    if (posterUrl) {
        movieSchema.image = posterUrl;
    }
    if (sameAs.length > 0) {
        movieSchema.sameAs = sameAs;
    }
    if (directors.length > 0) {
        movieSchema.director = directors.map((name) => ({ '@type': 'Person', name }));
    }
    if (cast.length > 0) {
        movieSchema.actor = cast.slice(0, 10).map((name) => ({ '@type': 'Person', name }));
    }
    if (streamingOptions.length > 0) {
        movieSchema.potentialAction = streamingOptions.map((opt) => {
            const action = {
                '@type': 'WatchAction',
                name: `Watch on ${opt.serviceName} (${opt.label})`
            };
            if (opt.link) {
                action.target = {
                    '@type': 'EntryPoint',
                    urlTemplate: opt.link
                };
            }
            return action;
        });
    }

    const episodeSchemas = episodes.map((ep, idx) => {
        const epNode = {
            '@type': 'PodcastEpisode',
            '@id': `${canonicalUrl}#episode-${idx + 1}`,
            name: ep.pod_title || title,
            partOfSeries: {
                '@type': 'PodcastSeries',
                name: 'The Rewatchables',
                url: `${base}/`
            },
            about: {
                '@id': movieId
            }
        };
        const airDate = formatIsoDate(ep.pod_date);
        if (airDate) {
            epNode.datePublished = airDate;
        }
        if (ep.pod_desc) {
            epNode.description = ep.pod_desc;
        }
        const safeAudioUrl = sanitizeHttpUrl(ep.pod_link);
        if (safeAudioUrl) {
            epNode.url = safeAudioUrl;
            epNode.associatedMedia = {
                '@type': 'AudioObject',
                contentUrl: safeAudioUrl
            };
        }
        return epNode;
    });

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Watch That Pod',
                        item: `${base}/`
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: title,
                        item: canonicalUrl
                    }
                ]
            },
            movieSchema,
            ...episodeSchemas
        ]
    };

    const posterHtml = posterUrl
        ? `<img class="poster" src="${escapeHtml(posterUrl)}" alt="${escapeHtml(title)} poster" width="180" height="270" loading="lazy">`
        : `<div class="poster-placeholder" aria-hidden="true">${escapeHtml(title)}</div>`;

    const metaParts = [];
    if (releaseYear) {
        metaParts.push(`<span>${escapeHtml(releaseYear)}</span>`);
    }
    if (movie.runtime) {
        metaParts.push(`<span>${escapeHtml(movie.runtime)} min</span>`);
    }
    if (genres.length > 0) {
        metaParts.push(`<span>${escapeHtml(genres.join(', '))}</span>`);
    }
    if (movie.imdb_id) {
        const imdbUrl = `https://www.imdb.com/title/${encodeURIComponent(String(movie.imdb_id))}/`;
        metaParts.push(`<a href="${escapeHtml(imdbUrl)}" target="_blank" rel="noopener noreferrer">IMDb</a>`);
    }

    const directorsHtml = directors.length > 0
        ? `<p class="credits"><strong>Director${directors.length > 1 ? 's' : ''}:</strong> ${directors
            .map((name) => `<a href="/?director=${encodeURIComponent(name)}">${escapeHtml(name)}</a>`)
            .join(', ')}</p>`
        : '';

    const castHtml = cast.length > 0
        ? `<p class="credits"><strong>Cast:</strong> ${cast
            .slice(0, 10)
            .map((name) => `<a href="/?actor=${encodeURIComponent(name)}">${escapeHtml(name)}</a>`)
            .join(', ')}</p>`
        : '';

    const streamingHtml = streamingOptions.length > 0
        ? `<ul class="stream-list">\n${streamingOptions.map((opt) => {
            const hubLink = opt.serviceSlug && opt.serviceSlug !== 'free'
                ? `<a href="/streaming/${escapeHtml(opt.serviceSlug)}/">All ${escapeHtml(opt.serviceName)} movies</a>`
                : '';
            const watchBtn = opt.link
                ? `<a class="btn" href="${escapeHtml(opt.link)}" target="_blank" rel="noopener noreferrer">Watch</a>`
                : '';
            return [
                '          <li class="stream-item">',
                '            <div class="stream-info">',
                `              <span class="service-name">${escapeHtml(opt.serviceName)}</span>`,
                `              <span class="badge ${opt.badgeClass}">${escapeHtml(opt.label)}</span>`,
                '            </div>',
                '            <div class="stream-actions">',
                hubLink ? `              ${hubLink}` : '',
                watchBtn ? `              ${watchBtn}` : '',
                '            </div>',
                '          </li>'
            ].filter(Boolean).join('\n');
        }).join('\n')}\n        </ul>`
        : '<p class="overview">No US streaming options are currently listed for this movie. Check back tomorrow as availability updates daily.</p>';

    const episodesHtml = episodes.length > 0
        ? episodes.map((ep) => {
            const airDate = formatIsoDate(ep.pod_date);
            const safeAudioUrl = sanitizeHttpUrl(ep.pod_link);
            return [
                '        <article class="episode-item">',
                `          <h3 class="episode-title">${escapeHtml(ep.pod_title || title)}</h3>`,
                airDate ? `          <p class="episode-date">Aired ${escapeHtml(airDate)}</p>` : '',
                ep.pod_desc ? `          <p class="episode-desc">${escapeHtml(ep.pod_desc)}</p>` : '',
                safeAudioUrl
                    ? `          <audio controls preload="none" src="${escapeHtml(safeAudioUrl)}">Listen to the episode: <a href="${escapeHtml(safeAudioUrl)}" rel="noopener noreferrer">Download audio</a></audio>`
                    : '',
                '        </article>'
            ].filter(Boolean).join('\n');
        }).join('\n')
        : '<p class="overview">Episode details coming soon.</p>';

    return [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        `  <title>${escapeHtml(pageTitle)}</title>`,
        `  <meta name="description" content="${escapeHtml(metaDescription)}">`,
        `  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
        '  <meta property="og:type" content="video.movie">',
        `  <meta property="og:title" content="${escapeHtml(pageTitle)}">`,
        `  <meta property="og:description" content="${escapeHtml(metaDescription)}">`,
        `  <meta property="og:url" content="${escapeHtml(canonicalUrl)}">`,
        '  <meta property="og:site_name" content="Watch That Pod">',
        `  <meta property="og:image" content="${escapeHtml(ogImage)}">`,
        '  <meta name="twitter:card" content="summary_large_image">',
        `  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">`,
        `  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">`,
        `  <meta name="twitter:image" content="${escapeHtml(ogImage)}">`,
        '  <script type="application/ld+json">',
        safeJsonLdStringify(jsonLd),
        '  </script>',
        '  <style>',
        getSharedStyles(),
        '  </style>',
        '</head>',
        '<body>',
        '  <div class="container">',
        '    <header class="site-header">',
        '      <a class="brand" href="/">Watch That Pod</a>',
        '      <nav aria-label="Quick links"><a href="/">Browse All Movies</a> · <a href="/streaming/free/">Free to Stream</a></nav>',
        '    </header>',
        '    <nav class="breadcrumbs" aria-label="Breadcrumb">',
        '      <ol>',
        '        <li><a href="/">Watch That Pod</a></li>',
        `        <li aria-current="page">${escapeHtml(title)}</li>`,
        '      </ol>',
        '    </nav>',
        '    <main>',
        '      <section class="card movie-hero">',
        `        ${posterHtml}`,
        '        <div class="movie-meta">',
        `          <h1>${escapeHtml(title)}${escapeHtml(yearSuffix)}</h1>`,
        metaParts.length > 0 ? `          <div class="meta-row">${metaParts.join(' · ')}</div>` : '',
        movie.overview ? `          <p class="overview">${escapeHtml(movie.overview)}</p>` : '',
        directorsHtml ? `          ${directorsHtml}` : '',
        castHtml ? `          ${castHtml}` : '',
        '        </div>',
        '      </section>',
        '      <section class="card" aria-labelledby="streaming-heading">',
        '        <h2 class="section-title" id="streaming-heading">Current Streaming Options</h2>',
        `        ${streamingHtml}`,
        '      </section>',
        '      <section class="card" aria-labelledby="episodes-heading">',
        `        <h2 class="section-title" id="episodes-heading">The Rewatchables Episode${episodes.length > 1 ? 's' : ''}</h2>`,
        episodesHtml,
        '      </section>',
        '    </main>',
        '    <footer class="site-footer">',
        `      <span>Updated ${escapeHtml(lastUpdated)} · US streaming availability</span>`,
        '      <span><a href="/">Interactive Guide</a> · <a href="/streaming/free/">Free Movies</a></span>',
        '    </footer>',
        '  </div>',
        '</body>',
        '</html>',
        ''
    ].filter((line) => line !== '').join('\n') + '\n';
}

/**
 * Render a static HTML page for a streaming hub (/streaming/<slug>/index.html).
 * @param {object} hub
 * @param {object} [options]
 * @param {string} [options.baseUrl='https://watchthatpod.com']
 * @param {string|Date} [options.generatedAt]
 * @param {Array<object>} [options.allHubs=[]]
 * @returns {string}
 */
function renderStreamingHubHtml(hub, options = {}) {
    const base = normalizeBaseUrl(options.baseUrl);
    const lastUpdated = formatIsoDate(options.generatedAt, new Date().toISOString().slice(0, 10));
    const slug = hub?.slug || 'free';
    const isFreeHub = Boolean(hub?.isFreeHub || slug === 'free');
    const displayName = hub?.name || (isFreeHub ? 'Free Streaming' : slug);
    const hubPath = hub?.path || `/streaming/${slug}/`;
    const canonicalUrl = `${base}${hubPath}`;
    const ogImage = `${base}/og-image.jpg`;
    const movies = Array.isArray(hub?.movies) ? hub.movies : [];
    const allHubs = Array.isArray(options.allHubs) ? options.allHubs : [];

    const heading = isFreeHub
        ? 'Free Rewatchables Movies to Stream Right Now'
        : `The Rewatchables Movies Streaming on ${displayName}`;
    const pageTitle = `${heading} | Watch That Pod`;
    const movieWord = movies.length === 1 ? 'movie' : 'movies';
    const metaDescription = isFreeHub
        ? `Browse ${movies.length} ${movieWord} featured on The Rewatchables podcast that you can stream for free in the US right now. Updated ${lastUpdated}.`
        : `Browse ${movies.length} ${movieWord} featured on The Rewatchables podcast currently available on ${displayName} in the US. Updated ${lastUpdated}.`;

    // Build top hub navigation pills
    const topHubs = allHubs.slice(0, TOP_HUB_PILL_LIMIT);
    const hasCurrentInTop = topHubs.some((h) => h.slug === slug);
    const navHubs = hasCurrentInTop ? topHubs : [...topHubs, hub];

    const pillsHtml = navHubs.length > 0
        ? `<nav class="hub-pills" aria-label="Streaming services">\n${navHubs.map((h) => {
            const label = h.isFreeHub ? 'Free' : h.name;
            const currentAttr = h.slug === slug ? ' aria-current="page"' : '';
            const countText = typeof h.count === 'number' ? ` (${h.count})` : '';
            return `      <a class="pill" href="${escapeHtml(h.path)}"${currentAttr}>${escapeHtml(label)}${escapeHtml(countText)}</a>`;
        }).join('\n')}\n    </nav>`
        : '';

    const itemListId = `${canonicalUrl}#movies`;
    const itemListElement = movies.map((group, index) => {
        const movie = group.movie || {};
        const movieUrl = `${base}${group.path}`;
        const directors = Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [];
        const sameAs = [];
        if (movie.imdb_id) {
            sameAs.push(`https://www.imdb.com/title/${movie.imdb_id}/`);
        }
        if (movie.tmdb_id !== undefined && movie.tmdb_id !== null && movie.tmdb_id !== '') {
            sameAs.push(`https://www.themoviedb.org/movie/${movie.tmdb_id}`);
        }
        const movieNode = {
            '@type': 'Movie',
            name: group.title,
            url: movieUrl
        };
        if (group.releaseYear) {
            movieNode.datePublished = String(group.releaseYear);
        }
        if (directors.length > 0) {
            movieNode.director = directors.map((name) => ({ '@type': 'Person', name }));
        }
        if (sameAs.length > 0) {
            movieNode.sameAs = sameAs;
        }
        return {
            '@type': 'ListItem',
            position: index + 1,
            item: movieNode
        };
    });

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Watch That Pod',
                        item: `${base}/`
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: displayName,
                        item: canonicalUrl
                    }
                ]
            },
            {
                '@type': 'CollectionPage',
                '@id': `${canonicalUrl}#page`,
                name: heading,
                description: metaDescription,
                url: canonicalUrl,
                dateModified: lastUpdated,
                mainEntity: {
                    '@id': itemListId
                }
            },
            {
                '@type': 'ItemList',
                '@id': itemListId,
                name: heading,
                numberOfItems: itemListElement.length,
                itemListElement
            }
        ]
    };

    const movieCardsHtml = movies.length > 0
        ? `<div class="movie-grid">\n${movies.map((group) => {
            const movie = group.movie || {};
            const posterUrl = resolvePosterUrl(movie);
            const posterMarkup = posterUrl
                ? `<img class="poster" src="${escapeHtml(posterUrl)}" alt="${escapeHtml(group.title)} poster" width="180" height="270" loading="lazy">`
                : `<div class="poster-placeholder" aria-hidden="true">${escapeHtml(group.title)}</div>`;
            const directors = Array.isArray(movie.directors) ? movie.directors.filter(Boolean) : [];
            const metaBits = [];
            if (group.releaseYear) metaBits.push(group.releaseYear);
            if (directors.length > 0) metaBits.push(directors.join(', '));

            const latestEp = Array.isArray(group.episodes) && group.episodes[0] ? group.episodes[0] : null;
            const matched = Array.isArray(group.matchedOptions) ? group.matchedOptions : [];
            const primaryOption = matched.find((opt) => opt.link) || matched[0] || null;
            const watchText = primaryOption
                ? (isFreeHub ? `Watch Free on ${primaryOption.serviceName}` : `Watch (${primaryOption.label})`)
                : '';

            return [
                '      <article class="movie-card">',
                `        <a href="${escapeHtml(group.path)}">${posterMarkup}</a>`,
                '        <div class="movie-card-body">',
                `          <h2 class="movie-card-title"><a href="${escapeHtml(group.path)}">${escapeHtml(group.title)}</a></h2>`,
                metaBits.length > 0 ? `          <p class="movie-card-meta">${escapeHtml(metaBits.join(' · '))}</p>` : '',
                latestEp?.pod_title ? `          <p class="movie-card-ep">${escapeHtml(latestEp.pod_title)}</p>` : '',
                primaryOption?.link
                    ? `          <a class="btn" href="${escapeHtml(primaryOption.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(watchText)}</a>`
                    : '',
                '        </div>',
                '      </article>'
            ].filter(Boolean).join('\n');
        }).join('\n')}\n    </div>`
        : '<div class="card"><p class="overview">No movies are currently listed for this streaming hub.</p></div>';

    return [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '  <meta charset="UTF-8">',
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        `  <title>${escapeHtml(pageTitle)}</title>`,
        `  <meta name="description" content="${escapeHtml(metaDescription)}">`,
        `  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">`,
        '  <meta property="og:type" content="website">',
        `  <meta property="og:title" content="${escapeHtml(pageTitle)}">`,
        `  <meta property="og:description" content="${escapeHtml(metaDescription)}">`,
        `  <meta property="og:url" content="${escapeHtml(canonicalUrl)}">`,
        '  <meta property="og:site_name" content="Watch That Pod">',
        `  <meta property="og:image" content="${escapeHtml(ogImage)}">`,
        '  <meta name="twitter:card" content="summary_large_image">',
        `  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">`,
        `  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">`,
        `  <meta name="twitter:image" content="${escapeHtml(ogImage)}">`,
        '  <script type="application/ld+json">',
        safeJsonLdStringify(jsonLd),
        '  </script>',
        '  <style>',
        getSharedStyles(),
        '  </style>',
        '</head>',
        '<body>',
        '  <div class="container">',
        '    <header class="site-header">',
        '      <a class="brand" href="/">Watch That Pod</a>',
        '      <nav aria-label="Quick links"><a href="/">Browse All Movies</a> · <a href="/streaming/free/">Free to Stream</a></nav>',
        '    </header>',
        '    <nav class="breadcrumbs" aria-label="Breadcrumb">',
        '      <ol>',
        '        <li><a href="/">Watch That Pod</a></li>',
        `        <li aria-current="page">${escapeHtml(displayName)}</li>`,
        '      </ol>',
        '    </nav>',
        '    <main>',
        '      <section class="hub-header">',
        `        <h1>${escapeHtml(heading)}</h1>`,
        `        <p class="hub-subtitle">${movies.length} ${movieWord} · Updated ${escapeHtml(lastUpdated)}</p>`,
        '      </section>',
        pillsHtml ? `      ${pillsHtml}` : '',
        `      ${movieCardsHtml}`,
        '    </main>',
        '    <footer class="site-footer">',
        `      <span>Updated ${escapeHtml(lastUpdated)} · US streaming availability</span>`,
        '      <span><a href="/">Interactive Guide</a> · <a href="/sitemap.xml">Sitemap</a></span>',
        '    </footer>',
        '  </div>',
        '</body>',
        '</html>',
        ''
    ].filter((line) => line !== '').join('\n') + '\n';
}

/**
 * Generate all static movie pages and streaming hub pages for S3 upload.
 * @param {Array} podcasts
 * @param {string|Date} generatedAt
 * @param {object} [options]
 * @param {string} [options.baseUrl='https://watchthatpod.com']
 * @returns {{ pages: Array<object>, movieGroups: Array<object>, hubs: Array<object>, paths: Array<string> }}
 */
function generateStaticPages(podcasts, generatedAt, options = {}) {
    const baseUrl = normalizeBaseUrl(options?.baseUrl);
    const movieGroups = groupPodcastsByMovie(podcasts);
    const hubs = groupMoviesByService(movieGroups);

    const pages = [];
    const paths = [];

    for (const hub of hubs) {
        const html = renderStreamingHubHtml(hub, {
            baseUrl,
            generatedAt,
            allHubs: hubs
        });
        pages.push({
            key: `streaming/${hub.slug}/index.html`,
            path: hub.path,
            type: 'streaming',
            slug: hub.slug,
            html
        });
        paths.push(hub.path);
    }

    for (const group of movieGroups) {
        const html = renderMoviePageHtml(group, {
            baseUrl,
            generatedAt
        });
        pages.push({
            key: `movie/${group.slug}/index.html`,
            path: group.path,
            type: 'movie',
            slug: group.slug,
            html
        });
        paths.push(group.path);
    }

    return {
        pages,
        movieGroups,
        hubs,
        paths
    };
}

module.exports = {
    slugify,
    getMovieSlug,
    getServiceSlug,
    groupPodcastsByMovie,
    groupMoviesByService,
    renderMoviePageHtml,
    renderStreamingHubHtml,
    generateStaticPages
};
