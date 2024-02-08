import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'scenrioName',
    headerName: 'Scenrio Name',
    width: 150,
    editable: true,
  },
  {
    field: 'inputFile',
    headerName: 'Input File',
    width: 150,
    editable: true,
    renderCell: (params) => (
      <FileDownloadIcon color="primary" />
    ),
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 160,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
];

const rows = [
  { id: 1, scenrioName: 'Snow', model: 'Capacity Simulation', status: 'success' },
  { id: 2, scenrioName: 'Lannister', model: 'Capacity Simulation', status: 'success' },
  { id: 3, scenrioName: 'Lannister', model: 'Capacity Simulation', status: 'success'},
  { id: 4, scenrioName: 'Stark', model: 'Capacity Simulation', status: 'success' },
  { id: 5, scenrioName: 'Targaryen', model: 'Capacity Simulation', status: 'success' },
  { id: 6, scenrioName: 'Melisandre', model: 'Capacity Simulation', status: 'success' },
];

export default function DataGridDemonew() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}