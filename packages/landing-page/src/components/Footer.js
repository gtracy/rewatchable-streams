import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-content">
        <Typography 
          variant="body2" 
          sx={{
            color: '#b0b0b0',
            textAlign: 'left',
            fontFamily: '"Geist", "Sora", "Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '0.75rem', // 25% smaller than default body2 (1rem -> 0.75rem)
          }}
        >
          not affiliated with The Ringer. i just love this podcast.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
