import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PodcastPlayerModal, { formatTime } from './PodcastPlayerModal';

const samplePodcast = {
  pod_title: "'Heat' With Bill Simmons and Chris Ryan",
  pod_date: '2023-05-15T12:00:00Z',
  pod_link: 'https://cdn.example.com/heat.mp3',
  pod_desc: 'The guys revisit Michael Mann classic Heat.',
  movie: {
    movie_title: 'Heat',
  },
};

const secondPodcast = {
  pod_title: "'Goodfellas' Rewatchable",
  pod_date: '2024-02-20T12:00:00Z',
  pod_link: 'https://cdn.example.com/goodfellas.mp3',
  pod_desc: 'Scorsese masterpiece.',
  movie: {
    movie_title: 'Goodfellas',
  },
};

describe('formatTime', () => {
  it('formats valid non-negative seconds as M:SS', () => {
    expect(formatTime(0)).toBe('0:00');
    expect(formatTime(5)).toBe('0:05');
    expect(formatTime(65)).toBe('1:05');
    expect(formatTime(120)).toBe('2:00');
  });

  it('guards against NaN, Infinity, negative numbers, null, and undefined', () => {
    expect(formatTime(NaN)).toBe('0:00');
    expect(formatTime(Infinity)).toBe('0:00');
    expect(formatTime(-Infinity)).toBe('0:00');
    expect(formatTime(-10)).toBe('0:00');
    expect(formatTime(null)).toBe('0:00');
    expect(formatTime(undefined)).toBe('0:00');
  });
});

describe('PodcastPlayerModal', () => {
  let playSpy;
  let pauseSpy;

  beforeEach(() => {
    playSpy = vi
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve());
    pauseSpy = vi
      .spyOn(window.HTMLMediaElement.prototype, 'pause')
      .mockImplementation(() => {});
  });

  afterEach(() => {
    playSpy.mockRestore();
    pauseSpy.mockRestore();
  });

  it('returns null when podcast is null', () => {
    const { container } = render(
      <PodcastPlayerModal open={true} onClose={vi.fn()} podcast={null} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders podcast metadata, audio element, accessible controls, and description when open', () => {
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    expect(screen.getByText(samplePodcast.pod_title)).toBeInTheDocument();
    expect(screen.getByText('Movie: Heat')).toBeInTheDocument();
    expect(screen.getByText(samplePodcast.pod_desc)).toBeInTheDocument();
    expect(screen.getByText('0:00 / 0:00')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Close podcast player/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Rewind 15 seconds/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Play$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Fast forward 15 seconds/i })).toBeInTheDocument();

    const audio = document.querySelector('audio');
    expect(audio).toBeInTheDocument();
    expect(audio).toHaveAttribute('src', samplePodcast.pod_link);
  });

  it('omits movie title and description when not provided', () => {
    const minimalPodcast = {
      pod_title: 'Bonus Episode',
      pod_date: '2024-01-10T12:00:00Z',
      pod_link: 'https://cdn.example.com/bonus.mp3',
    };

    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={minimalPodcast} />);

    expect(screen.getByText('Bonus Episode')).toBeInTheDocument();
    expect(screen.queryByText(/^Movie:/)).not.toBeInTheDocument();
  });

  it('toggles play and pause via the audio element with updated aria-label', async () => {
    const user = userEvent.setup();
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    await user.click(screen.getByRole('button', { name: /^Play$/i }));

    expect(playSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: /^Pause$/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^Pause$/i }));

    expect(pauseSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: /^Play$/i })).toBeInTheDocument();
  });

  it('displays an error alert when audio play rejects or audio fails to load', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    playSpy.mockRejectedValueOnce(new Error('Autoplay blocked'));

    const user = userEvent.setup();
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    await user.click(screen.getByRole('button', { name: /^Play$/i }));

    expect(playSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent('Autoplay blocked');
    expect(screen.getByRole('button', { name: /^Play$/i })).toBeInTheDocument();

    const audio = document.querySelector('audio');
    fireEvent.error(audio);
    expect(screen.getByRole('alert')).toHaveTextContent('Failed to load audio');

    consoleErrorSpy.mockRestore();
  });

  it('resets audioError, duration, currentTime, and playing state when podcast prop changes', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const user = userEvent.setup();

    const { rerender } = render(
      <PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />
    );

    const audio = document.querySelector('audio');
    Object.defineProperty(audio, 'duration', { value: 120, configurable: true });
    audio.currentTime = 65;

    fireEvent.loadedMetadata(audio);
    fireEvent.timeUpdate(audio);
    await user.click(screen.getByRole('button', { name: /^Play$/i }));
    fireEvent.error(audio);

    expect(screen.getByText('1:05 / 2:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Pause$/i })).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Failed to load audio');

    rerender(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={secondPodcast} />);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.getByText('0:00 / 0:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Play$/i })).toBeInTheDocument();
    expect(audio.currentTime).toBe(0);
    expect(screen.getByText(secondPodcast.pod_title)).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
  });

  it('updates time display on metadata load and timeupdate, and supports rewind/fast-forward', async () => {
    const user = userEvent.setup();
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    const audio = document.querySelector('audio');
    Object.defineProperty(audio, 'duration', { value: 120, configurable: true });
    audio.currentTime = 65;

    fireEvent.loadedMetadata(audio);
    fireEvent.timeUpdate(audio);

    expect(screen.getByText('1:05 / 2:00')).toBeInTheDocument();

    // Fast-forward by 15s (65 -> 80)
    await user.click(screen.getByRole('button', { name: /Fast forward 15 seconds/i }));
    expect(audio.currentTime).toBe(80);

    // Rewind by 15s (80 -> 65)
    await user.click(screen.getByRole('button', { name: /Rewind 15 seconds/i }));
    expect(audio.currentTime).toBe(65);

    // Rewind clamps at 0
    audio.currentTime = 5;
    await user.click(screen.getByRole('button', { name: /Rewind 15 seconds/i }));
    expect(audio.currentTime).toBe(0);

    // Fast-forward clamps at duration
    audio.currentTime = 115;
    await user.click(screen.getByRole('button', { name: /Fast forward 15 seconds/i }));
    expect(audio.currentTime).toBe(120);
  });

  it('pauses audio, resets currentTime, and calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<PodcastPlayerModal open={true} onClose={onClose} podcast={samplePodcast} />);

    const audio = document.querySelector('audio');
    audio.currentTime = 42;

    await user.click(screen.getByRole('button', { name: /Close podcast player/i }));

    expect(pauseSpy).toHaveBeenCalled();
    expect(audio.currentTime).toBe(0);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('rejects non-http(s) pod_link protocols such as javascript: and data:', () => {
    const jsPodcast = {
      ...samplePodcast,
      pod_link: 'javascript:alert(1)',
    };

    const { rerender } = render(
      <PodcastPlayerModal open={true} onClose={vi.fn()} podcast={jsPodcast} />
    );

    let audio = document.querySelector('audio');
    expect(audio).toBeInTheDocument();
    expect(audio).not.toHaveAttribute('src');

    const dataPodcast = {
      ...samplePodcast,
      pod_link: 'data:audio/mp3;base64,AAAA',
    };

    rerender(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={dataPodcast} />);

    audio = document.querySelector('audio');
    expect(audio).not.toHaveAttribute('src');

    const httpPodcast = {
      ...samplePodcast,
      pod_link: 'http://cdn.example.com/heat.mp3',
    };

    rerender(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={httpPodcast} />);

    audio = document.querySelector('audio');
    expect(audio).toHaveAttribute('src', 'http://cdn.example.com/heat.mp3');
  });
});
