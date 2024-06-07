import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// material UI
import { Button, Box, Typography, Avatar, Grid, TextField, Select, MenuItem, IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { gridSpacing } from 'store/constant';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
//assets
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WallpaperRoundedIcon from '@mui/icons-material/WallpaperRounded';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';

//project import
import PersonalDetailEdit from './PersonalDetailEdit';
import PersonalDetailView from './PersonalDetailsView';

const Input = styled('input')({
  display: 'none',
});

const PersonalDetails = ({ isLoading, id }) => {
  const url = `https://localhost:7049/api/TalentProfiles/personal-details/${id}`

  const [avatar, setAvatar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [initialInfo, setInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      dob: null,
      gender: '',
      phone: '',
      nationality: '',
      address: '',
      socialNetworks: [
        {
          name: 'github',
          link: 'hhsdbkh'
        }
      ]
    });
  const [tempInfo, setTempInfo] = useState(null); // Store temporary info for confirmation

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const profile = response.data;
        console.log (profile);
        
        setInfo(prevState => ({  // Use the updater function form
          ...prevState,  // Spread the previous state
          firstName: profile.personalDetails.firstName,
          lastName: profile.personalDetails.lastName,
          email: profile.personalDetails.email,
          dob: profile.personalDetails.dob,
          gender: profile.personalDetails.gender,
          phone: profile.personalDetails.phone,
          nationality: profile.personalDetails.nationality,
          address: profile.personalDetails.address,
          socialNetworks:  profile.personalDetails.socialNetworks
        }));
        
      })
      .catch(error => {
        console.error(error);
      });
    }, []);


  const defaultAvatarSrc = 'src/assets/images/users/user-round.svg';
  
  const theme = useTheme();

  const handleUploadImage = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleFormSubmit = (updatedData) => {
    // Update the data in the parent component's state
    setIsEditMode(false);
    setInfo(updatedData);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Grid container spacing={gridSpacing}>
          {/* Avatar section */}
          <Grid item xs={6} sm={3}>
            <Box sx={{width: 128, height: 128}}>
              {avatar ? (
                <Avatar
                  alt="Avatar"
                  src={URL.createObjectURL(avatar)}
                  sx={{ width: 128, height: 128, borderRadius: '50%' }}
                />
              ) : (
                <Avatar
                  alt="Default Avatar"
                  src={defaultAvatarSrc}
                  sx={{ width: 128, height: 128, borderRadius: '50%' }}
                />
              )}
            </Box>
          </Grid>
          {/* Upload Avatar section */}
          <Grid item xs={18} sm={9}>
            <Box sx={{ mt: 4 }}>
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                onChange={handleUploadImage}
              />
              <label htmlFor="contained-button-file">
                <Button variant="outlined" component="span">
                  <WallpaperRoundedIcon sx={{paddingRight:'6px'}}/>
                  Upload Avatar
                </Button>
              </label>
            </Box>
            <Box sx={{color:'#cccccc'}}>
              <InfoOutlinedIcon fontSize='small' sx={{marginBottom:'-5px', paddingRight:'6px'}}/>
              image limit size: 125kB
            </Box>
          </Grid >
          {/* Edit button */}
          <Grid item xs={12}>
            <Typography align="right">
              <IconButton onClick={handleEditClick}>
                <ModeOutlinedIcon />
              </IconButton>
            </Typography>
          </Grid>
          {/* Render edit mode or view mode based on isEditMode state */}
          {isEditMode ? (
          <PersonalDetailEdit
            info={initialInfo}
            onCancel={handleCancel}
            onSubmit={handleFormSubmit}
          />
        ) : (
          <PersonalDetailView
            info={initialInfo}
            onEditClick={handleEditClick}
          />
        )}
        </Grid>
      )}
    </>
  );
};

PersonalDetails.propTypes = {
  isLoading: PropTypes.bool,
  info: PropTypes.object.isRequired,
};

export default PersonalDetails;
