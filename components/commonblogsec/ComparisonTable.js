import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const comparisonData = [
  { feature: 'Lifespan', implants: '15–25+ yrs', bridges: '5–10 yrs', dentures: '3–5 yrs' },
  { feature: 'Affects adjacent teeth', implants: '❌', bridges: '✅', dentures: '❌' },
  { feature: 'Bone preservation', implants: '✅', bridges: '❌', dentures: '❌' },
  { feature: 'Stability', implants: '✅', bridges: '✅', dentures: '⚠️ Can slip' },
  { feature: 'Looks & feels natural', implants: '✅', bridges: '✅', dentures: '⚠️ Variable' },
];

const ComparisonTable = () => {
  return (
    <TableContainer component={Paper} sx={{  margin: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ padding: 2, color: '#20509e' }}>
        🦷 Dental Solutions Comparison
      </Typography>
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
          <TableRow>
            <TableCell><strong>Feature</strong></TableCell>
            <TableCell><strong>Implants</strong></TableCell>
            <TableCell><strong>Bridges</strong></TableCell>
            <TableCell><strong>Dentures</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisonData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.feature}</TableCell>
              <TableCell>{row.implants}</TableCell>
              <TableCell>{row.bridges}</TableCell>
              <TableCell>{row.dentures}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;
