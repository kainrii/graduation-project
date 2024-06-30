import React from 'react';
// material UI
import { Grid, TextField, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/lab';
import MuiTypography from '@mui/material/Typography';


// assets

import PlaceIcon from '@mui/icons-material/Place';

// project import
import { calculateAge } from 'utils/age';

const PersonalDetailView = ({ info }) => {
  console.log(info);
  return (
    <Grid container spacing={2} direction="row"sx={{paddingLeft:4}}>
      <Grid item xs={24} sm={12}>
        <MuiTypography variant="h1">{info.firstName} {info.lastName}</MuiTypography>
      </Grid>
      <Grid item xs={24} sm={12}>
        <MuiTypography variant="h2">{calculateAge(info.dob)}, {info.gender} ,{info.nationality}</MuiTypography>
      </Grid>
      <Grid item xs={24} sm={12}>
       <MuiTypography variant="h4" sx={{color:"grey.500" }}>{info.address}</MuiTypography>
      </Grid>
      <Grid item xs={24} sm={6}>
        <MuiTypography variant="h4" sx={{color:"grey.500" }}>Email: {info.email}</MuiTypography>
      </Grid>
      <Grid item xs={24} sm={6}>
        <MuiTypography variant="h4" sx={{color:"grey.500" }}>Phone: {info.phone}</MuiTypography>
      </Grid>
      
    </Grid>
  );
};

export default PersonalDetailView;