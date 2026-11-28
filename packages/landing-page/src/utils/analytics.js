// Google Analytics 4 utility functions

const GA_MEASUREMENT_ID = 'G-7Z6TRE44CZ';
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;

export const hasGAOptOutCookie = () => {
  if (typeof document === 'undefined') {
    return false;
  }
  return document.cookie
    .split(';')
    .some((cookie) => cookie.trim() === `${GA_DISABLE_KEY}=true`);
};

export const applyStoredGAOptOut = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (hasGAOptOutCookie()) {
    window[GA_DISABLE_KEY] = true;
    if (window.gtag) {
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
      });
    }
    return true;
  }

  return false;
};

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
    });
  }
};

// Custom events for the app
export const trackPodcastPlay = (podcastTitle, movieTitle) => {
  trackEvent('podcast_play', {
    podcast_title: podcastTitle,
    movie_title: movieTitle,
  });
};

export const trackDirectorClick = (directorName) => {
  trackEvent('director_filter', {
    director_name: directorName,
  });
};

export const trackActorClick = (actorName) => {
  trackEvent('actor_filter', {
    actor_name: actorName,
  });
};

export const trackStreamingClick = (serviceName, movieTitle) => {
  trackEvent('streaming_click', {
    service_name: serviceName,
    movie_title: movieTitle,
  });
};

export const trackSearch = (searchTerm) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

// Google Analytics opt-out function
export const setupGAOptOut = () => {
  if (typeof window !== 'undefined') {
    // Re-apply opt-out preference on startup if cookie is present
    applyStoredGAOptOut();

    window.gaOptout = () => {
      // Immediately disable Google Analytics
      window[GA_DISABLE_KEY] = true;

      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
      }

      // Set opt-out cookie
      document.cookie = `${GA_DISABLE_KEY}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/; Secure; SameSite=Lax`;

      // Show confirmation
      alert('You have opted out of Google Analytics tracking. This setting will persist across sessions.');
    };

    window.gaOptin = () => {
      // Re-enable Google Analytics
      window[GA_DISABLE_KEY] = false;

      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }

      // Remove opt-out cookie
      document.cookie = `${GA_DISABLE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Lax`;

      // Show confirmation
      alert('You have re-enabled Google Analytics tracking. Thank you for helping improve the service!');
    };
  }
};
