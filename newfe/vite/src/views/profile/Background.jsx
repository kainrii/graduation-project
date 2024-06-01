import React from 'react';
import PropTypes from 'prop-types';

import {Grid} from '@mui/material';

import { gridSpacing } from 'store/constant';
import EmploymentView from './EmploymentView';
import EducationView from './EducationView';



const Background = ({isLoading}) => {

  return (
    <>
      {isLoading ?(<></>): (
        <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <EmploymentView />
        </Grid>
        <Grid item xs = {12}>
          <EducationView />
        </Grid>
        </Grid>
        
      )}
    </>
  );
};

Background.propTypes = {
  isLoading: PropTypes.bool
};

export default Background;