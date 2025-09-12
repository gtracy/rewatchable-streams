import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './DataTable.css';

const DataTable = ({ data, isLoading, error }) => {
  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'pod_date',
        header: 'Podcast',
        size: 400,
        enableColumnFilter: true,
        Cell: ({ cell, row }) => {
          const title = row.original.pod_title;
          const date = new Date(cell.getValue());
          const imageUrl = row.original.movie?.imageSet;
          
          return (
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              {/* Movie Poster and Title */}
              <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Movie poster"
                    style={{
                      height: '100px',
                      width: '70px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: '100px',
                      width: '70px',
                      backgroundColor: '#2d2d2d',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                      fontSize: '0.75rem',
                      textAlign: 'center',
                    }}
                  >
                    No Image
                  </Box>
                )}
                
                {/* Movie Title with IMDB Link */}
                <Box sx={{ marginTop: '6px', maxWidth: '70px' }}>
                  {row.original.movie?.imdb_id ? (
                    <a 
                      href={`https://www.imdb.com/title/${row.original.movie.imdb_id}/`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#90caf9',
                        textDecoration: 'none',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        display: 'block',
                        textAlign: 'center',
                        lineHeight: 1.2,
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.textDecoration = 'none';
                      }}
                    >
                      {row.original.movie?.movie_title || 'Unknown Movie'}
                    </a>
                  ) : (
                    <span style={{ 
                      fontSize: '0.75rem', 
                      color: '#b0b0b0',
                      textAlign: 'center',
                      display: 'block'
                    }}>
                      {row.original.movie?.movie_title || 'Unknown Movie'}
                    </span>
                  )}
                </Box>
              </Box>
              
              {/* Podcast Title and Date */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ fontWeight: 500, marginBottom: '4px', lineHeight: 1.3 }}>
                  {title}
                </Box>
                <Box sx={{ fontSize: '0.75rem', color: '#b0b0b0' }}>
                  {date.toLocaleDateString()}
                </Box>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: 'movie.releaseYear',
        header: 'Movie Year',
        size: 80,
        enableColumnFilter: true,
      },
      {
        accessorKey: 'movie.streamingOptions',
        header: 'Streams',
        size: 250,
        Cell: ({ cell }) => {
          const streamingOptions = cell.getValue() || [];
          
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
              {streamingOptions.map((option, index) => {
                const serviceName = option.serviceName || 'Unknown';
                const iconUrl = option.serviceImageSet?.darkThemeImage;
                const themeColor = option.serviceThemeColorCode || '#444';
                const type = option.type;
                const price = option.price;
                
                // Determine cost display text
                let costText = '';
                if (type === 'rent' && price?.amount) {
                  costText = `$${price.amount}`;
                } else if (type === 'subscription') {
                  costText = 'Subscription';
                } else if (type) {
                  costText = 'fixme';
                }
                
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    {/* Left side: Service Icon and Cost */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {/* Service Icon */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          backgroundColor: '#2d2d2d',
                          borderRadius: '8px',
                          border: `1px solid ${themeColor}`,
                          width: '36px',
                          height: '36px',
                          flexShrink: 0,
                        }}
                      >
                        {iconUrl ? (
                          <img
                            src={iconUrl}
                            alt={serviceName}
                            style={{
                              height: '24px',
                              width: '24px',
                              objectFit: 'contain',
                              backgroundColor: 'transparent',
                            }}
                            onError={(e) => {
                              // Fallback to text if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : null}
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: '#ffffff',
                            display: iconUrl ? 'none' : 'block',
                          }}
                        >
                          {serviceName}
                        </span>
                      </Box>
                      
                      {/* Cost Text */}
                      {costText && (
                        <Box
                          sx={{
                            fontSize: '0.75rem',
                            color: '#b0b0b0',
                            fontWeight: 500,
                            minWidth: 'fit-content',
                          }}
                        >
                          {costText}
                        </Box>
                      )}
                    </Box>
                    
                    {/* Watch Button */}
                    <a
                      href={option.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px 8px !important',
                          backgroundColor: '#1e1e1e',
                          borderRadius: '30px',
                          border: '1px solid #444',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          justifyContent: 'center',
                          '&:hover': {
                            backgroundColor: '#2a2a2a',
                            borderColor: '#666',
                          },
                        }}
                      >
                        <PlayCircleOutlineIcon 
                          sx={{ 
                            fontSize: '20px', 
                            color: '#90caf9' 
                          }} 
                        />
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            color: '#ffffff',
                            fontWeight: 500,
                          }}
                        >
                          Watch
                        </Typography>
                      </Box>
                    </a>
                  </Box>
                );
              })}
            </Box>
          );
        },
        enableColumnFilter: true,
      },
      {
        accessorKey: 'movie.genres',
        header: 'Genres',
        size: 200,
        Cell: ({ cell }) => {
          const genres = cell.getValue() || [];
          return genres.join(', ');
        },
        enableColumnFilter: true,
      },
      {
        accessorKey: 'movie.directors',
        header: 'Director',
        size: 200,
        Cell: ({ cell }) => {
          const directors = cell.getValue() || [];
          return directors.join(', ');
        },
        enableColumnFilter: true,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data || [],
    state: {
      isLoading,
    },
    enableRowSelection: false,
    enableColumnOrdering: false,
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableSorting: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,
    enableHiding: false,
    enableColumnActions: false,
    initialState: {
      density: 'comfortable',
      showGlobalFilter: true,
      showColumnFilters: true,
      sorting: [
        {
          id: 'pod_date',
          desc: true, // Sort in descending order (newest first)
        },
      ],
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: '600px',
        border: '1px solid #333',
        borderRadius: '4px',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#2d2d2d !important',
        color: '#ffffff !important',
        fontWeight: 500,
        fontSize: '0.875rem',
        padding: '8px 16px',
        '& .MuiInputBase-input': {
          fontSize: '0.75rem',
          color: '#ffffff !important',
        },
        '& .MuiInputBase-root': {
          fontSize: '0.75rem',
          color: '#ffffff !important',
          '& fieldset': {
            borderColor: '#555 !important',
          },
          '&:hover fieldset': {
            borderColor: '#777 !important',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#90caf9 !important',
          },
        },
        '& .MuiTableSortLabel-root': {
          color: '#ffffff !important',
          '&:hover': {
            color: '#90caf9 !important',
          },
          '&.Mui-active': {
            color: '#90caf9 !important',
          },
        },
        '& .MuiSvgIcon-root': {
          color: '#ffffff !important',
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        fontSize: '0.875rem',
        padding: '8px 16px',
      },
    },
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        '&:hover': {
          backgroundColor: '#2d2d2d',
        },
      },
    }),
        muiTableProps: {
          sx: {
            '& .MuiTableHead-root': {
              backgroundColor: '#2d2d2d !important',
            },
            '& .MuiTableHead-root .MuiTableCell-root': {
              backgroundColor: '#2d2d2d !important',
              color: '#ffffff !important',
              borderBottom: '1px solid #333 !important',
            },
            '& .MuiTableHead-root .MuiTableCell-root .MuiInputBase-input': {
              color: '#ffffff !important',
            },
            '& .MuiTableHead-root .MuiTableCell-root .MuiInputBase-root': {
              color: '#ffffff !important',
            },
            '& .MuiTableHead-root .MuiTableCell-root .MuiTableSortLabel-root': {
              color: '#ffffff !important',
            },
            '& .MuiTableHead-root .MuiTableCell-root .MuiSvgIcon-root': {
              color: '#ffffff !important',
            },
          },
        },
    muiToolbarAlertBannerProps: error
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
  });

  if (error) {
    return (
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography color="error" variant="h6">
          Error loading data: {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Podcast & Movie Data
      </Typography>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default DataTable;
