import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as api from './services/api';
import * as analytics from './utils/analytics';

describe('App', () => {
  beforeEach(() => {
    vi.spyOn(analytics, 'setupGAOptOut').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches data, initializes GA opt-out, and renders Header, DataTable, and Footer', async () => {
    vi.spyOn(api, 'fetchData').mockResolvedValueOnce({
      success: true,
      data: [
        {
          pod_title: "'Jaws' Rewatchable",
          pod_date: '2024-06-01T12:00:00Z',
          pod_link: 'https://cdn.example.com/jaws.mp3',
          movie: {
            movie_title: 'Jaws',
            releaseYear: 1975,
            directors: ['Steven Spielberg'],
            cast: ['Roy Scheider'],
            streamingOptions: [],
          },
        },
      ],
    });

    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /watch that pod/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /The Ringer/i })).toBeInTheDocument();
    expect(analytics.setupGAOptOut).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Jaws')).toBeInTheDocument();
    });
    expect(screen.getByText('Steven Spielberg')).toBeInTheDocument();
  });

  it('renders error state when fetchData fails', async () => {
    vi.spyOn(api, 'fetchData').mockRejectedValueOnce(new Error('API Error: Service unavailable'));

    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText('Error loading data: API Error: Service unavailable')
      ).toBeInTheDocument();
    });
  });
});
