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
import { fetchPersonalDetails } from 'api/profile';

const Input = styled('input')({
  display: 'none',
});

const PersonalDetails = ({ isLoading, id }) => {
  const [avatar, setAvatar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [initialInfo, setInitialInfo] = useState({
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchPersonalDetails(id);
        setInitialInfo({
          firstName: profile.personalDetails.firstName,
          lastName: profile.personalDetails.lastName,
          email: profile.personalDetails.email,
          dob: profile.personalDetails.dob,
          gender: profile.personalDetails.gender,
          phone: profile.personalDetails.phone,
          nationality: profile.personalDetails.nationality,
          address: profile.personalDetails.address,
          socialNetworks: profile.personalDetails.socialNetworks
        });
      } catch (error) {
        console.error('Error fetching personal details:', error);
      }
    };
    fetchData();
  }, [id]);

  const defaultAvatarSrc = 'src/assets/images/users/user-round.svg';

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
    setIsEditMode(false);
    setInitialInfo(updatedData);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Grid container spacing={3}>
          {/* Avatar section */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <Box sx={{ width: 128, height: 128, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              {/* upload Avatar section */}
              <Box sx={{ mt: 4 }}>
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={handleUploadImage}
                  style={{ display: 'none' }}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="outlined" component="span">
                    <WallpaperRoundedIcon sx={{ paddingRight: '6px' }} />
                    Upload Avatar
                  </Button>
                </label>
              </Box>
              <Box sx={{ color: '#cccccc', mt: 1 }}>
                <InfoOutlinedIcon fontSize="small" sx={{ marginBottom: '-5px', paddingRight: '6px' }} />
                Image limit size: 125kB
              </Box>
            </Box>
          </Grid>
          {/* Personal Details section */}
          <Grid item xs={12} sm={9}>
            {/* Edit button */}
            <Typography align="right" sx={{ mb: 2 }}>
              <IconButton onClick={handleEditClick}>
                <ModeOutlinedIcon />
              </IconButton>
            </Typography>
            {/* Render edit mode or view mode based on isEditMode state */}
            {isEditMode ? (
              <PersonalDetailEdit info={initialInfo} onCancel={handleCancel} onSubmit={handleFormSubmit} />
            ) : (
              <PersonalDetailView info={initialInfo} onEditClick={handleEditClick} />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

PersonalDetails.propTypes = {
  isLoading: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default PersonalDetails;
