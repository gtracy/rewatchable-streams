const HEX_COLOR_REGEX = /^#[0-9a-fA-F]{3,8}$/;
const IMDB_ID_REGEX = /^tt\d+$/;

/**
 * Validates that a URL uses http: or https: protocol.
 * Returns the normalized URL string, or null if invalid or unsafe.
 */
export const sanitizeHttpUrl = (url) => {
  if (typeof url !== 'string') {
    return null;
  }

  const trimmed = url.trim();
  if (!trimmed) {
    return null;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.href;
    }
    return null;
  } catch {
    return null;
  }
};

/**
 * Validates a hex color string against /^#[0-9a-fA-F]{3,8}$/.
 * Returns the color if valid, otherwise returns the fallback color.
 */
export const sanitizeHexColor = (color, fallback = '#444') => {
  if (typeof color === 'string' && HEX_COLOR_REGEX.test(color)) {
    return color;
  }
  return fallback;
};

/**
 * Validates an IMDb title ID against /^tt\d+$/.
 * Returns the ID if valid, or null otherwise.
 */
export const sanitizeImdbId = (imdbId) => {
  if (typeof imdbId === 'string' && IMDB_ID_REGEX.test(imdbId)) {
    return imdbId;
  }
  return null;
};
