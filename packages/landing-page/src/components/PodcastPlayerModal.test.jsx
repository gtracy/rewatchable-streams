import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PodcastPlayerModal from './PodcastPlayerModal';

const samplePodcast = {
  pod_title: "'Heat' With Bill Simmons and Chris Ryan",
  pod_date: '2023-05-15T12:00:00Z',
  pod_link: 'https://cdn.example.com/heat.mp3',
  pod_desc: 'The guys revisit Michael Mann classic Heat.',
  movie: {
    movie_title: 'Heat',
  },
};

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

  it('renders podcast metadata, audio element, and description when open', () => {
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    expect(screen.getByText(samplePodcast.pod_title)).toBeInTheDocument();
    expect(screen.getByText('Movie: Heat')).toBeInTheDocument();
    expect(screen.getByText(samplePodcast.pod_desc)).toBeInTheDocument();
    expect(screen.getByText('0:00 / 0:00')).toBeInTheDocument();

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

  it('toggles play and pause via the audio element', async () => {
    const user = userEvent.setup();
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    const playButton = screen.getByTestId('PlayArrowIcon').closest('button');
    await user.click(playButton);

    expect(playSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('PauseIcon')).toBeInTheDocument();

    const pauseButton = screen.getByTestId('PauseIcon').closest('button');
    await user.click(pauseButton);

    expect(pauseSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('PlayArrowIcon')).toBeInTheDocument();
  });

  it('handles audio play rejection without crashing', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    playSpy.mockRejectedValueOnce(new Error('Autoplay blocked'));

    const user = userEvent.setup();
    render(<PodcastPlayerModal open={true} onClose={vi.fn()} podcast={samplePodcast} />);

    const playButton = screen.getByTestId('PlayArrowIcon').closest('button');
    await user.click(playButton);

    expect(playSpy).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(screen.getByTestId('PlayArrowIcon')).toBeInTheDocument();

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
    await user.click(screen.getByTestId('FastForwardIcon').closest('button'));
    expect(audio.currentTime).toBe(80);

    // Rewind by 15s (80 -> 65)
    await user.click(screen.getByTestId('FastRewindIcon').closest('button'));
    expect(audio.currentTime).toBe(65);

    // Rewind clamps at 0
    audio.currentTime = 5;
    await user.click(screen.getByTestId('FastRewindIcon').closest('button'));
    expect(audio.currentTime).toBe(0);

    // Fast-forward clamps at duration
    audio.currentTime = 115;
    await user.click(screen.getByTestId('FastForwardIcon').closest('button'));
    expect(audio.currentTime).toBe(120);
  });

  it('pauses audio, resets currentTime, and calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<PodcastPlayerModal open={true} onClose={onClose} podcast={samplePodcast} />);

    const audio = document.querySelector('audio');
    audio.currentTime = 42;

    await user.click(screen.getByTestId('CloseIcon').closest('button'));

    expect(pauseSpy).toHaveBeenCalledTimes(1);
    expect(audio.currentTime).toBe(0);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
