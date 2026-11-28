import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  trackEvent,
  trackPageView,
  trackPodcastPlay,
  trackDirectorClick,
  trackActorClick,
  trackStreamingClick,
  trackSearch,
  setupGAOptOut,
} from './analytics';

describe('analytics utilities', () => {
  let gtagMock;
  let alertMock;

  beforeEach(() => {
    gtagMock = vi.fn();
    window.gtag = gtagMock;
    alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    document.cookie = 'ga-disable-G-7Z6TRE44CZ=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  });

  afterEach(() => {
    delete window.gtag;
    delete window.gaOptout;
    delete window.gaOptin;
    alertMock.mockRestore();
  });

  it('trackEvent sends event and parameters to window.gtag', () => {
    trackEvent('custom_event', { foo: 'bar' });
    expect(gtagMock).toHaveBeenCalledWith('event', 'custom_event', { foo: 'bar' });
  });

  it('trackEvent defaults parameters to an empty object', () => {
    trackEvent('bare_event');
    expect(gtagMock).toHaveBeenCalledWith('event', 'bare_event', {});
  });

  it('trackPageView sends config event with page_path', () => {
    trackPageView('/episodes');
    expect(gtagMock).toHaveBeenCalledWith('config', 'G-7Z6TRE44CZ', {
      page_path: '/episodes',
    });
  });

  it('trackPodcastPlay tracks podcast_play with titles', () => {
    trackPodcastPlay('The Godfather Rewatchable', 'The Godfather');
    expect(gtagMock).toHaveBeenCalledWith('event', 'podcast_play', {
      podcast_title: 'The Godfather Rewatchable',
      movie_title: 'The Godfather',
    });
  });

  it('trackDirectorClick tracks director_filter', () => {
    trackDirectorClick('Michael Mann');
    expect(gtagMock).toHaveBeenCalledWith('event', 'director_filter', {
      director_name: 'Michael Mann',
    });
  });

  it('trackActorClick tracks actor_filter', () => {
    trackActorClick('Al Pacino');
    expect(gtagMock).toHaveBeenCalledWith('event', 'actor_filter', {
      actor_name: 'Al Pacino',
    });
  });

  it('trackStreamingClick tracks streaming_click', () => {
    trackStreamingClick('Netflix', 'Heat');
    expect(gtagMock).toHaveBeenCalledWith('event', 'streaming_click', {
      service_name: 'Netflix',
      movie_title: 'Heat',
    });
  });

  it('trackSearch tracks search with search_term', () => {
    trackSearch('thriller');
    expect(gtagMock).toHaveBeenCalledWith('event', 'search', {
      search_term: 'thriller',
    });
  });

  it('safely no-ops when window.gtag is undefined', () => {
    delete window.gtag;

    expect(() => trackEvent('x')).not.toThrow();
    expect(() => trackPageView('/')).not.toThrow();
    expect(() => trackPodcastPlay('p', 'm')).not.toThrow();
    expect(() => trackDirectorClick('d')).not.toThrow();
    expect(() => trackActorClick('a')).not.toThrow();
    expect(() => trackStreamingClick('s', 'm')).not.toThrow();
    expect(() => trackSearch('q')).not.toThrow();
  });

  describe('setupGAOptOut', () => {
    it('registers window.gaOptout and updates consent, cookie, and alerts', () => {
      setupGAOptOut();
      expect(typeof window.gaOptout).toBe('function');

      window.gaOptout();

      expect(gtagMock).toHaveBeenCalledWith('consent', 'update', {
        analytics_storage: 'denied',
      });
      expect(document.cookie).toContain('ga-disable-G-7Z6TRE44CZ=true');
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('opted out of Google Analytics')
      );
    });

    it('registers window.gaOptin and grants consent, clears cookie, and alerts', () => {
      setupGAOptOut();
      expect(typeof window.gaOptin).toBe('function');

      window.gaOptout();
      expect(document.cookie).toContain('ga-disable-G-7Z6TRE44CZ=true');

      window.gaOptin();

      expect(gtagMock).toHaveBeenCalledWith('consent', 'update', {
        analytics_storage: 'granted',
      });
      expect(document.cookie).not.toContain('ga-disable-G-7Z6TRE44CZ=true');
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('re-enabled Google Analytics')
      );
    });

    it('works safely when window.gtag is absent', () => {
      delete window.gtag;
      setupGAOptOut();

      expect(() => window.gaOptout()).not.toThrow();
      expect(document.cookie).toContain('ga-disable-G-7Z6TRE44CZ=true');

      expect(() => window.gaOptin()).not.toThrow();
      expect(document.cookie).not.toContain('ga-disable-G-7Z6TRE44CZ=true');
    });
  });
});
