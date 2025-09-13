import React from 'react';
import { Typography } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <Typography 
            variant="h4" 
            component="h1"
            sx={{
              fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 600,
              fontSize: '2rem',
              color: '#ffffff',
            }}
          >
            find my pod movie
          </Typography>
        </div>
      </div>
    </header>
  );
};

export default Header;
