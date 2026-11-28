import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchData, fetchDataFromAPI } from './api';

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

  describe('fetchData', () => {
    it('fetches signed URL and then returns podcast data', async () => {
      const samplePodcasts = [
        { pod_title: 'Heat', pod_date: '2023-05-01', movie: { movie_title: 'Heat' } },
      ];

      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            success: true,
            url: 'https://s3.example.com/podcasts.json?sig=abc',
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
      expect(global.fetch).toHaveBeenNthCalledWith(
        2,
        'https://s3.example.com/podcasts.json?sig=abc'
      );
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
            url: 'https://s3.example.com/podcasts.json?sig=abc',
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

    it('defaults to an empty array when podcasts key is missing', async () => {
      global.fetch
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ success: true, url: 'https://s3.example.com/empty.json' }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({}),
        });

      const result = await fetchData();
      expect(result).toEqual({ data: [], generatedAt: null, totalPodcasts: 0, success: true });
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
          json: async () => ({ success: true, url: 'https://s3.example.com/expired.json' }),
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

  describe('fetchDataFromAPI', () => {
    it('fetches JSON from the given endpoint and wraps response', async () => {
      const payload = { items: [1, 2, 3] };
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => payload,
      });

      const result = await fetchDataFromAPI('https://api.example.com/items');

      expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/items');
      expect(result).toEqual({ data: payload, success: true });
    });

    it('throws wrapped error on non-OK HTTP status', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      await expect(fetchDataFromAPI('https://api.example.com/missing')).rejects.toThrow(
        'API Error: HTTP error! status: 404'
      );
    });

    it('throws wrapped error on network rejection', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Connection refused'));

      await expect(fetchDataFromAPI('https://api.example.com/fail')).rejects.toThrow(
        'API Error: Connection refused'
      );
    });
  });
});
