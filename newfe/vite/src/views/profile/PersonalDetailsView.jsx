import React from 'react';
// material UI
import { Grid, TextField, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/lab';

// assets
import TodayIcon from '@mui/icons-material/Today';

// project import
import Gender from './personaldetail-items/gender';
import NATIONALITIES from './personaldetail-items/nationality';

const PersonalDetailView = ({ info }) => {
  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          value={info.firstName}
          disabled
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          value={info.lastName}
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Email"
          value={info.email}
          disabled
        />
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="Date of Birth"
          inputFormat="dd/MM/yyyy"
          value={info.dob}
          disabled
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <TodayIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          label="Gender"
          value={info.gender}
          disabled
        >
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Phone Number"
          value={info.phoneNumber}
          disabled
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Nationality"
          value={info.nationality}
          disabled
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Country of Residence"
          value={info.countryOfResidence}
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Social"
          value={info.social}
          disabled
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetailView;