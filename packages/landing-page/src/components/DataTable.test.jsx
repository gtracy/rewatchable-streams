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
    vi.spyOn(analytics, 'trackSearch').mockImplementation(() => {});
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

  describe('security sanitization', () => {
    it('adds referrerPolicy="no-referrer" to external poster and service icon images', () => {
      render(<DataTable data={sampleData} isLoading={false} error={null} />);

      const posterImg = screen.getByAltText(/Heat poster/i);
      expect(posterImg).toHaveAttribute('referrerpolicy', 'no-referrer');

      const serviceIcon = screen.getByAltText('Netflix');
      expect(serviceIcon).toHaveAttribute('referrerpolicy', 'no-referrer');
    });

    it('blocks javascript: and data: URLs in watch links, poster images, and service icons', () => {
      const maliciousData = [
        {
          pod_title: 'Malicious Episode',
          pod_date: '2024-05-01T12:00:00Z',
          pod_link: 'https://cdn.example.com/ep.mp3',
          movie: {
            movie_title: 'Malicious Movie',
            imdb_id: 'tt0113277/../../evil',
            releaseYear: 2024,
            imageSet: 'javascript:alert(1)',
            directors: ['Test Director'],
            cast: ['Test Actor'],
            streamingOptions: [
              {
                serviceName: 'EvilStream',
                type: 'subscription',
                link: 'javascript:alert(document.cookie)',
                serviceImageSet: {
                  darkThemeImage: 'data:image/svg+xml,<svg onload=alert(1)>',
                },
                serviceThemeColorCode: 'red; background-image: url(https://evil.com/leak)',
              },
              {
                serviceName: 'DataStream',
                type: 'free',
                link: 'data:text/html,<script>alert(1)</script>',
                serviceImageSet: {
                  darkThemeImage: 'javascript:alert(2)',
                },
                serviceThemeColorCode: '#fff; expression(alert(1))',
              },
            ],
          },
        },
      ];

      render(<DataTable data={maliciousData} isLoading={false} error={null} />);

      // Malicious poster URL falls back to "No Image"
      expect(screen.queryByAltText(/Malicious Movie poster/i)).not.toBeInTheDocument();
      expect(screen.getByText('No Image')).toBeInTheDocument();

      // Invalid/traversed imdb_id renders plain text, not an <a> link
      expect(screen.getByText('Malicious Movie')).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Malicious Movie' })).not.toBeInTheDocument();

      // Malicious service icons are not rendered as <img>
      expect(screen.queryByAltText('EvilStream')).not.toBeInTheDocument();
      expect(screen.queryByAltText('DataStream')).not.toBeInTheDocument();
      expect(screen.getByText('EvilStream')).toBeInTheDocument();
      expect(screen.getByText('DataStream')).toBeInTheDocument();

      // Malicious watch links fall back to '#'
      const watchLinks = screen.getAllByRole('link', { name: /Watch/i });
      expect(watchLinks).toHaveLength(2);
      watchLinks.forEach((link) => {
        expect(link).toHaveAttribute('href', '#');
      });

      // CSS injection payloads in serviceThemeColorCode fall back to '#444'
      const evilIconBox = screen.getByText('EvilStream').parentElement;
      expect(getComputedStyle(evilIconBox).borderColor).not.toContain('red');
      expect(getComputedStyle(evilIconBox).backgroundImage).not.toContain('evil.com');
    });
  });
});
