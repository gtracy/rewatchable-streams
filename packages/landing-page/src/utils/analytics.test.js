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
  hasGAOptOutCookie,
  applyStoredGAOptOut,
} from './analytics';

const GA_DISABLE_KEY = 'ga-disable-G-7Z6TRE44CZ';

describe('analytics utilities', () => {
  let gtagMock;
  let alertMock;

  beforeEach(() => {
    gtagMock = vi.fn();
    window.gtag = gtagMock;
    delete window[GA_DISABLE_KEY];
    alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    document.cookie = `${GA_DISABLE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  });

  afterEach(() => {
    delete window.gtag;
    delete window.gaOptout;
    delete window.gaOptin;
    delete window[GA_DISABLE_KEY];
    document.cookie = `${GA_DISABLE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    alertMock.mockRestore();
    vi.restoreAllMocks();
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
    it('registers window.gaOptout, sets disable flag, updates consent, writes Secure SameSite=Lax cookie, and alerts', () => {
      const cookieWrites = [];
      const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
      vi.spyOn(document, 'cookie', 'set').mockImplementation((value) => {
        cookieWrites.push(value);
        // Strip Secure so jsdom's http://localhost jar also stores the cookie if needed
        cookieDescriptor.set.call(document, value.replace(/;\s*Secure/gi, ''));
      });

      setupGAOptOut();
      expect(typeof window.gaOptout).toBe('function');

      window.gaOptout();

      expect(window[GA_DISABLE_KEY]).toBe(true);
      expect(gtagMock).toHaveBeenCalledWith('consent', 'update', {
        analytics_storage: 'denied',
      });
      expect(cookieWrites[cookieWrites.length - 1]).toContain(`${GA_DISABLE_KEY}=true`);
      expect(cookieWrites[cookieWrites.length - 1]).toContain('Secure');
      expect(cookieWrites[cookieWrites.length - 1]).toContain('SameSite=Lax');
      expect(hasGAOptOutCookie()).toBe(true);
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('opted out of Google Analytics')
      );
    });

    it('registers window.gaOptin, resets disable flag, grants consent, clears cookie with Secure SameSite=Lax, and alerts', () => {
      const cookieWrites = [];
      const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
      vi.spyOn(document, 'cookie', 'set').mockImplementation((value) => {
        cookieWrites.push(value);
        cookieDescriptor.set.call(document, value.replace(/;\s*Secure/gi, ''));
      });

      setupGAOptOut();
      expect(typeof window.gaOptin).toBe('function');

      window.gaOptout();
      expect(window[GA_DISABLE_KEY]).toBe(true);
      expect(hasGAOptOutCookie()).toBe(true);

      window.gaOptin();

      expect(window[GA_DISABLE_KEY]).toBe(false);
      expect(gtagMock).toHaveBeenCalledWith('consent', 'update', {
        analytics_storage: 'granted',
      });
      expect(cookieWrites[cookieWrites.length - 1]).toContain(`${GA_DISABLE_KEY}=;`);
      expect(cookieWrites[cookieWrites.length - 1]).toContain('Secure');
      expect(cookieWrites[cookieWrites.length - 1]).toContain('SameSite=Lax');
      expect(hasGAOptOutCookie()).toBe(false);
      expect(alertMock).toHaveBeenCalledWith(
        expect.stringContaining('re-enabled Google Analytics')
      );
    });

    it('persists opt-out across page reloads when setupGAOptOut runs with opt-out cookie present', () => {
      // Simulate opt-out cookie persisted from a previous session
      document.cookie = `${GA_DISABLE_KEY}=true; path=/`;
      expect(hasGAOptOutCookie()).toBe(true);

      // Simulate fresh page load where window disable flag is not yet set
      delete window[GA_DISABLE_KEY];

      setupGAOptOut();

      expect(window[GA_DISABLE_KEY]).toBe(true);
      expect(gtagMock).toHaveBeenCalledWith('consent', 'default', {
        analytics_storage: 'denied',
      });
    });

    it('does not set disable flag or deny consent on startup when opt-out cookie is absent', () => {
      expect(hasGAOptOutCookie()).toBe(false);

      const applied = applyStoredGAOptOut();

      expect(applied).toBe(false);
      expect(window[GA_DISABLE_KEY]).toBeUndefined();
      expect(gtagMock).not.toHaveBeenCalled();
    });

    it('works safely when window.gtag is absent', () => {
      delete window.gtag;
      const cookieDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
      vi.spyOn(document, 'cookie', 'set').mockImplementation((value) => {
        cookieDescriptor.set.call(document, value.replace(/;\s*Secure/gi, ''));
      });

      setupGAOptOut();

      expect(() => window.gaOptout()).not.toThrow();
      expect(window[GA_DISABLE_KEY]).toBe(true);
      expect(hasGAOptOutCookie()).toBe(true);

      expect(() => window.gaOptin()).not.toThrow();
      expect(window[GA_DISABLE_KEY]).toBe(false);
      expect(hasGAOptOutCookie()).toBe(false);
    });
  });
});
