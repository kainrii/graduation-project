import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';

import { fetchProfile } from 'api/profile';
import { gridSpacing } from 'store/constant';
import EmploymentView from './EmploymentView';
import Education from './Education';

const Background = ({ isLoading, id }) => {
  const [background, setBackground] = useState({
    educations: [],
    employments: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchProfile(id);
        setBackground({
          educations: profile.educations || [],
          employments: profile.employments || []
        });
      } catch (error) {
        console.error('Error fetching background:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      {!isLoading && (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <EmploymentView employments={background.employments} />
          </Grid>
          <Grid item xs={12}>
            <Education educations={background.educations} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

Background.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.string.isRequired // Assuming id is a string
};

export default Background;
