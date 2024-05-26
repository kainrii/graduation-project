import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';

import JobCard from './JobCard';

const Jobs = () => {
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null); // State to handle any error

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const url = `https://localhost:7049/api/Job/`;
    try {
      const response = await axios.get(url);
      setJobs(response.data); // Assuming the API returns an array of jobs
      setLoading(false);
      console.log("loaded",response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      setLoading(false);
    }
  };

  return (
    <Grid container spacing={gridSpacing}>
      {isLoading ? (
        <Grid item xs={12} md={4}>
          <JobCard isLoading={isLoading}/>
        </Grid>
      ) : (
        jobs.map((job) => (
          <Grid item xs={12} md={4} key={job.id}>
            <JobCard isLoading={isLoading} job={job}/>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default Jobs;
