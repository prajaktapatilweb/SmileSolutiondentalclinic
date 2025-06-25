import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';

const implantCostData = [
  { type: 'Standard Titanium Implant', cost: '₹25,000 – ₹45,000' },
  { type: 'Premium/Imported Implants', cost: '₹50,000 – ₹75,000' },
  { type: 'Full Mouth Implants', cost: '₹2,00,000 – ₹7,00,000' },
  { type: 'Zygomatic Implants', cost: '₹80,000 – ₹1,50,000' },
];

const DentalImplantCostTable = () => {
  return (
    <TableContainer component={Paper} sx={{ margin: 'auto', mt: 4 }}>
      
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
          <TableRow>
            <TableCell><strong>Type of Implant</strong></TableCell>
            <TableCell><strong>Estimated Cost (per implant)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {implantCostData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>
     <b> Note:</b> Costs may vary by brand, bone grafting needs, sedation type, and location. Some clinics also offer EMI plans or insurance coverage options.
    </TableContainer>
  );
};

export default DentalImplantCostTable;
