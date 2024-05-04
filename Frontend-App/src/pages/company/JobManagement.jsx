import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Button, Divider } from '@mui/material';
import Header from '../../components/Header';
import SearchBox from '../../components/Search/SearchBox';
import Filter from '../../components/Search/Filter';
import SearchIcon from '@mui/icons-material/Search'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { Modal, Box, Typography, TextField } from '@mui/material';
import JobCreate from './JobCreate';
const pages =["Job Management", "Talents"];
const companyId = new URLSearchParams(window.location.search).get('id');


const JobManagement = () => {
    const [jobs, setJobs] = useState([]); // State to store the jobs
    const [isLoading, setIsLoading] = useState(true); // State to handle the loading state
    const [error, setError] = useState(null); // State to handle any error
    const [open, setOpen] = useState(false); // State to manage modal visibility
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
     // Function to fetch all jobs using axios
     const fetchJobs = async () => {
      const url = `https://localhost:7049/api/Job/by-company/${companyId}`;
      try {
        const response = await axios.get(url);
        setJobs(response.data); // Assuming the API returns an array of jobs
        setIsLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        setIsLoading(false);
      }
    };
    const createJob = async () => {
        const url = `https://localhost:7049/api/Job`;
        const jobData = {

        };

        try {
            setIsLoading(true);
            const response = await axios.post(url, jobData);
            alert('Job created successfully'); // Or handle successful creation differently
            console.log(response.data); // Optional: log data or handle it
            // Reset form or redirect user, etc.

        } catch (error) {
            console.error('Failed to create the job:', error);
            alert('Failed to create the job');
        } finally {
            setIsLoading(false);
        }
      };
    // useEffect to call fetchJobs when the component mounts
    useEffect(() => {
      fetchJobs();
    }, []);

    const deleteJob = async (jobId) =>{
        if (window.confirm('Are you sure you want to delete this job?')) {
            const url = `https://localhost:7049/api/Job/${jobId}`;
            try {
                await axios.delete(url);
                fetchJobs(); // Update the state locally
                alert('Job deleted successfully');
            } catch (error) {
                console.error('Failed to delete the job:', error);
                alert('Failed to delete the job');
            }
        }
    };


  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Header pages={pages}/>
        
        <Grid container spacing={2} style={{ maxWidth: 1200, width: '100%', marginTop: 20 }}>
  
          {/* Search and Filter Row */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={8} md={5.5}  style={{paddingLeft:"0px"}}>
              </Grid>
              <Grid item xs={6} sm={2} md={2.5}>
              </Grid>
              <Grid item xs={6} sm={2} md={2.5}>
              </Grid>
              <Grid item xs={12} sm={4} md={1.5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={handleOpen} variant='contained'>Create Job</Button>
                {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="create-job-modal-title"
                    aria-describedby="create-job-modal-description"
                >
                   <JobCreate/>
                </Modal> */}
              </Grid>
            </Grid>
          </Grid>
  
          <Grid item xs={12} style={{paddingLeft:"0px"}}>
            <Divider style={{ width: '100%', margin: '20px 0' }} />
          </Grid>
  
        {/* Dynamic Job Cards Grid */}
        {isLoading ? (<p>Loading jobs...</p>) 
        : error ? (<p>Error fetching jobs: {error}</p>) 
        : (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow  >
                            <TableCell sx={{fontWeight: 700}}>Job Name</TableCell>
                            <TableCell sx={{fontWeight: 700}} align="right">Status</TableCell>
                            <TableCell sx={{fontWeight: 700}} align="right">Applicants</TableCell>
                            <TableCell sx={{fontWeight: 700}} align="right">Last update</TableCell>
                            <TableCell sx={{fontWeight: 700}} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {jobs.map((job, index) =>(
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row"> {job.jobName}</TableCell>
                                <TableCell align="right">{job.isActive}</TableCell>
                                <TableCell align="right">{job.applicant}</TableCell>
                                <TableCell align="right">{job.updateAt}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="delete-job" onClick={() => deleteJob(job.jobId)}>                                       
                                        <DeleteIcon sx={{color: red[500], paddingRight: "2px"}}/>
                                    </IconButton>
                                    <IconButton aria-label="edit-job" >                                                                             
                                        <EditIcon  sx={{paddingLeft: "2px"}}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}    
                    </TableBody>
                </Table>
            </TableContainer>


        )}
  
      </Grid>
      </div>
    );
}

export default JobManagement

