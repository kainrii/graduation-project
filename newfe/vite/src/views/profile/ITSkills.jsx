import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, IconButton } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

import ITSkillsView from './ITSkillsView';
import ITSkillsEdit from './ITSkillsEdit';

const selectedItskill = {
  programmingLanguage: [
    "JavaScript",
    "Go",
    "Rust"
  ],
  Framework: [
    "React",
    "Ruby on Rails",
    "Laravel"
  ],
  db: [
    "MySQL"
  ],
  platform: [
    "Azure",
    "Docker"
  ]
};

const ITSkills = ({ isLoading }) => {

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };


  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography align="right">
                <IconButton onClick={handleEditClick}>
                  <ModeOutlinedIcon />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {isEditMode ? (
                <ITSkillsEdit itskill={selectedItskill}/>
              ) : (
                <ITSkillsView itskill={selectedItskill}/>
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

ITSkills.propTypes = {
  isLoading: PropTypes.bool,
};

export default ITSkills;