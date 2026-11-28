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
    window.history.replaceState(null, '', '/');
    vi.spyOn(analytics, 'trackPodcastPlay').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackDirectorClick').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackActorClick').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackStreamingClick').mockImplementation(() => {});
    vi.spyOn(analytics, 'trackSearch').mockImplementation(() => {});
    vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  });

  afterEach(() => {
    window.history.replaceState(null, '', '/');
    vi.restoreAllMocks();
  });

  it('renders rows from sample data including posters, canonical movie links, secondary IMDb links, streaming options, directors, and actors', () => {
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    // Movie titles link to canonical static movie pages
    const heatLink = screen.getByRole('link', { name: 'Heat' });
    expect(heatLink).toHaveAttribute('href', '/movie/heat-1995/');
    expect(heatLink).not.toHaveAttribute('target');

    const goodfellasLink = screen.getByRole('link', { name: 'Goodfellas' });
    expect(goodfellasLink).toHaveAttribute('href', '/movie/goodfellas-1990/');

    // Secondary IMDb link only rendered when imdb_id is present
    const heatImdbLink = screen.getByRole('link', { name: 'View Heat on IMDb' });
    expect(heatImdbLink).toHaveAttribute('href', 'https://www.imdb.com/title/tt0113277/');
    expect(heatImdbLink).toHaveAttribute('target', '_blank');
    expect(heatImdbLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(heatImdbLink).toHaveTextContent('IMDb ↗');
    expect(screen.queryByRole('link', { name: 'View Goodfellas on IMDb' })).not.toBeInTheDocument();

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

  it('safely renders rows with missing pod_title and unknown streaming option types', () => {
    const edgeCaseData = [
      {
        pod_title: null,
        pod_date: '2024-03-01T12:00:00Z',
        pod_link: 'https://cdn.example.com/unknown.mp3',
        movie: {
          movie_title: 'Casino',
          releaseYear: 1995,
          directors: ['Martin Scorsese'],
          cast: ['Robert De Niro'],
          streamingOptions: [
            {
              serviceName: 'Apple TV',
              type: 'buy',
              link: 'https://tv.apple.com/casino',
            },
          ],
        },
      },
    ];

    render(<DataTable data={edgeCaseData} isLoading={false} error={null} />);

    expect(screen.getByText(/Untitled Episode/)).toBeInTheDocument();
    expect(screen.getByText('Buy')).toBeInTheDocument();
    expect(screen.queryByText('fixme')).not.toBeInTheDocument();
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

  it('filters rows via the global search input and tracks search analytics', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    expect(analytics.trackSearch).not.toHaveBeenCalled();

    const searchInput = screen.getByPlaceholderText('Search');
    await user.type(searchInput, 'Scorsese');

    await waitFor(() => {
      expect(screen.queryByRole('link', { name: 'Heat' })).not.toBeInTheDocument();
    });
    expect(screen.getByText('Goodfellas')).toBeInTheDocument();
    expect(analytics.trackSearch).toHaveBeenCalledWith('Scorsese');
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

  it('preserves other active column filters when clicking a director or actor', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    // First apply a Streams filter for Netflix (matches Heat)
    const streamsFilter = screen.getByPlaceholderText(/Filter by Streams/i);
    await user.type(streamsFilter, 'netflix');

    await waitFor(() => {
      expect(screen.queryByText('Goodfellas')).not.toBeInTheDocument();
    });

    // Clicking director should preserve the Streams filter
    await user.click(screen.getByText('Michael Mann'));
    expect(streamsFilter).toHaveValue('netflix');
    expect(screen.getByPlaceholderText(/Filter by Director/i)).toHaveValue('Michael Mann');

    // Clicking actor should preserve both Streams and Director filters
    await user.click(screen.getByText(/Al Pacino/));
    expect(streamsFilter).toHaveValue('netflix');
    expect(screen.getByPlaceholderText(/Filter by Director/i)).toHaveValue('Michael Mann');
    expect(screen.getByPlaceholderText(/Filter by Actors/i)).toHaveValue('Al Pacino');
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
    await user.click(within(modal).getByRole('button', { name: /Close podcast player/i }));
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

  it('uses semantic buttons for podcast titles, directors, and actors, descriptive Watch aria-labels, and explicit image dimensions', () => {
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    // Semantic buttons
    expect(
      screen.getByRole('button', { name: /'Heat' With Bill Simmons/i })
    ).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button', { name: 'Michael Mann' })).toHaveAttribute('type', 'button');
    expect(screen.getByRole('button', { name: 'Al Pacino' })).toHaveAttribute('type', 'button');

    // Descriptive aria-labels on Watch links
    expect(screen.getByRole('link', { name: 'Watch Heat on Netflix' })).toHaveAttribute(
      'href',
      'https://netflix.com/watch/heat'
    );
    expect(screen.getByRole('link', { name: 'Watch Goodfellas on Tubi' })).toHaveAttribute(
      'href',
      'https://tubi.tv/goodfellas'
    );

    // Explicit image dimensions & lazy loading
    const posterImg = screen.getByAltText(/Heat poster/i);
    expect(posterImg).toHaveAttribute('width', '109');
    expect(posterImg).toHaveAttribute('height', '156');
    expect(posterImg).toHaveAttribute('loading', 'lazy');

    const serviceIconImg = screen.getByAltText('Netflix');
    expect(serviceIconImg).toHaveAttribute('width', '24');
    expect(serviceIconImg).toHaveAttribute('height', '24');
    expect(serviceIconImg).toHaveAttribute('loading', 'lazy');
  });

  it('initializes global search and column filters from URL query parameters', () => {
    window.history.replaceState(
      null,
      '',
      '/?search=Heat&director=Michael+Mann&actor=Al+Pacino&service=Netflix'
    );

    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    expect(screen.getByPlaceholderText('Search')).toHaveValue('Heat');
    expect(screen.getByPlaceholderText(/Filter by Director/i)).toHaveValue('Michael Mann');
    expect(screen.getByPlaceholderText(/Filter by Actors/i)).toHaveValue('Al Pacino');
    expect(screen.getByPlaceholderText(/Filter by Streams/i)).toHaveValue('Netflix');

    expect(screen.getByRole('link', { name: 'Heat' })).toBeInTheDocument();
    expect(screen.queryByText('Goodfellas')).not.toBeInTheDocument();
  });

  it('syncs search and column filter updates back to window.location.search and removes cleared params', async () => {
    const user = userEvent.setup();
    render(<DataTable data={sampleData} isLoading={false} error={null} />);

    await user.click(screen.getByRole('button', { name: 'Michael Mann' }));
    await waitFor(() => {
      expect(new URLSearchParams(window.location.search).get('director')).toBe('Michael Mann');
    });

    await user.click(screen.getByRole('button', { name: 'Al Pacino' }));
    await waitFor(() => {
      const params = new URLSearchParams(window.location.search);
      expect(params.get('director')).toBe('Michael Mann');
      expect(params.get('actor')).toBe('Al Pacino');
    });

    const searchInput = screen.getByPlaceholderText('Search');
    await user.type(searchInput, 'Heat');
    await waitFor(() => {
      expect(new URLSearchParams(window.location.search).get('search')).toBe('Heat');
    });

    // Clear search and verify param is cleanly removed
    await user.clear(searchInput);
    await waitFor(() => {
      expect(new URLSearchParams(window.location.search).has('search')).toBe(false);
    });
  });
});
