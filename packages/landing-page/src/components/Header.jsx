import React from 'react';
import { Typography } from '@mui/material';
import './Header.css';

const formatUpdatedDate = (generatedAt) => {
  if (!generatedAt) return null;
  const parsed = new Date(generatedAt);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
};

const Header = ({ generatedAt = null, totalPodcasts = 0 }) => {
  const formattedDate = formatUpdatedDate(generatedAt);
  const freshnessParts = [];
  if (typeof totalPodcasts === 'number' && totalPodcasts > 0) {
    freshnessParts.push(
      `${totalPodcasts.toLocaleString('en-US')} ${totalPodcasts === 1 ? 'episode' : 'episodes'} indexed`
    );
  }
  if (formattedDate) {
    freshnessParts.push(`Updated ${formattedDate}`);
  }
  const freshnessText = freshnessParts.join(' · ');

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 600,
              fontSize: '2.5rem',
              color: '#ffffff',
              margin: 0,
            }}
          >
            watch that pod
          </Typography>
          <Typography 
            variant="h6" 
            component="p"
            sx={{
              color: '#b0b0b0',
              fontWeight: 400,
              fontSize: '1rem',
              margin: '8px 0 0 0',
              lineHeight: 1.4,
            }}
          >
            Discover your favorite and forgotten The Rewatchables episodes with this streaming guide to all of the streaming options available for your best-loved movies.
          </Typography>
          {freshnessText && (
            <Typography
              variant="caption"
              component="p"
              sx={{
                color: '#8e8e8e',
                fontWeight: 400,
                fontSize: '0.8rem',
                margin: '6px 0 0 0',
                lineHeight: 1.3,
              }}
            >
              {freshnessText}
            </Typography>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
