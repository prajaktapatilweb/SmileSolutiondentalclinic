import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const healingTimelineData = [
  { stage: 'Surgery & Implant Placement', timeframe: 'Day 1' },
  { stage: 'Initial Healing', timeframe: '7–10 days' },
  { stage: 'Osseointegration', timeframe: '3–6 months' },
  { stage: 'Final Crown Placement', timeframe: 'After healing' },
];

const HealingTimelineTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: 'auto', mt: 4 }}>
     
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
          <TableRow>
            <TableCell><strong>Stage</strong></TableCell>
            <TableCell><strong>Timeframe</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {healingTimelineData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.stage}</TableCell>
              <TableCell>{row.timeframe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HealingTimelineTable;
