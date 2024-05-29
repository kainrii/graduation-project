import React, { useState } from 'react';
import Chip from 'ui-component/extended/Chip';
import { Button, Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import itskills from './itskills-items/itskills';

const ITSkillsEdit = ({ selectedItskill }) => {
  const [selectedSkills, setSelectedSkills] = useState([selectedItskill]);

  const handleSubmit = () => {
    console.log(selectedSkills);
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ITSkillsEdit;
