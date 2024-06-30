import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { generatePdfForProfile } from 'utils/generatepdf';

import MainCard from 'ui-component/cards/MainCard';

const CompanyInfo = (id) => {
//   const { id } = useParams();

  const handleGeneratePdf = async () => {
    await generatePdfForProfile(id);
  };

  return (
    <MainCard title="Interview">
      <Button variant="contained" onClick={handleGeneratePdf}>
        Generate PDF
      </Button>
    </MainCard>
  );
};


export default CompanyInfo;