import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  Menu,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import TodayIcon from '@mui/icons-material/Today';
import Gender from './personaldetail-items/gender';
import NATIONALITIES from './personaldetail-items/nationality';

const PersonalDetailEdit = ({ info: initialInfo, onCancel, onSubmit }) => {
  const url = 'https://localhost:7049/api/TalentProfiles/personal-details/665ed90b132bbd277663f6c4';
  const [anchorEl, setAnchorEl] = useState(null);
  const [formInfo, setFormInfo] = useState({ ...initialInfo });
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name) => (event) => {
    setFormInfo({ ...formInfo, [name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormInfo({ ...formInfo, dob: date });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNationalityChange = (nationality) => {
    setFormInfo({ ...formInfo, nationality });
    handleClose();
  };

  const handleFormSubmit = () => {
    setConfirmationOpen(true);
  };

  const handleSubmitConfirmation = () => {
    setIsSubmitting(true);
    axios
      .put(url, formInfo)
      .then((response) => {
        console.log(response.data);
        setIsSubmitting(false);
        onSubmit(formInfo);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
    setConfirmationOpen(false);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formInfo.firstName}
          onChange={handleChange('firstName')}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formInfo.lastName}
          onChange={handleChange('lastName')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formInfo.email}
          onChange={handleChange('email')}
        />
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="Date of Birth"
          inputFormat="dd/MM/yyyy"
          value={formInfo.dob}
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
          filterDate={(date) => date >= new Date()}
        />
      </Grid>
      <Grid item xs={3}>
        <Select
          fullWidth
          label="Gender"
          name="gender"
          value={formInfo.gender}
          onChange={handleChange('gender')}
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
          name="phone"
          value={formInfo.phone}
          onChange={handleChange('phone')}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Nationality"
          value={formInfo.nationality}
          onClick={handleClick}
        />
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
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
          name="address"
          value={formInfo.address}
          onChange={handleChange('address')}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Social Networks"
          name="socialNetworks"
          value={formInfo.socialNetworks}
          onChange={handleChange('socialNetworks')}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="secondary" sx={{marginLeft:4}} onClick={handleCancel}>
          Cancel
        </Button>
      </Grid>
      <Dialog open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>Are you sure you want to submit?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmationOpen(false)} color="primary">
            No
          </Button>
          <Button onClick={handleSubmitConfirmation} color="primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Yes'}
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default PersonalDetailEdit;
