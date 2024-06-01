import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText} from '@mui/material';


import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

import SubCard from 'ui-component/cards/SubCard';

const EducationView = () => {
    return (
      <SubCard title="Education" secondary={<ModeOutlinedIcon />}>
        <List>
          <ListItem>
            <ListItemText
              primary="2014-2017"
              secondary="Master Degree in Computer Application"
            />
            <ListItemText
              primary="University of Oxford, England"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2011-2013"
              secondary="Bachelor Degree in Computer Engineering"
            />
            <ListItemText
              primary="Imperial College London"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2009-2011"
              secondary="Higher Secondary Education"
            />
            <ListItemText
              primary="School of London, England"
            />
          </ListItem>
        </List>
      </SubCard>
    );
  };
  export default EducationView