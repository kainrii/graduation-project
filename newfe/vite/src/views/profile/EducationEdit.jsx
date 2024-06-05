import React, { useState } from 'eact';
import PropTypes from 'prop-types';

import { Grid, TextField, Button } from '@mui/material';

import { gridSpacing } from 'tore/constant';
import EmploymentView from './EmploymentView';
import EducationView from './EducationView';

const EducationEdit = ({ isLoading, onSave }) => {
  const [education, setEducation] = useState('');

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleSubmit = () => {
    onSave({ employment, education });
  };

  return (
    <>
      {isLoading? (
        <></>
      ) : (
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <TextField
              label="Education"
              value={education}
              onChange={handleEducationChange}
              fullWidth
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

EducationEdit.propTypes = {
  isLoading: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
};

export default EducationEdit;