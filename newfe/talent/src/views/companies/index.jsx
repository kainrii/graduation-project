import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import CompanyCard from './CompanyCard';
import { fetchCompanies } from 'api/company';

const Companies = () => {
  const [isLoading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null); // State to handle any error

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const response = await fetchCompanies();
        setCompanies(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCompaniesData();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {companies.map((company, index) => (
        <Grid item xs={12} md={4} key={index}>
          <CompanyCard company={company} isLoading={isLoading} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Companies;