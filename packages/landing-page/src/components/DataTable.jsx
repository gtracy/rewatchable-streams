import React, { useMemo, useState, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PodcastPlayerModal from './PodcastPlayerModal';
import { trackPodcastPlay, trackDirectorClick, trackActorClick, trackStreamingClick, trackSearch } from '../utils/analytics';
import { sanitizeHttpUrl, sanitizeHexColor, sanitizeImdbId } from '../utils/sanitize';
import './DataTable.css';

const URL_FILTER_MAP = [
  { param: 'director', columnId: 'movie.directors' },
  { param: 'actor', columnId: 'movie.cast' },
  { param: 'service', columnId: 'movie.streamingOptions' },
];

const getInitialGlobalFilter = () => {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('search') || '';
};

const getInitialColumnFilters = () => {
  if (typeof window === 'undefined') return [];
  const params = new URLSearchParams(window.location.search);
  return URL_FILTER_MAP.reduce((acc, { param, columnId }) => {
    const value = params.get(param);
    if (value) {
      acc.push({ id: columnId, value });
    }
    return acc;
  }, []);
};

const DataTable = ({ data, isLoading, error }) => {
  // Modal state for podcast player
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(getInitialGlobalFilter);
  const [columnFilters, setColumnFilters] = useState(getInitialColumnFilters);

  useEffect(() => {
    const trimmed = typeof globalFilter === 'string' ? globalFilter.trim() : '';
    if (trimmed) {
      trackSearch(trimmed);
    }
  }, [globalFilter]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const searchValue = typeof globalFilter === 'string' ? globalFilter.trim() : '';

    if (searchValue) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    URL_FILTER_MAP.forEach(({ param, columnId }) => {
      const match = columnFilters.find((filter) => filter.id === columnId);
      const value = typeof match?.value === 'string' ? match.value.trim() : '';
      if (value) {
        params.set(param, value);
      } else {
        params.delete(param);
      }
    });

    const queryString = params.toString();
    const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, '', nextUrl);
    }
  }, [globalFilter, columnFilters]);

  const handlePodcastClick = (podcast) => {
    setSelectedPodcast(podcast);
    setModalOpen(true);
    trackPodcastPlay(podcast.pod_title, podcast.movie?.movie_title);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPodcast(null);
  };

  const handleDirectorClick = (directorName, table) => {
    // Update/replace only the director column filter while preserving other active column filters
    table.setColumnFilters((prev = []) => [
      ...prev.filter((filter) => filter.id !== 'movie.directors'),
      {
        id: 'movie.directors',
        value: directorName,
      },
    ]);
    trackDirectorClick(directorName);
  };

  const handleActorClick = (actorName, table) => {
    // Update/replace only the actors column filter while preserving other active column filters
    table.setColumnFilters((prev = []) => [
      ...prev.filter((filter) => filter.id !== 'movie.cast'),
      {
        id: 'movie.cast',
        value: actorName,
      },
    ]);
    trackActorClick(actorName);
  };

  // Process data to add searchable text field
  const processedData = useMemo(() => {
    if (!data) return [];
    
    return data.map(item => {
      const searchableValues = [];
      
      // Add podcast title
      if (item.pod_title) {
        searchableValues.push(item.pod_title.toLowerCase());
      }
      
      // Add movie title
      if (item.movie?.movie_title) {
        searchableValues.push(item.movie.movie_title.toLowerCase());
      }
      
      // Add podcast date
      if (item.pod_date) {
        const date = new Date(item.pod_date);
        searchableValues.push(date.toLocaleDateString().toLowerCase());
      }
      
      // Add movie year
      if (item.movie?.releaseYear) {
        searchableValues.push(`movie year: ${item.movie.releaseYear}`.toLowerCase());
      }
      
      // Add directors
      if (item.movie?.directors) {
        const directors = Array.isArray(item.movie.directors) 
          ? item.movie.directors 
          : [];
        searchableValues.push(directors.join(', ').toLowerCase());
      }
      
      // Add actors
      if (item.movie?.cast) {
        const cast = Array.isArray(item.movie.cast) 
          ? item.movie.cast 
          : [];
        searchableValues.push(cast.join(', ').toLowerCase());
      }
      
      // Add streaming service names and costs
      if (item.movie?.streamingOptions) {
        item.movie.streamingOptions.forEach(option => {
          if (option.serviceName) {
            searchableValues.push(option.serviceName.toLowerCase());
          }
          if (option.type === 'rent' && option.price?.amount) {
            searchableValues.push(`$${option.price.amount}`);
          } else if (option.type === 'subscription') {
            searchableValues.push('subscription');
          } else if (option.type === 'free') {
            searchableValues.push('free!');
          } else if (option.type === 'addon') {
            searchableValues.push('premium');
          }
        });
      }
      
      return {
        ...item,
        searchableText: searchableValues.join(' ')
      };
    });
  }, [data]);

  // Define columns for the table
  const columns = useMemo(
    () => [
      // Hidden column for global search
      {
        accessorKey: 'searchableText',
        header: 'Searchable Text',
        enableHiding: true,
        enableSorting: false,
        enableColumnFilter: false,
        Cell: () => null, // Don't render anything
      },
      {
        accessorKey: 'pod_date',
        header: 'Podcast Date',
        size: 400,
        enableColumnFilter: true,
        sortingFn: 'datetime',
        Cell: ({ cell, row }) => {
          const title = row.original.pod_title || 'Untitled Episode';
          const date = new Date(cell.getValue());
          const imageUrl = sanitizeHttpUrl(row.original.movie?.imageSet);
          const validImdbId = sanitizeImdbId(row.original.movie?.imdb_id);
          
          return (
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              {/* Movie Poster and Title */}
              <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
                {imageUrl ? (
                  <Box
                    sx={{
                      height: '156px',
                      width: '109px',
                      aspectRatio: '109 / 156',
                      backgroundColor: '#2d2d2d',
                      borderRadius: '6px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt={`${row.original.movie?.movie_title || 'Movie'} poster - ${title} podcast episode`}
                      width="109"
                      height="156"
                      loading="lazy"
                      style={{
                        display: 'block',
                        height: '156px', // 25% bigger than 125px
                        width: '109px', // 25% bigger than 87.5px
                        aspectRatio: '109 / 156',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      }}
                      onError={(e) => {
                        e.target.style.visibility = 'hidden';
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      height: '156px', // Match new size
                      width: '109px', // Match new size
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
                <Box sx={{ marginTop: '6px', maxWidth: '109px' }}> {/* Match new width */}
                  {validImdbId ? (
                    <a 
                      href={`https://www.imdb.com/title/${validImdbId}/`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        color: '#90caf9',
                        textDecoration: 'none',
                        fontSize: '0.7rem',
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
                      fontSize: '0.7rem', 
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
                   <Box
                     component="button"
                     type="button"
                     onClick={() => handlePodcastClick(row.original)}
                     sx={{
                       background: 'none',
                       border: 'none',
                       padding: 0,
                       font: 'inherit',
                       textAlign: 'left',
                       color: '#ffffff',
                       cursor: 'pointer',
                       fontWeight: 500,
                       marginBottom: '4px',
                       lineHeight: 1.3,
                       '&:hover': {
                         color: '#b0b0b0',
                       },
                     }}
                   >
                     {title.split(' ').map((word, index, array) => (
                       <React.Fragment key={index}>
                         {word}
                         {index === array.length - 1 && (
                           <PlayCircleOutlineIcon 
                             sx={{ 
                               fontSize: '1.6em',
                               color: 'inherit',
                               opacity: 0.7,
                               marginLeft: '4px',
                               verticalAlign: 'middle',
                             }} 
                           />
                         )}
                         {index < array.length - 1 && ' '}
                       </React.Fragment>
                     ))}
                   </Box>
                <Box sx={{ fontSize: '0.75rem', color: '#b0b0b0' }}>
                  {date.toLocaleDateString()}
                </Box>
                <Box sx={{ 
                  fontSize: '0.7rem', 
                  color: '#b0b0b0', 
                  fontStyle: 'italic',
                  textAlign: 'left',
                  marginTop: '2px'
                }}>
                  movie year: {row.original.movie?.releaseYear || 'Unknown'}
                </Box>
              </Box>
            </Box>
          );
        },
      },
      {
        accessorKey: 'movie.streamingOptions',
        header: 'Streams',
        size: 250,
        enableColumnFilter: true,
        filterFn: (row, id, filterValue) => {
          const streamingOptions = row.getValue(id) || [];
          const searchTerm = filterValue.toLowerCase();
          
          return streamingOptions.some(option => {
            // Check service name
            if (option.serviceName && option.serviceName.toLowerCase().includes(searchTerm)) {
              return true;
            }
            
            // Check streaming type
            if (option.type && option.type.toLowerCase().includes(searchTerm)) {
              return true;
            }
            
            // Check for "free" specifically
            if (searchTerm === 'free' && option.type === 'free') {
              return true;
            }
            
            // Check for "premium" for addon type
            if (searchTerm === 'premium' && option.type === 'addon') {
              return true;
            }
            
            // Check for "subscription" type
            if (searchTerm === 'subscription' && option.type === 'subscription') {
              return true;
            }
            
            return false;
          });
        },
        Cell: ({ cell, row }) => {
          const streamingOptions = cell.getValue() || [];
          
          return (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
              {streamingOptions.map((option, index) => {
                const serviceName = option.serviceName || 'Unknown';
                const iconUrl = sanitizeHttpUrl(option.serviceImageSet?.darkThemeImage);
                const themeColor = sanitizeHexColor(option.serviceThemeColorCode, '#444');
                const safeWatchUrl = sanitizeHttpUrl(option.link) || '#';
                const type = option.type;
                const price = option.price;
                
                // Determine cost display text
                let costText = '';
                if (type === 'rent' && price?.amount) {
                  costText = `$${price.amount}`;
                } else if (type === 'subscription') {
                  costText = 'Subscription';
                } else if (type === 'free') {
                  costText = 'Free!';
                } else if (type === 'addon') {
                  costText = 'Premium';
                } else if (typeof type === 'string' && type.length > 0) {
                  costText = type.charAt(0).toUpperCase() + type.slice(1);
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
                            referrerPolicy="no-referrer"
                            width="24"
                            height="24"
                            loading="lazy"
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
                      href={safeWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${row.original.movie?.movie_title || 'movie'} on ${serviceName}`}
                      style={{ textDecoration: 'none' }}
                      onClick={() => trackStreamingClick(serviceName, row.original.movie?.movie_title)}
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
      },
      {
        accessorKey: 'movie.directors',
        header: 'Director',
        size: 200,
        Cell: ({ cell, table }) => {
          const directors = cell.getValue() || [];
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {directors.map((director, index) => (
                <React.Fragment key={index}>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => handleDirectorClick(director, table)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      textAlign: 'left',
                      color: '#90caf9',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {director}
                  </Box>
                  {index < directors.length - 1 && <span style={{ color: '#90caf9' }}>, </span>}
                </React.Fragment>
              ))}
            </Box>
          );
        },
        enableColumnFilter: true,
        filterFn: (row, id, filterValue) => {
          const directors = row.getValue(id) || [];
          const directorString = directors.join(', ').toLowerCase();
          return directorString.includes(filterValue.toLowerCase());
        },
      },
      {
        accessorKey: 'movie.cast',
        header: 'Actors',
        size: 250,
        Cell: ({ cell, table }) => {
          const cast = cell.getValue() || [];
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {cast.map((actor, index) => (
                <React.Fragment key={index}>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => handleActorClick(actor, table)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      font: 'inherit',
                      textAlign: 'left',
                      color: '#90caf9',
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {actor}
                  </Box>
                  {index < cast.length - 1 && <span style={{ color: '#90caf9' }}>, </span>}
                </React.Fragment>
              ))}
            </Box>
          );
        },
        enableColumnFilter: true,
        filterFn: (row, id, filterValue) => {
          const cast = row.getValue(id) || [];
          const castString = cast.join(', ').toLowerCase();
          return castString.includes(filterValue.toLowerCase());
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: processedData,
    state: {
      isLoading,
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    enableRowSelection: false,
    enableColumnOrdering: false,
    enableGlobalFilter: true,
    enableColumnFilters: true,
    globalFilterFn: 'includesString',
    enableSorting: true,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    enableColumnActions: false,
    enableColumnVisibility: false,
    enableToolbarInternalActions: false,
    renderToolbarInternalActions: () => null,
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
      columnVisibility: {
        searchableText: false,
      },
    },
    muiTableContainerProps: {
      sx: {
        minHeight: '600px',
        maxHeight: '600px',
        border: 'none',
        borderRadius: '4px',
        boxShadow: 'none',
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
        border: '1px solid #444',
        borderRadius: '8px',
        margin: '8px 0',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#2d2d2d',
        },
        '& td:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '& td:last-of-type': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
    }),
    muiTableBodyProps: {
      sx: {
        '& .MuiTableRow-root': {
          marginBottom: '12px',
          '&:last-child': {
            marginBottom: '0',
          },
        },
        '& .MuiTableRow-root .MuiTableCell-root': {
          borderBottom: 'none',
        },
      },
    },
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
            '& .MuiTableBody-root .MuiTableRow-root': {
              boxShadow: 'none !important',
              '&:hover': {
                boxShadow: 'none !important',
              },
            },
            '& .MuiTableBody-root .MuiTableRow-root .MuiTableCell-root': {
              boxShadow: 'none !important',
              borderBottom: 'none !important',
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
      <MaterialReactTable table={table} />
      <PodcastPlayerModal
        open={modalOpen}
        onClose={handleCloseModal}
        podcast={selectedPodcast}
      />
    </Box>
  );
};

export default DataTable;
