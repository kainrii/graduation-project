import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    boxShadow: 24,
    p: 4,
  };

const JobCreate = () => {
  const [open, setOpen] = useState(false); // State to manage modal visibility

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
       <Box sx={style}>
            <Typography id="create-job-modal-title" variant="h6" component="h2">
                            Create New Job
                        </Typography>
                        <form>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="job-title"
                                label="Job Title"
                                name="title"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="job-description"
                                label="Job Description"
                                name="description"
                                multiline
                                rows={4}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClose} // You might want to replace this with a function that handles form submission
                            >
                                 Create Job
                            </Button>
                        </form>
        </Box>
  );
};

export default JobCreate;
