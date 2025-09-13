// Google Analytics 4 utility functions

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-7Z6TRE44CZ', {
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
    window.gaOptout = () => {
      // Disable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
      
      // Set opt-out cookie
      document.cookie = 'ga-disable-G-7Z6TRE44CZ=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
      
      // Show confirmation
      alert('You have opted out of Google Analytics tracking. This setting will persist across sessions.');
    };

    window.gaOptin = () => {
      // Re-enable Google Analytics
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
      
      // Remove opt-out cookie
      document.cookie = 'ga-disable-G-7Z6TRE44CZ=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      
      // Show confirmation
      alert('You have re-enabled Google Analytics tracking. Thank you for helping improve the service!');
    };
  }
};
