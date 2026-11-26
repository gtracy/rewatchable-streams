import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Paper,
  Slider,
} from '@mui/material';
import { 
  Close as CloseIcon, 
  PlayArrow, 
  Pause,
  FastForward,
  FastRewind,
} from '@mui/icons-material';
import ReactPlayer from 'react-player';

const PodcastPlayerModal = ({ open, onClose, podcast }) => {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [useNativePlayer, setUseNativePlayer] = React.useState(true);
  const [audioError, setAudioError] = React.useState(null);
  const [isSeeking, setIsSeeking] = React.useState(false);
  const audioRef = React.useRef(null);

  const handleClose = () => {
    setPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose();
  };

  const handlePlayPause = async () => {
    if (useNativePlayer && audioRef.current) {
      try {
        if (playing) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setPlaying(!playing);
      } catch (error) {
        console.error('Audio play error:', error);
        setAudioError(error.message);
      }
    }
  };

  const handleProgress = (state) => {
    setProgress(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleNativeProgress = () => {
    if (audioRef.current && !isSeeking) {
      const currentTime = audioRef.current.currentTime;
      const totalTime = audioRef.current.duration;
      if (totalTime) {
        setProgress(currentTime / totalTime);
      }
    }
  };

  const handleNativeDuration = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event, newValue) => {
    if (audioRef.current && duration) {
      const seekTime = (newValue / 100) * duration;
      audioRef.current.currentTime = seekTime;
      setProgress(newValue / 100);
    }
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
    }
  };


  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!podcast) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="podcast-player-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 600,
          maxHeight: '90vh',
          overflow: 'auto',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          p: 3,
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box sx={{ flex: 1, mr: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#ffffff' }}>
              {podcast.pod_title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0', mb: 1 }}>
              {new Date(podcast.pod_date).toLocaleDateString()}
            </Typography>
            {podcast.movie?.movie_title && (
              <Typography variant="body2" sx={{ color: '#90caf9' }}>
                Movie: {podcast.movie.movie_title}
              </Typography>
            )}
          </Box>
          <IconButton
            onClick={handleClose}
            sx={{ color: '#ffffff', ml: 1 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Audio Player */}
        <Box sx={{ mb: 3 }}>
          {!useNativePlayer ? (
            <ReactPlayer
              url={podcast.pod_link}
              playing={playing}
              onProgress={handleProgress}
              onDuration={handleDuration}
              width="100%"
              height="60px"
              controls={false}
              config={{
                file: {
                  attributes: {
                    controls: false,
                    preload: 'metadata',
                  },
                },
              }}
              onReady={() => console.log('ReactPlayer ready')}
              onError={(error) => {
                console.log('ReactPlayer error:', error);
                setUseNativePlayer(true);
              }}
            />
          ) : (
            <audio
              ref={audioRef}
              src={podcast.pod_link}
              onTimeUpdate={handleNativeProgress}
              onLoadedMetadata={handleNativeDuration}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onError={(e) => {
                console.error('Audio error:', e);
                setAudioError('Failed to load audio');
              }}
              onLoadStart={() => console.log('Audio loading started')}
              onCanPlay={() => console.log('Audio can play')}
              onCanPlayThrough={() => console.log('Audio can play through')}
              preload="metadata"
              crossOrigin="anonymous"
            />
          )}
          
          {/* Advanced Controls */}
          <Box sx={{ mt: 2 }}>
            {/* Main Controls */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <IconButton
                onClick={handleRewind}
                sx={{
                  color: '#90caf9',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                }}
              >
                <FastRewind />
              </IconButton>
              
              <IconButton
                onClick={handlePlayPause}
                sx={{
                  color: '#90caf9',
                  backgroundColor: '#2d2d2d',
                  '&:hover': {
                    backgroundColor: '#3d3d3d',
                  },
                }}
              >
                {playing ? <Pause /> : <PlayArrow />}
              </IconButton>
              
              <IconButton
                onClick={handleFastForward}
                sx={{
                  color: '#90caf9',
                  '&:hover': { backgroundColor: '#2d2d2d' },
                }}
              >
                <FastForward />
              </IconButton>
              
              <Typography variant="body2" sx={{ color: '#b0b0b0', minWidth: 80, ml: 2 }}>
                {formatTime(progress * duration)} / {formatTime(duration)}
              </Typography>
            </Box>

            {/* Seek Bar */}
            <Box sx={{ mb: 2 }}>
              <Slider
                value={progress * 100}
                onChange={handleSeek}
                onChangeCommitted={handleSeekEnd}
                onMouseDown={handleSeekStart}
                sx={{
                  color: '#ffffff',
                  height: 8,
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#ffffff',
                    width: 20,
                    height: 20,
                    border: '2px solid #90caf9',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      boxShadow: '0 0 0 8px rgba(144, 202, 249, 0.16)',
                    },
                    '&.Mui-focusVisible': {
                      boxShadow: '0 0 0 8px rgba(144, 202, 249, 0.16)',
                    },
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: '#ffffff',
                    height: 8,
                    border: 'none',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#444444',
                    height: 8,
                    opacity: 1,
                  },
                }}
              />
            </Box>

          </Box>
        </Box>


        {/* Description */}
        {podcast.pod_desc && (
          <Typography
            variant="body2"
            sx={{
              color: '#b0b0b0',
              lineHeight: 1.6,
              maxHeight: 200,
              overflow: 'auto',
            }}
          >
            {podcast.pod_desc}
          </Typography>
        )}
      </Paper>
    </Modal>
  );
};

export default PodcastPlayerModal;
