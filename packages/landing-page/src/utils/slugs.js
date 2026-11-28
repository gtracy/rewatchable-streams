export function slugify(value) {
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

export function getMovieSlug(movie) {
  const titleSlug = slugify(movie?.title || movie?.movie_title);
  if (!titleSlug) {
    return `movie-${movie?.tmdb_id || 'unknown'}`;
  }

  const rawYear = movie?.releaseYear ?? movie?.release_date;
  const yearMatch = String(rawYear ?? '').match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : '';

  return year ? `${titleSlug}-${year}` : titleSlug;
}

export function getMoviePath(movie) {
  return `/movie/${getMovieSlug(movie)}/`;
}

export function getServiceSlug(serviceName) {
  return slugify(serviceName);
}

export function getServicePath(serviceName) {
  return `/streaming/${getServiceSlug(serviceName)}/`;
}
