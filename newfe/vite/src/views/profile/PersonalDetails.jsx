import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const PersonalDetails = ({isLoading}) => {
  const [avatar, setAvatar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const info={
    firstName: '',
    lastName: '',
    email: '',
    dob: null,
    gender: '',
    phoneNumber: '',
    nationality: '',
    countryOfResidence: '',
    social: ''
  };


  const defaultAvatarSrc = 'src/assets/images/users/user-round.svg';
  
  const theme = useTheme();

  const handleUploadImage = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Grid container spacing={gridSpacing}>
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
            <Grid item xs={12}>
              <Typography align="right">
                <IconButton onClick={handleEditClick}>
                  <ModeOutlinedIcon />
                </IconButton>
              </Typography>
            </Grid>

            {isEditMode ? (
              <PersonalDetailEdit info={info} onCancel={() => setIsEditMode(false)} />
            ) : 
            (<PersonalDetailView info={info}/>)
            }
        </Grid>
      )}
    </>
  );
};

PersonalDetails.propTypes = {
  isLoading: PropTypes.bool
};

export default PersonalDetails;
