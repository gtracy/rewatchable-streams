import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EpisodeList from './EpisodeList';

// Mock global fetch
global.fetch = jest.fn();

const mockEpisodes = [
  { id: 1, episodeTitle: 'Episode 1 Title', movieTitle: 'Movie 1 Title' },
  { id: 2, episodeTitle: 'Episode 2 Title', movieTitle: 'Movie 2 Title' },
];

describe('EpisodeList Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders loading state initially', () => {
    fetch.mockImplementationOnce(() => new Promise(() => {})); // Pending promise

    render(
      <MemoryRouter>
        <EpisodeList />
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading episodes.../i)).toBeInTheDocument();
  });

  test('renders episodes after successful fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockEpisodes,
    });

    render(
      <MemoryRouter>
        <EpisodeList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Episode 1 Title')).toBeInTheDocument();
    });
    // Adjusted to be more flexible with text matching
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Movie: Movie 1 Title";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
    expect(screen.getByText('Episode 2 Title')).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Movie: Movie 2 Title";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
  });

  test('renders error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(
      <MemoryRouter>
        <EpisodeList />
      </MemoryRouter>
    );

    await waitFor(() => {
      // The component currently shows a generic error message based on the error.message
      // If the component were to display "Error loading episodes: Network error"
      // we could check for that. For now, checking for "Error loading episodes"
      // and the specific error from the mock should be sufficient.
      expect(screen.getByText(/Error loading episodes: Network error/i)).toBeInTheDocument();
    });
  });

  test('renders "no episodes" message when data is empty', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(
      <MemoryRouter>
        <EpisodeList />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/No episodes found/i)).toBeInTheDocument();
    });
  });
});
