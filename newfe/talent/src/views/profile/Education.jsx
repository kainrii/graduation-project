import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import SubCard from 'ui-component/cards/SubCard';

const Education = ({ educations }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    console.log("clicked");
  };

  return (
    <SubCard title="Education" secondary={<IconButton onClick={handleEditClick}><ModeOutlinedIcon /></IconButton>}>
      {isEditMode ? (
        <></>
      ) : (
        <>
          <List>
            {educations.map((education, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${education.start} - ${education.end}`}
                  secondary={education.degree}
                />
                <ListItemText
                  primary={education.placeofEducation}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </SubCard>
  );
};

Education.propTypes = {
  educations: PropTypes.array.isRequired,
};

export default Education;
