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
            Discover your favorite and forgotten The Rewatchables episodes, and all of the streaming options available for your best-loved movies.
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;
