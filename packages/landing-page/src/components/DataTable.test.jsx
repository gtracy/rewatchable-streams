import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DataTable from './DataTable';
import * as analytics from '../utils/analytics';

const sampleData = [
  {
    pod_title: "'Heat' With Bill Simmons",
    pod_date: '2023-05-15T12:00:00Z',
    pod_link: 'https://cdn.example.com/heat.mp3',
    pod_desc: 'Action classic episode.',
    movie: {
      movie_title: 'Heat',
      imdb_id: 'tt0113277',
      releaseYear: 1995,
      imageSet: 'https://img.example.com/heat.jpg',
      directors: ['Michael Mann'],
      cast: ['Al Pacino', 'Robert De Niro'],
      streamingOptions: [
        {
          serviceName: 'Netflix',
          type: 'subscription',
          link: 'https://netflix.com/watch/heat',
          serviceImageSet: { darkThemeImage: 'https://img.example.com/netflix.svg' },
          serviceThemeColorCode: '#e50914',
        },
        {
          serviceName: 'Prime Video',
          type: 'rent',
          price: { amount: '3.99' },
          link: 'https://amazon.com/watch/heat',
        },
      ],
    },
  },
  {
    pod_title: "'Goodfellas' Rewatchable",
    pod_date: '2024-02-20T12:00:00Z',
    pod_link: 'https://cdn.example.com/goodfellas.mp3',
    pod_desc: 'Scorsese masterpiece.',
    movie: {
      movie_title: 'Goodfellas',
      releaseYear: 1990,
      directors: ['Martin Scorsese'],
      cast: ['Ray Liotta', 'Joe Pesci'],
      streamingOptions: [
        {
          serviceName: 'Tubi',
          type: 'free',
          link: 'https://tubi.tv/goodfellas',
        },
        {
          serviceName: 'Max',
          type: 'addon',
          link: 'https://max.com/goodfellas',
        },
      ],
    },
  },
];

describe('DataTable', () => {
  beforeEach(() => {
    vi.spyOn(analytics, 'trackPodcastPlay').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackDirectorClick').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackActorClick').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackStreamingClick').mockImplementation(() => {});
    vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders rows from sample data including posters, IMDB links, streaming options, directors, and actors', () => {
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    // Movie titles & IMDB link vs plain text fallback
    const heatLink = screen.getByRole('link', { name: 'Heat' });
    expect(heatLink).toHaveAttribute('href', 'https://www.imdb.com/title/tt0113277/');
    expect(screen.getByText('Goodfellas')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Goodfellas' })).not.toBeInTheDocument();

    // Poster image and "No Image" fallback
    expect(screen.getByAltText(/Heat poster/i)).toHaveAttribute(
      'src',
      'https://img.example.com/heat.jpg'
    );
    expect(screen.getByText('No Image')).toBeInTheDocument();

    // Movie years
    expect(screen.getByText('movie year: 1995')).toBeInTheDocument();
    expect(screen.getByText('movie year: 1990')).toBeInTheDocument();

    // Streaming cost labels
    expect(screen.getByText('Subscription')).toBeInTheDocument();
    expect(screen.getByText('$3.99')).toBeInTheDocument();
    expect(screen.getByText('Free!')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();

    // Directors and actors
    expect(screen.getByText('Michael Mann')).toBeInTheDocument();
    expect(screen.getByText('Martin Scorsese')).toBeInTheDocument();
    expect(screen.getByText(/Al Pacino/)).toBeInTheDocument();
    expect(screen.getByText(/Ray Liotta/)).toBeInTheDocument();
  });

  it('sorts by pod_date descending by default (newest first) and toggles order on header click', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    const getBodyRows = () => {
      const tbody = document.querySelector('tbody');
      return within(tbody).getAllByRole('row');
    };

    // Default: 2024 Goodfellas before 2023 Heat
    let rows = getBodyRows();
    expect(rows[0]).toHaveTextContent('Goodfellas');
    expect(rows[1]).toHaveTextContent('Heat');

    // Click Podcast Date sort label to reverse sort
    const sortHeader = screen.getByText('Podcast Date');
    await user.click(sortHeader);

    rows = getBodyRows();
    expect(rows[0]).toHaveTextContent('Heat');
    expect(rows[1]).toHaveTextContent('Goodfellas');
  });

  it('filters rows via the Streams column filter', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    const streamsFilter = screen.getByPlaceholderText(/Filter by Streams/i);
    await user.type(streamsFilter, 'free');

    await waitFor(() => {
      expect(screen.queryByRole('link', { name: 'Heat' })).not.toBeInTheDocument();
    });
    expect(screen.getByText('Goodfellas')).toBeInTheDocument();
  });

  it('filters rows via the global search input', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    const searchInput = screen.getByPlaceholderText('Search');
    await user.type(searchInput, 'Scorsese');

    await waitFor(() => {
      expect(screen.queryByRole('link', { name: 'Heat' })).not.toBeInTheDocument();
    });
    expect(screen.getByText('Goodfellas')).toBeInTheDocument();
  });

  it('filters by director and tracks analytics when clicking a director name', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    await user.click(screen.getByText('Michael Mann'));

    expect(analytics.trackDirectorClick).toHaveBeenCalledWith('Michael Mann');
    expect(screen.getByRole('link', { name: 'Heat' })).toBeInTheDocument();
    expect(screen.queryByText('Goodfellas')).not.toBeInTheDocument();
  });

  it('filters by actor and tracks analytics when clicking an actor name', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    await user.click(screen.getByText(/Joe Pesci/));

    expect(analytics.trackActorClick).toHaveBeenCalledWith('Joe Pesci');
    expect(screen.getByText('Goodfellas')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Heat' })).not.toBeInTheDocument();
  });

  it('opens PodcastPlayerModal and tracks analytics when clicking a podcast title', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    await user.click(screen.getByText(/'Heat' With Bill Simmons/));

    expect(analytics.trackPodcastPlay).toHaveBeenCalledWith("'Heat' With Bill Simmons", 'Heat');
    expect(screen.getByText('Movie: Heat')).toBeInTheDocument();
    expect(screen.getByText('Action classic episode.')).toBeInTheDocument();

    // Close modal
    const modal = document.querySelector('[aria-labelledby="podcast-player-modal"]');
    await user.click(within(modal).getByTestId('CloseIcon').closest('button'));
    expect(screen.queryByText('Movie: Heat')).not.toBeInTheDocument();
  });

  it('tracks analytics when clicking a streaming Watch link', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    const watchLinks = screen.getAllByRole('link', { name: /Watch/i });
    const netflixWatch = watchLinks.find(
      (link) => link.getAttribute('href') === 'https://netflix.com/watch/heat'
    );
    expect(netflixWatch).toBeDefined();

    await user.click(netflixWatch);
    expect(analytics.trackStreamingClick).toHaveBeenCalledWith('Netflix', 'Heat');
  });

  it('renders empty state cleanly when data is empty', () => {
    render(<DataTable data={[]} isLoading={false} error={null} />);
    expect(screen.getByText(/No records to display/i)).toBeInTheDocument();
  });

  it('renders loading state cleanly without crashing', () => {
    render(<DataTable data={[]} isLoading={true} error={null} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.queryByText(/Error loading data/i)).not.toBeInTheDocument();
  });

  it('renders error message when error prop is provided', () => {
    render(<DataTable data={[]} isLoading={false} error={new Error('Network timeout')} />);
    expect(screen.getByText('Error loading data: Network timeout')).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});
