import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import EpisodeDetail from './EpisodeDetail';
import StreamingOptions from './StreamingOptions'; // Import for direct rendering if needed for specific tests

// Mock global fetch
global.fetch = jest.fn();

const mockEpisodesData = [
  {
    id: 1,
    episodeTitle: 'Detail Episode 1',
    movieTitle: 'Detail Movie 1',
    releaseDate: '2023-01-01',
    streamingOptions: [{ service: 'Netflix', link: 'http://netflix.com/detail1' }],
  },
  {
    id: 2,
    episodeTitle: 'Detail Episode 2',
    movieTitle: 'Detail Movie 2',
    releaseDate: '2023-02-01',
    streamingOptions: [{ service: 'Hulu', link: 'http://hulu.com/detail2' }],
  },
];

// Helper function to render with router context
const renderWithRouter = (ui, { route = '/', initialEntries = ['/'] } = {}) => {
  window.history.pushState({}, 'Test page', initialEntries[0]); // Set initial URL for useParams
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </MemoryRouter>
  );
};


describe('EpisodeDetail Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders loading state initially', () => {
    fetch.mockImplementationOnce(() => new Promise(() => {})); // Pending promise

    renderWithRouter(<EpisodeDetail />, { route: '/episode/:episodeId', initialEntries: ['/episode/1'] });
    expect(screen.getByText(/Loading episode details.../i)).toBeInTheDocument();
  });

  test('renders episode details after successful fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockEpisodesData,
    });

    renderWithRouter(<EpisodeDetail />, { route: '/episode/:episodeId', initialEntries: ['/episode/1'] });

    await waitFor(() => {
      expect(screen.getByText('Detail Episode 1')).toBeInTheDocument();
    });
    // Adjusted to be more flexible with text matching for elements containing "Movie: Detail Movie 1"
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Movie: Detail Movie 1";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Release Date: 2023-01-01";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(child => !hasText(child));
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
    // Check for streaming options rendered by StreamingOptions component
    expect(screen.getByText(/Streaming Options:/i)).toBeInTheDocument();
    expect(screen.getByText('Netflix:')).toBeInTheDocument();
    expect(screen.getByText('http://netflix.com/detail1')).toBeInTheDocument();
  });

  test('renders "not found" message for invalid episode ID', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockEpisodesData,
    });

    renderWithRouter(<EpisodeDetail />, { route: '/episode/:episodeId', initialEntries: ['/episode/999'] });

    await waitFor(() => {
      expect(screen.getByText(/Episode not found/i)).toBeInTheDocument();
    });
  });

  test('renders error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch details'));

    renderWithRouter(<EpisodeDetail />, { route: '/episode/:episodeId', initialEntries: ['/episode/1'] });

    await waitFor(() => {
      expect(screen.getByText(/Error: Failed to fetch details/i)).toBeInTheDocument();
    });
  });
});
