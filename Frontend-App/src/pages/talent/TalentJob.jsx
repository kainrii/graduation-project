import React from 'react';
import { Grid, Button, Divider } from '@mui/material';
import Header from '../../components/Header';
import JobCard from '../../components/Card/JobCard';
import SearchBox from '../../components/Search/SearchBox';
import Filter from '../../components/Search/Filter';
import SearchIcon from '@mui/icons-material/Search'; 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const pages = ['Jobs', 'Profile', 'Interview rehearsal'];

const TalentJob = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Header pages={pages}/>
      
      <Grid container spacing={2} style={{ maxWidth: 1200, width: '100%', marginTop: 20 }}>

        {/* Search and Filter Row */}
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8} md={5.5}  style={{paddingLeft:"0px"}}>
              <SearchBox  />
            </Grid>
            <Grid item xs={6} sm={2} md={2.5}>
              <Filter/>
            </Grid>
            <Grid item xs={6} sm={2} md={2.5}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={4} md={1.5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" startIcon={<SearchIcon />} style={{ height: '56px' ,backgroundColor:"var(--dark-navy)"}}>Search</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{paddingLeft:"0px"}}>
          <Divider style={{ width: '100%', margin: '20px 0' }} />
        </Grid>

       {/* Dynamic Job Cards Grid */}
       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(9)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <JobCard />
            </Grid>
          ))}
        </Grid>

      {/* Pagination*/}
      <Grid item xs={12} justifyItems={'right'}>
        <Stack spacing={2} style={{float:"right"}}>
          <Pagination count={10} shape="rounded"  />
        </Stack>
      </Grid>
    </Grid>
    </div>
  );
};

export default TalentJob;
