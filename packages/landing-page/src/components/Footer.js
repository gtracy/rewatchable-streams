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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {/* Current message */}
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
              
              {/* Buy me a coffee button */}
              <Link 
                href="https://buymeacoffee.com/gregtracy"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#FFE55C',
                  color: '#000000',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontFamily: '"Poppins", "Geist", "Sora", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: '2px solid #000000',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: '#FFE55C',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  },
                }}
              >
                ☕ Buy me a coffee
              </Link>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-end' }}>
              {/* Email link */}
              <Link 
                href="mailto:feedback@watchthatpod.com"
                sx={{
                  color: '#d0d0d0',
                  textDecoration: 'none',
                  fontFamily: '"Geist", "Sora", "Roboto", "Helvetica", "Arial", sans-serif',
                  fontSize: '0.75rem',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                feedback@watchthatpod.com
              </Link>
              
              {/* Privacy link */}
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
