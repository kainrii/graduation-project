import React, { useState } from 'react';
// material UI
import { Grid, TextField, Select, MenuItem, Menu, Button, IconButton, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/lab';

//assets
import TodayIcon from '@mui/icons-material/Today';

//project import

import Gender from './personaldetail-items/gender';
import NATIONALITIES from './personaldetail-items/nationality';

const PersonalDetailEdit = () => {
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: null,
    gender: '',
    phoneNumber: '',
    nationality: '',
    countryOfResidence: '',
    social: '',
  });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (name) => (event) => {
    setInfo({ ...info, [name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setInfo({
      ...info,
      dob: date,
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNationalityChange = (nationality) => {
    setInfo({ ...info, nationality });
    handleClose();
  };

  const handleSubmit = () => {
    console.log(info);
  };

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={info.firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={info.lastName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={info.email}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="Date of Birth"
          inputFormat="dd/MM/yyyy"
          value={info.dob}
          onChange={handleDateChange}
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
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          filterDate={(date) => date >= new Date()} // disable dates before today
        />
      </Grid>
      <Grid item xs={3}>
        <Select
          fullWidth
          label="Gender"
          name="gender"
          value={info.gender}
          onChange={handleChange}
        >
          <MenuItem value={Gender.MALE}>{Gender.MALE}</MenuItem>
          <MenuItem value={Gender.FEMALE}>{Gender.FEMALE}</MenuItem>
          <MenuItem value={Gender.OTHER}>{Gender.OTHER}</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={info.phoneNumber}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={4}>
          <TextField
            fullWidth
            label="Nationality"
            value={info.nationality}
            onClick={handleClick}
          />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {Object.values(NATIONALITIES).map(({ index, name }) => (
              <MenuItem key={index} onClick={() => handleNationalityChange(name)}>
                {name}
              </MenuItem>
            ))}
          </Menu>

      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Country of Residence"
          name="countryOfResidence"
          value={info.countryOfResidence}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Social"
          name="social"
          value={info.social}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default PersonalDetailEdit;