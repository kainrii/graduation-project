import React, {useState} from 'react'

import Chip from 'ui-component/extended/Chip'
import { Grid } from '@mui/material';

import { gridSpacing } from 'store/constant';

const ITSkillsView = ({itskill}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={24} sm={12}>
          {Object.keys(itskill).map(category => (
          <div key={category}>
              <h3>{category}</h3>
              {itskill[category].map(skill => (
              <Chip
                  key={skill}
                  label={skill}
                  checked={selectedSkills.includes(skill)}
                  sx={{ 
                      color: 'white' ,
                      backgroundColor: 'secondary.dark',
                      margin: '4px' 
                  }}
              />
              ))}
          </div>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default ITSkillsView
