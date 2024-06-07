import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Typography, IconButton, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, FormControl, InputLabel, Chip } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import SubCard from 'ui-component/cards/SubCard';
import itskill from './itskills-items/itskills';

const ITSkills = ({ isLoading, id }) => {
  const url = `https://localhost:7049/api/TalentProfiles/${id}`;
  const puturl = `https://localhost:7049/api/TalentProfiles/it-skills/${id}`
  const [editIndex, setEditIndex] = useState(null);
  const [itskills, setITSkills] = useState({});
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [projectDescription, setProjectDescription] = useState('');
  const [projectSkills, setProjectSkills] = useState([]);
  const [projectLink, setProjectLink] = useState('');
  const [requestData, setRequestData] = useState({
    projects: [{
      skills: [],
      projectName: '',
      projectDescription: '',
      projectLink: ''
    }]
  });
  useEffect(() => {
    axios.get(url)
      .then(response => {
        const profile = response.data;
        setITSkills(profile.itSkills);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setProjectDescription(itskills.projects[index].projectDescription);
    setProjectSkills(itskills.projects[index].skills);
    setProjectLink(itskills.projects[index].projectLink);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleSaveChanges = () => {
    // Construct the modified project object
    const modifiedProject = {
      skills: projectSkills,
      projectName: itskills.projects[editIndex].projectName,
      projectDescription: projectDescription,
      projectLink: projectLink
    };
  
    // Update the project data in the itskills state
    const updatedProjects = [...itskills.projects];
    updatedProjects[editIndex] = modifiedProject;
    const updatedITSkills = { ...itskills, projects: updatedProjects };
    setITSkills(updatedITSkills);
  
    // Close the edit dialog
    setOpenEditDialog(false);
  
    // Log the request data
    
    // Send PUT request to update the project data
    const requestData = {
      projects: updatedProjects
    };
    
    axios.put(puturl, requestData)
    .then(response => {
      console.log('PUT request successful:', response.data);
    })
    .catch(error => {
      console.error('Error sending PUT request:', error);
    });
    console.log('PUT request data:', requestData);
  };
  
  

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          {itskills.projects && itskills.projects.map((project, index) => (
            <SubCard key={index} title={project.projectName} secondary={<IconButton onClick={() => handleEditClick(index)}><ModeOutlinedIcon /></IconButton>} sx={{ marginBottom: 2 }}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={project.projectDescription}
                    secondary={`Skills: ${project.skills.join(', ')}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={<a href={project.projectLink} target="_blank" rel="noopener noreferrer">{project.projectLink}</a>}
                  />
                </ListItem>
              </List>
            </SubCard>
          ))}

          {/* Edit dialog */}
          <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Project Description"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="skills-label">Skills</InputLabel>
                  <Select
                    labelId="skills-label"
                    id="skills-select"
                    multiple
                    value={projectSkills}
                    onChange={(e) => setProjectSkills(e.target.value)}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} style={{ margin: 2 }} />
                        ))}
                      </div>
                    )}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200, // Adjust the max height as needed
                          overflowY: 'auto',
                        },
                      },
                    }}
                  >
                    {itskill.slice(0, 10).map((skill, index) => (
                      <MenuItem key={index} value={skill}>
                        {skill}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Project Link"
                    value={projectLink}
                    onChange={(e) => setProjectLink(e.target.value)}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEditDialog}>Cancel</Button>
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

ITSkills.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default ITSkills;
