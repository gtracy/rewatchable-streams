import { describe, it, expect } from 'vitest';
import { sanitizeHttpUrl, sanitizeHexColor, sanitizeImdbId } from './sanitize';

describe('sanitize utilities', () => {
  describe('sanitizeHttpUrl', () => {
    it('allows valid http and https URLs', () => {
      expect(sanitizeHttpUrl('https://example.com/path?q=1')).toBe('https://example.com/path?q=1');
      expect(sanitizeHttpUrl('http://example.com/audio.mp3')).toBe('http://example.com/audio.mp3');
      expect(sanitizeHttpUrl('  https://netflix.com/watch/123  ')).toBe('https://netflix.com/watch/123');
    });

    it('rejects javascript:, data:, vbscript:, file:, and malformed URLs', () => {
      expect(sanitizeHttpUrl('javascript:alert(1)')).toBeNull();
      expect(sanitizeHttpUrl('JAVASCRIPT:alert(document.cookie)')).toBeNull();
      expect(sanitizeHttpUrl('data:text/html,<script>alert(1)</script>')).toBeNull();
      expect(sanitizeHttpUrl('data:image/svg+xml,<svg onload=alert(1)>')).toBeNull();
      expect(sanitizeHttpUrl('vbscript:msgbox(1)')).toBeNull();
      expect(sanitizeHttpUrl('file:///etc/passwd')).toBeNull();
      expect(sanitizeHttpUrl('/relative/path')).toBeNull();
      expect(sanitizeHttpUrl('not a url')).toBeNull();
      expect(sanitizeHttpUrl('')).toBeNull();
      expect(sanitizeHttpUrl(null)).toBeNull();
      expect(sanitizeHttpUrl(undefined)).toBeNull();
      expect(sanitizeHttpUrl(12345)).toBeNull();
    });
  });

  describe('sanitizeHexColor', () => {
    it('allows valid 3 to 8 digit hex colors', () => {
      expect(sanitizeHexColor('#fff')).toBe('#fff');
      expect(sanitizeHexColor('#e50914')).toBe('#e50914');
      expect(sanitizeHexColor('#AABBCCDD')).toBe('#AABBCCDD');
    });

    it('falls back to #444 for CSS injection payloads and invalid values', () => {
      expect(sanitizeHexColor('red; background: url(https://evil.com/x)')).toBe('#444');
      expect(sanitizeHexColor('#fff; expression(alert(1))')).toBe('#444');
      expect(sanitizeHexColor('#12')).toBe('#444');
      expect(sanitizeHexColor('#123456789')).toBe('#444');
      expect(sanitizeHexColor('#gggggg')).toBe('#444');
      expect(sanitizeHexColor('rgb(255, 0, 0)')).toBe('#444');
      expect(sanitizeHexColor(null)).toBe('#444');
      expect(sanitizeHexColor(undefined, '#000')).toBe('#000');
    });
  });

  describe('sanitizeImdbId', () => {
    it('allows valid IMDb title IDs', () => {
      expect(sanitizeImdbId('tt0113277')).toBe('tt0113277');
      expect(sanitizeImdbId('tt12345678')).toBe('tt12345678');
    });

    it('rejects path traversal, query injection, and non-matching IDs', () => {
      expect(sanitizeImdbId('tt0113277/../../evil')).toBeNull();
      expect(sanitizeImdbId('../name/nm0000199')).toBeNull();
      expect(sanitizeImdbId('tt0113277?foo=bar')).toBeNull();
      expect(sanitizeImdbId('nm0000199')).toBeNull();
      expect(sanitizeImdbId('tt')).toBeNull();
      expect(sanitizeImdbId('')).toBeNull();
      expect(sanitizeImdbId(null)).toBeNull();
    });
  });
});
