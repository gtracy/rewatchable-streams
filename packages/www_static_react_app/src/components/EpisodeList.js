import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setEpisodes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="status-message">Loading episodes...</div>;
  }

  if (error) {
    return <div className="error-message">Error loading episodes: {error}</div>;
  }

  return (
    <div className="episode-list">
      <h1>Podcast Episodes</h1>
      {episodes.length === 0 ? (
        <p className="status-message">No episodes found.</p>
      ) : (
        <ul className="episode-list">
          {episodes.map(episode => (
            <li key={episode.id} className="episode-list-item list-item">
              <h2>
                <Link to={`/episode/${episode.id}`}>{episode.episodeTitle}</Link>
              </h2>
              <p>Movie: {episode.movieTitle}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EpisodeList;
