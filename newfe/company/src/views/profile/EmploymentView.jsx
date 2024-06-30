import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText} from '@mui/material';

import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

import SubCard from 'ui-component/cards/SubCard';

const EmploymentView = () => {


    return (
      <SubCard title="Employment" secondary={<ModeOutlinedIcon />}>
        <List>
          <ListItem>
            <ListItemText
              primary="Current"
              secondary="Senior UI/UX designer"
            />
            <ListItemText
              primary="Perform task related to project manager with the 100+ team under my observation. Team management is key role in this company."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2017-2019"
              secondary="Trainee cum Project Manager"
            />
            <ListItemText
              primary="Microsoft, TX, USA"
            />
          </ListItem>
        </List>
      </SubCard>
    );
  };
export default EmploymentView