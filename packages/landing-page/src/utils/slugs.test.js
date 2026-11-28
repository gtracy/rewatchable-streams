import { describe, it, expect } from 'vitest';
import {
  slugify,
  getMovieSlug,
  getMoviePath,
  getServiceSlug,
  getServicePath,
} from './slugs';

describe('slugs utilities', () => {
  describe('slugify', () => {
    it('normalizes basic titles and whitespace', () => {
      expect(slugify('Heat')).toBe('heat');
      expect(slugify('  The Godfather: Part II  ')).toBe('the-godfather-part-ii');
    });

    it('strips diacritics and accents', () => {
      expect(slugify('Amélie')).toBe('amelie');
      expect(slugify('WALL·E & Crème Brûlée')).toBe('wall-e-and-creme-brulee');
    });

    it('handles apostrophes, curly quotes, and backticks without splitting words', () => {
      expect(slugify("Ocean's Eleven")).toBe('oceans-eleven');
      expect(slugify('Schindler’s List')).toBe('schindlers-list');
      expect(slugify('Don`t Look Up')).toBe('dont-look-up');
    });

    it('converts + to plus and & to and', () => {
      expect(slugify('Paramount+')).toBe('paramount-plus');
      expect(slugify('Apple TV+')).toBe('apple-tv-plus');
      expect(slugify('Disney+')).toBe('disney-plus');
      expect(slugify('Thelma & Louise')).toBe('thelma-and-louise');
      expect(slugify('Dungeons & Dragons')).toBe('dungeons-and-dragons');
    });

    it('returns empty string for nullish or punctuation-only values', () => {
      expect(slugify(null)).toBe('');
      expect(slugify(undefined)).toBe('');
      expect(slugify('   ')).toBe('');
      expect(slugify('!!!')).toBe('');
    });
  });

  describe('getMovieSlug & getMoviePath', () => {
    it('builds slug from movie_title and releaseYear', () => {
      const movie = { movie_title: 'Heat', releaseYear: 1995 };
      expect(getMovieSlug(movie)).toBe('heat-1995');
      expect(getMoviePath(movie)).toBe('/movie/heat-1995/');
    });

    it('supports title and ISO release_date fields', () => {
      const movie = { title: "Ocean's Eleven", release_date: '2001-12-07' };
      expect(getMovieSlug(movie)).toBe('oceans-eleven-2001');
      expect(getMoviePath(movie)).toBe('/movie/oceans-eleven-2001/');
    });

    it('prefers title over movie_title and releaseYear over release_date', () => {
      const movie = {
        title: 'Se7en',
        movie_title: 'Seven',
        releaseYear: 1995,
        release_date: '1996-01-01',
      };
      expect(getMovieSlug(movie)).toBe('se7en-1995');
    });

    it('omits year when releaseYear and release_date are missing or invalid', () => {
      expect(getMovieSlug({ movie_title: 'Goodfellas' })).toBe('goodfellas');
      expect(getMovieSlug({ movie_title: 'Goodfellas', releaseYear: 'Unknown' })).toBe('goodfellas');
      expect(getMoviePath({ movie_title: 'Goodfellas' })).toBe('/movie/goodfellas/');
    });

    it('falls back to tmdb_id or unknown when title slug is empty', () => {
      expect(getMovieSlug({ movie_title: '', tmdb_id: 949 })).toBe('movie-949');
      expect(getMoviePath({ movie_title: '???', tmdb_id: 949 })).toBe('/movie/movie-949/');
      expect(getMovieSlug({})).toBe('movie-unknown');
      expect(getMovieSlug(null)).toBe('movie-unknown');
      expect(getMoviePath(undefined)).toBe('/movie/movie-unknown/');
    });
  });

  describe('getServiceSlug & getServicePath', () => {
    it('generates canonical streaming hub slugs and paths', () => {
      expect(getServiceSlug('Free')).toBe('free');
      expect(getServicePath('Free')).toBe('/streaming/free/');
      expect(getServiceSlug('Netflix')).toBe('netflix');
      expect(getServicePath('Netflix')).toBe('/streaming/netflix/');
      expect(getServiceSlug('Paramount+')).toBe('paramount-plus');
      expect(getServicePath('Paramount+')).toBe('/streaming/paramount-plus/');
      expect(getServiceSlug('Apple TV+')).toBe('apple-tv-plus');
      expect(getServicePath('Apple TV+')).toBe('/streaming/apple-tv-plus/');
      expect(getServiceSlug('Prime Video')).toBe('prime-video');
      expect(getServicePath('Prime Video')).toBe('/streaming/prime-video/');
      expect(getServiceSlug('Pluto TV')).toBe('pluto-tv');
      expect(getServicePath('Pluto TV')).toBe('/streaming/pluto-tv/');
    });
  });
});
