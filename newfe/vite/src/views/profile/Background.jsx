import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';
import EmploymentView from './EmploymentView';
import Education from './Education';

const Background = ({ isLoading, id }) => {
  const url = `https://localhost:7049/api/TalentProfiles/${id}`;
  const [background, setBackground] = useState({
    educations: [
      {
        start: null,
        end: null,
        placeofEducation: "",
        degree: "",
        description: ""
      }
    ],
    employments: [
      {
        start: null,
        end: null,
        placeofEmployment: "",
        position: "",
        description: ""
      }
    ]
  });

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const profile = response.data;
        console.log(profile);
        setBackground(prevState => ({  
          ...prevState,  
          educations: profile.educations || [],
          employments: profile.employments || []
        }));
      })
      .catch(error => {
        console.error(error);
      });
  }, [url]); // Added url as dependency for useEffect

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
