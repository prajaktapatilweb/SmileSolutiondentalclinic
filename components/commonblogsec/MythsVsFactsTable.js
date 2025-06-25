import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const mythsFactsData = [
  { myth: 'Implants are painful', fact: 'The procedure is performed under anesthesia and is usually pain-free' },
  { myth: 'Only young people can get implants', fact: 'Age is not a barrier; bone and health matter more' },
  { myth: 'They require too much maintenance', fact: 'Basic brushing, flossing, and check-ups are enough' },
  { myth: 'Implants are risky', fact: 'Risks are minimal with an experienced implantologist' },
  { myth: 'They’re just cosmetic', fact: 'They prevent bone loss and restore full oral function' },
];

const MythsVsFactsTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: 'auto', mt: 4 }}>
     
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
          <TableRow>
            <TableCell><strong>Myth</strong></TableCell>
            <TableCell><strong>Fact</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mythsFactsData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.myth}</TableCell>
              <TableCell>{row.fact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MythsVsFactsTable;
