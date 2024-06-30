import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Typography, IconButton, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem, Select, FormControl, InputLabel, Chip } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import SubCard from 'ui-component/cards/SubCard';
import itskill from './itskills-items/itskills';
import { fetchProfile, updateITSkills } from 'api/profile'; // Import updateITSkills from your API module

const ITSkills = ({ isLoading, id }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [itskills, setITSkills] = useState({});
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectSkills, setProjectSkills] = useState([]);
  const [projectLink, setProjectLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchProfile(id);
        setITSkills(profile.itSkills);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchData();
  }, [id]);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setProjectName(itskills.projects[index].projectName);
    setProjectDescription(itskills.projects[index].projectDescription);
    setProjectSkills(itskills.projects[index].skills);
    setProjectLink(itskills.projects[index].projectLink);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleSaveChanges = async () => {
    if (editIndex !== null) {
      // Construct the modified project object
      const modifiedProject = {
        skills: projectSkills,
        projectName: projectName,
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
    
      // Send PUT request to update the project data
      try {
        await updateITSkills(id, { projects: updatedProjects });
        console.log('PUT request for updating project successful');
      } catch (error) {
        console.error('Error sending PUT request for updating project:', error);
      }
    }
  };

  const handleAddProject = () => {
    // Reset fields for adding new project
    setProjectName('');
    setProjectDescription('');
    setProjectSkills([]);
    setProjectLink('');
    setEditIndex(null);
    setOpenEditDialog(true);
  };

  const handleSaveNewProject = async () => {
    // Construct the new project object
    const newProject = {
      skills: projectSkills,
      projectName: projectName,
      projectDescription: projectDescription,
      projectLink: projectLink
    };

    // Add the new project to the projects list
    const updatedProjects = [...itskills.projects, newProject];
    const updatedITSkills = { ...itskills, projects: updatedProjects };
    setITSkills(updatedITSkills);

    // Close the add project dialog
    setOpenEditDialog(false);

    // Send PUT request to update the project data
    try {
      await updateITSkills(id, { projects: updatedProjects });
      console.log('PUT request for adding new project successful');
    } catch (error) {
      console.error('Error sending PUT request for adding new project:', error);
    }
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
            <DialogTitle>{editIndex !== null ? 'Edit Project' : 'Add New Project'}</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    fullWidth
                  />
                </Grid>
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
              {editIndex !== null ? (
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              ) : (
                <Button onClick={handleSaveNewProject}>Save New Project</Button>
              )}
            </DialogActions>
          </Dialog>

          {/* Add project button */}
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" onClick={handleAddProject}>
              Add Project
            </Button>
          </Grid>
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
