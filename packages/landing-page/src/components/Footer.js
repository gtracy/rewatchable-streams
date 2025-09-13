import React, { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import PrivacyModal from './PrivacyModal';
import './Footer.css';

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handlePrivacyClick = () => {
    setPrivacyModalOpen(true);
  };

  const handleClosePrivacyModal = () => {
    setPrivacyModalOpen(false);
  };

  return (
    <>
      <footer className="footer">
        <Box className="footer-content">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              variant="body2" 
              sx={{
                color: '#b0b0b0',
                fontFamily: '"Geist", "Sora", "Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: '0.75rem', // 25% smaller than default body2 (1rem -> 0.75rem)
              }}
            >
              not affiliated with{' '}
              <Link 
                href="https://www.theringer.com/podcasts/the-rewatchables"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#d0d0d0',
                  textDecoration: 'none',
                }}
              >
                The Ringer
              </Link>
              . i just love this podcast.
            </Typography>
            
            <Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePrivacyClick();
              }}
              sx={{
                color: '#d0d0d0',
                textDecoration: 'none',
                cursor: 'pointer',
                fontFamily: '"Geist", "Sora", "Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: '0.75rem',
              }}
            >
              privacy
            </Link>
          </Box>
        </Box>
      </footer>

      <PrivacyModal 
        open={privacyModalOpen} 
        onClose={handleClosePrivacyModal} 
      />
    </>
  );
};

export default Footer;
