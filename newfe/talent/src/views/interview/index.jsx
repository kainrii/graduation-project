import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField, List, ListItem, ListItemText } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { generatePdfForProfile } from 'utils/generatepdf';
import axios from 'axios';

const Interview = () => {
  const { id } = useParams();
  const [interviews, setInterviews] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newInterview, setNewInterview] = useState({
    date: '',
    time: '',
    interviewers: '',
    location: '',
    companyFeedbacks: []
  });

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get(`https://localhost:7049/api/Interview/by-talent/${id}`);
        setInterviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInterviews();
  }, [id]);

  const handleGeneratePdf = async () => {
    await generatePdfForProfile(id);
  };

  const handleAddInterview = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveInterview = () => {
    // Save the new interview data (not implemented in this snippet)
    // Ideally, you would send a POST request to your API to save the new interview data

    // For demonstration, we can add it to the state and close the dialog
    setInterviews([...interviews, newInterview]);
    setNewInterview({
      date: '',
      time: '',
      interviewers: '',
      location: '',
      companyFeedbacks: []
    });
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewInterview({
      ...newInterview,
      [name]: value
    });
  };

  return (
    <MainCard title="Interviews">
      <Grid container spacing={3}>
        {interviews.map((interview, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <SubCard title={`Interview ${index + 1}`} sx={{ marginBottom: 2 }} secondary={interview.status}>
              <List>
                <ListItem>
                  <ListItemText primary={`Date: ${interview.date}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Time: ${interview.time}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Interviewers: ${interview.interviewers}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Location: ${interview.location}`} />
                </ListItem>
                {interview.companyFeedbacks.length > 0 && (
                  <ListItem>
                    <ListItemText primary="Company Feedbacks:" />
                    <List>
                      {interview.companyFeedbacks.map((feedback, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={`${feedback.interviewer}: ${feedback.content}`} />
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                )}
              </List>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" sx={{ marginLeft: 6 }}>
                    Accept
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="outlined" sx={{ color: "error.main", borderColor: "error.main", marginLeft: 1 }}>
                    Reject
                  </Button>
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" onClick={handleGeneratePdf}>
        Generate PDF
      </Button>

      {/* Add Interview Button */}
      <Button variant="contained" onClick={handleAddInterview} sx={{ marginLeft: 2 }}>
        Add Interview
      </Button>

      {/* Add Interview Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle>Add New Interview</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            name="date"
            label="Date"
            type="date"
            fullWidth
            value={newInterview.date}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="time"
            name="time"
            label="Time"
            type="time"
            fullWidth
            value={newInterview.time}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="interviewers"
            name="interviewers"
            label="Interviewers"
            fullWidth
            value={newInterview.interviewers}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="location"
            name="location"
            label="Location"
            fullWidth
            value={newInterview.location}
            onChange={handleChange}
          />
          {/* Additional fields for company feedbacks can be added similarly */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveInterview} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </MainCard>
  );
};

export default Interview;
