import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StreamingOptions from './StreamingOptions';

function EpisodeDetail() {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);
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
        // episodeId from URL is a string, episode.id is a number
        const foundEpisode = data.find(ep => ep.id.toString() === episodeId);
        if (foundEpisode) {
          setEpisode(foundEpisode);
        } else {
          setError('Episode not found.');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching episode data: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, [episodeId]);

  if (loading) {
    return <div className="status-message">Loading episode details...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!episode) {
    // This case should ideally be covered by the error state if not found
    return <div className="status-message">Episode not found.</div>;
  }

  return (
    <div className="episode-detail-container">
      <h1>{episode.episodeTitle}</h1>
      <p><strong>Movie:</strong> {episode.movieTitle}</p>
      <p><strong>Release Date:</strong> {episode.releaseDate}</p>
      <StreamingOptions options={episode.streamingOptions} />
    </div>
  );
}

export default EpisodeDetail;
