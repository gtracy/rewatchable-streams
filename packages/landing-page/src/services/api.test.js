import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as api from './api';
import { fetchData, isValidSignedUrl } from './api';

describe('api service', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('does not export unused fetchDataFromAPI helper', () => {
    expect(api.fetchDataFromAPI).toBeUndefined();
  });

  describe('isValidSignedUrl', () => {
    it('accepts valid HTTPS S3 virtual-hosted and path-style rewatchables URLs', () => {
      expect(
        isValidSignedUrl('https://rewatchables.s3.us-east-2.amazonaws.com/podcasts.json?X-Amz-Signature=abc')
      ).toBe(true);
      expect(
        isValidSignedUrl('https://rewatchables.s3.amazonaws.com/podcasts.json')
      ).toBe(true);
      expect(
        isValidSignedUrl('https://rewatchables.s3-us-east-2.amazonaws.com/podcasts.json')
      ).toBe(true);
      expect(
        isValidSignedUrl('https://s3.us-east-2.amazonaws.com/rewatchables/podcasts.json?sig=123')
      ).toBe(true);
    });

    it('rejects non-HTTPS protocols, untrusted hosts, spoofed subdomains, and path traversal', () => {
      expect(
        isValidSignedUrl('http://rewatchables.s3.us-east-2.amazonaws.com/podcasts.json')
      ).toBe(false);
      expect(
        isValidSignedUrl('javascript:alert(1)')
      ).toBe(false);
      expect(
        isValidSignedUrl('https://evil.example.com/podcasts.json')
      ).toBe(false);
      expect(
        isValidSignedUrl('https://rewatchables.s3.us-east-2.amazonaws.com.evil.com/podcasts.json')
      ).toBe(false);
      expect(
        isValidSignedUrl('https://other-bucket.s3.us-east-2.amazonaws.com/podcasts.json')
      ).toBe(false);
      expect(
        isValidSignedUrl('https://s3.us-east-2.amazonaws.com/other-bucket/podcasts.json')
      ).toBe(false);
      expect(
        isValidSignedUrl('https://s3.us-east-2.amazonaws.com/rewatchables/../other-bucket/podcasts.json')
      ).toBe(false);
      expect(isValidSignedUrl('')).toBe(false);
      expect(isValidSignedUrl(null)).toBe(false);
    });
  });

  describe('fetchData', () => {
    it('fetches signed URL and then returns podcast data', async () => {
      const samplePodcasts = [
        { pod_title: 'Heat', pod_date: '2023-05-01', movie: { movie_title: 'Heat' } },
      ];
      const validSignedUrl =
        'https://rewatchables.s3.us-east-2.amazonaws.com/podcasts.json?sig=abc';

      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            success: true,
            url: validSignedUrl,
          }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ podcasts: samplePodcasts }),
        });

      const result = await fetchData();

      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(global.fetch).toHaveBeenNthCalledWith(
        1,
        'https://lyv84who21.execute-api.us-east-2.amazonaws.com/prod/'
      );
      expect(global.fetch).toHaveBeenNthCalledWith(2, validSignedUrl);
      expect(result).toEqual({
        data: samplePodcasts,
        generatedAt: null,
        totalPodcasts: 1,
        success: true,
      });
    });

    it('returns generatedAt and totalPodcasts when provided in the payload', async () => {
      const samplePodcasts = [
        { pod_title: 'Heat', pod_date: '2023-05-01', movie: { movie_title: 'Heat' } },
      ];

      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            success: true,
            url: 'https://rewatchables.s3.us-east-2.amazonaws.com/podcasts.json?sig=abc',
          }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            podcasts: samplePodcasts,
            generated_at: '2026-11-23T12:00:00Z',
            total_podcasts: 427,
          }),
        });

      const result = await fetchData();

      expect(result).toEqual({
        data: samplePodcasts,
        generatedAt: '2026-11-23T12:00:00Z',
        totalPodcasts: 427,
        success: true,
      });
    });

    it('accepts path-style s3.us-east-2.amazonaws.com/rewatchables/ signed URLs', async () => {
      const pathStyleUrl =
        'https://s3.us-east-2.amazonaws.com/rewatchables/podcasts.json?sig=abc';

      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true, url: pathStyleUrl }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ podcasts: [] }),
        });

      const result = await fetchData();
      expect(global.fetch).toHaveBeenCalledTimes(2);
      expect(global.fetch).toHaveBeenNthCalledWith(2, pathStyleUrl);
      expect(result).toEqual({
        data: [],
        generatedAt: null,
        totalPodcasts: 0,
        success: true,
      });
    });

    it('defaults to an empty array when podcasts key is missing', async () => {
      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            success: true,
            url: 'https://rewatchables.s3.amazonaws.com/empty.json',
          }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({}),
        });

      const result = await fetchData();
      expect(result).toEqual({ data: [], generatedAt: null, totalPodcasts: 0, success: true });
    });

    it('throws wrapped error and refuses to fetch when signedUrlData.url has an untrusted host', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          url: 'https://evil.example.com/podcasts.json',
        }),
      });

      await expect(fetchData()).rejects.toThrow('API Error: Invalid signed URL host');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('throws wrapped error when signedUrlData.url uses http instead of https', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          url: 'http://rewatchables.s3.us-east-2.amazonaws.com/podcasts.json',
        }),
      });

      await expect(fetchData()).rejects.toThrow('API Error: Invalid signed URL host');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('throws wrapped error when signed URL endpoint returns non-OK status', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      await expect(fetchData()).rejects.toThrow('API Error: Failed to get signed URL: 500');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('throws wrapped error when signed URL payload has success=false', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: false }),
      });

      await expect(fetchData()).rejects.toThrow('API Error: Failed to get signed URL from API');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('throws wrapped error when data fetch from signed URL returns non-OK status', async () => {
      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            success: true,
            url: 'https://rewatchables.s3.us-east-2.amazonaws.com/expired.json',
          }),
        })
        .mockResolvedValueOnce({
          ok: false,
          status: 403,
        });

      await expect(fetchData()).rejects.toThrow('API Error: Failed to fetch data: 403');
    });

    it('throws wrapped error on network failure', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Network down'));

      await expect(fetchData()).rejects.toThrow('API Error: Network down');
    });

    it('fetches directly from VITE_DATA_URL when set, skipping the signed URL endpoint', async () => {
      vi.stubEnv('VITE_DATA_URL', '/local-data.json');
      const localPodcasts = [
        { pod_title: 'Jaws', pod_date: '2024-07-04', movie: { movie_title: 'Jaws' } },
      ];

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ podcasts: localPodcasts }),
      });

      const result = await fetchData();

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('/local-data.json');
      expect(result).toEqual({
        data: localPodcasts,
        generatedAt: null,
        totalPodcasts: 1,
        success: true,
      });
    });
  });
});
