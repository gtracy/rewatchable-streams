import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const PrivacyModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 600,
          maxHeight: '90vh',
          overflow: 'auto',
          backgroundColor: '#1e1e1e',
          border: '1px solid #333',
          borderRadius: 2,
          p: 3,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#b0b0b0',
            '&:hover': {
              backgroundColor: '#2d2d2d',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: '#ffffff',
            fontWeight: 600,
            mb: 3,
            fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
          }}
        >
          Privacy
        </Typography>

        {/* Content */}
        <Box sx={{ color: '#b0b0b0', lineHeight: 1.6 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hey there, friends. I wanted to give you a heads-up that this pod catalog service uses Google Analytics. This is a standard tool that helps me understand how the service is being used so I can make it better.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            I'm collecting anonymous, non-personal usage data, such as:
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 2, listStyleType: 'disc' }}>
            <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
              Page views and time spent on pages
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
              Clicks on various features
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1, display: 'list-item' }}>
              The type of browser or device used
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            I'm not collecting any personally identifiable information (PII), and the data will not be shared or published. It's for my internal analysis only.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            If you would like to opt-out of this anonymous tracking, you can do so by clicking this link:{' '}
            <a 
              href="javascript:gaOptout();" 
              style={{ 
                color: '#90caf9', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Opt-Out of Google Analytics
            </a>.
          </Typography>

          <Typography variant="body1">
            If you've previously opted out and would like to re-enable tracking, click here:{' '}
            <a 
              href="javascript:gaOptin();" 
              style={{ 
                color: '#90caf9', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Re-enable Google Analytics Tracking
            </a>.
          </Typography>
        </Box>
      </Paper>
    </Modal>
  );
};

export default PrivacyModal;
