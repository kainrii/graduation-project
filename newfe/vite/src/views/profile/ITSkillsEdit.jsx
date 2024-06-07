import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Chip from 'ui-component/extended/Chip';
import { gridSpacing } from 'store/constant';
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import itskills from './itskills-items/itskills';

const ITSkillsEdit = ({ selectedItskill, onCancel, onSubmit }) => {
  const [selectedSkills, setSelectedSkills] = useState(selectedItskill);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const url = 'https://localhost:7049/api/TalentProfiles/personal-details/665ed90b132bbd277663f6c4'

  useEffect(() => {
    if (selectedItskill) {
      setSelectedSkills([selectedItskill]);
    }
  }, [selectedItskill]);

  const handleFormSubmit = () => {
    setConfirmationOpen(true);
  };

  const handleSubmitConfirmation = () => {
    setIsSubmitting(true);
    const payload = {
      programmingLanguages: selectedSkills,
      frameworks: selectedSkills,
      databases: selectedSkills,
      platforms: selectedSkills,
    };
    axios
      .put(url, payload)
      .then((response) => {
        console.log(response.data);
        setIsSubmitting(false);
        onSubmit(payload);
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
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={24} sm={12}>
          {Object.entries(itskills).map(([category, skills]) => (
            <div key={category}>
              <h3>{category}</h3>
              {skills.map(skill => (
                <Chip
                  key={skill}
                  label={skill}
                  onClick={() => {
                    if (selectedSkills.includes(skill)) {
                      setSelectedSkills(selectedSkills.filter(s => s !== skill));
                    } else {
                      setSelectedSkills([...selectedSkills, skill]);
                    }
                  }}
                  sx={{
                    color: selectedSkills.includes(skill) ? 'white' : 'grey',
                    backgroundColor: selectedSkills.includes(skill) ? 'secondary.dark' : 'secondary.light',
                    margin: '4px'
                  }}
                />
              ))}
            </div>
          ))}
        </Grid>

        <Grid item xs={24} sm={12}>
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
    </>
  );
};

export default ITSkillsEdit;
