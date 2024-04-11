import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Grid, Button, Divider, Box, Typography, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const pages = ['Jobs', 'Profile', 'Interview rehearsal'];

const TalentJobDetail = () => {
  const [job, setJob] = useState(null);
  const [company, setCompany] = useState(null);
  const [applied, setApplied] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // // Function to fetch job using axios
  const fetchJob = async () => {
    const _jobId = new URLSearchParams(window.location.search).get('id');
    const _companyId = new URLSearchParams(window.location.search).get('companyId');
    const url = `https://localhost:7049/api/Job/${_jobId}?companyId=${_companyId}`


    try {
      const response = await axios.get(url);
      setJob(response.data); // Axios automatically handles converting JSON data
      setIsLoading(false);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
      setIsLoading(false);
    }
  };
  const fetchCompany = async () => {
    try {
      const _companyId = new URLSearchParams(window.location.search).get('companyId');
      const companyUrl = `https://localhost:7049/api/Company/${_companyId}`;
      const response = await axios.get(companyUrl);
      setCompany(response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false); // Set loading to false after both fetches are complete or failed
    }
  };
  const handleApplyClick = () => {
    // You may want to implement the application logic here
    setApplied(true); // Update the applied state to true
  };

  // useEffect to call fetchJob when the component mounts
  useEffect(() => {
    fetchJob();
    fetchCompany();
  }, []);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      <Header pages={pages}/>
      
      <Box
        sx={{
          width: matches ? '75%' : '100%', // Use full width for smaller screens
          margin: 'auto', // This will center the Box
          marginTop: 2,
          padding: theme.spacing(3), // Use theme spacing for consistent padding
          boxShadow: 3, // Apply some box-shadow for card-like appearance
          borderRadius: theme.shape.borderRadius, // Use theme border radius
        }}
      >
         {isLoading && <p>Loading job...</p>}
      {error && <p>Error: {error}</p>}
      {job && company &&(
        <Box sx={{ padding: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <div>
                  <Typography variant="h5" component="h1" gutterBottom>
                    Python Developer
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {company.companyName} · {job.details.workplaceLocation}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip label="2 days ago" size="small" />
                    <Chip label="53 applicants" size="small" />
                  </Stack>
                </div>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ backgroundColor: applied ? 'green' : 'primary.main', '&:hover': { backgroundColor: applied ? 'darkgreen' : 'primary.dark' } }}
                  onClick={handleApplyClick}
                  disabled={applied} // Optionally disable the button after clicking
                >
                  {applied ? 'Applied' : 'Apply'}
                </Button>
                <Button variant="outlined" size="large">Save</Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1">
                <strong>Position: </strong> {job.generalInfo.position}
              </Typography>
              <Typography variant="body1">
                <strong>Work location: </strong> {job.details.workplaceLocation}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Position Overview:</strong>
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'justify' }}>
                {job.details.jobDescription}
              </Typography>
              <Typography variant="body1" gutterBottom >
                <strong>Qualifications:</strong>
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'justify' }}>
                {job.details.candidateRequirements}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      </Box>
    </div>
  );
};
export default TalentJobDetail;
