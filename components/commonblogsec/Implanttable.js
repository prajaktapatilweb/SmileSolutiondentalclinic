import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const implantData = [
  { type: 'Endosteal Implants', description: 'Most common, placed in the jawbone', bestFor: 'Patients with good bone volume' },
  { type: 'Subperiosteal Implants', description: 'Placed under gum, above jawbone', bestFor: 'Patients with low bone height' },
  { type: 'Zygomatic Implants', description: 'Anchored in cheekbone (zygomatic bone)', bestFor: 'Severe bone loss cases' },
  { type: 'Mini Implants', description: 'Smaller diameter, less invasive', bestFor: 'Temporary support or limited space areas' },
];

const Implanttable = () => {
  return (
    <TableContainer component={Paper} sx={{  margin: 'auto', mt: 4 }}>
      
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
          <TableRow>
            <TableCell><strong>Type</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
            <TableCell><strong>Best For</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {implantData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.bestFor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Implanttable;
