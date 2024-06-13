import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import JobCard from './JobCard';
import { fetchJobs } from 'api/job';

const Jobs = () => {
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {isLoading ? (
        <Grid item xs={12} md={4}>
          <JobCard isLoading={isLoading} />
        </Grid>
      ) : (
        jobs.map((job) => (
          <Grid item xs={12} md={4} key={job.id}>
            <JobCard isLoading={isLoading} job={job} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Jobs;
