import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Typography } from '@mui/material';
import './DataTable.css';

const DataTable = ({ data, isLoading, error }) => {
  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 80,
        enableColumnFilter: false,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 200,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 250,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 120,
        Cell: ({ cell }) => (
          <Box
            sx={{
              backgroundColor: cell.getValue() === 'Active' ? '#4caf50' : '#f44336',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {cell.getValue()}
          </Box>
        ),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        size: 150,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        size: 150,
        Cell: ({ cell }) => {
          const date = new Date(cell.getValue());
          return date.toLocaleDateString();
        },
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
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    enableColumnFilters: true,
    enableSorting: true,
    enableDensityToggle: true,
    enableFullScreenToggle: true,
    enableHiding: true,
    initialState: {
      density: 'comfortable',
      showGlobalFilter: true,
      showColumnFilters: true,
    },
    muiTableContainerProps: {
      sx: {
        maxHeight: '600px',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: '#fafafa',
        fontWeight: 500,
        fontSize: '0.875rem',
        padding: '8px 16px',
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
          backgroundColor: '#f5f5f5',
        },
      },
    }),
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
        Data Table
      </Typography>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default DataTable;
