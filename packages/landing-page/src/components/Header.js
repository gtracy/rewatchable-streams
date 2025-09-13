import React from 'react';
import { Typography } from '@mui/material';
import './Header.css';

const Header = () => {
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
              fontSize: '2rem',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Watch That Pod - Movie Podcasts & The Rewatchables
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
            Discover movie podcasts, The Rewatchables episodes, and streaming options for your favorite films
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;
