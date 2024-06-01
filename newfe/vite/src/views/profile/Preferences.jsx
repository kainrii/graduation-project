import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, Grid, Button, TextField, Typography, IconButton} from '@mui/material';

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

import preferences from './preferences-item';
import { gridSpacing } from 'store/constant';

const Preferences = ({ isLoading }) => {
  const [state, setState] = useState(preferences);

  useEffect(() => {
    setState(preferences);
  }, [isLoading]);

  const handleChange = (event) => {
    const { name } = event.target;
    setState((prevState) =>
      prevState.map((item) =>
        item.object === name ? { ...item, is_selected: event.target.checked } : item
      )
    );
  };
  
  const handleSubmit = () => {
    const selectedItems = state.filter((item) => item.is_selected);
    console.log(selectedItems);
  };
  const handleEditClick = () => {
    console.log('clicked');
  };


  return (
    <Grid container spacing={gridSpacing}>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Expected salary"
          name="firstName"
          value="hehe"
          // onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm = {6}>
        <Typography align="right">
           <IconButton onClick={handleEditClick}>
              <ModeOutlinedIcon />
            </IconButton>
        </Typography>
      </Grid>
      <Grid item xs={24} sm={12} sx={{paddingBottom:0}}>
        <h3>Which tech areas are you interested in?</h3>
      </Grid>
        {state.map((preference, index) => (
          <Grid item xs={6} key={preference.object}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={preference.is_selected}
                  onChange={handleChange}
                  name={preference.object}
                />
              }
              label={preference.object}
            />
          </Grid>
        ))}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Preferences;