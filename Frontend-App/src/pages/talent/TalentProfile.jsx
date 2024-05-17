import React from 'react'
import Header from '../../components/Header'
import { useState } from 'react';
import { Grid, Avatar} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerticalTabs from '../../components/navigation/TabPanel';


// import hehe from '../../../public/hehe';
const _pages = [ 'Jobs', 'Profile','Interview rehearsal'];
const _tabs = [
  { label: "Personnal Details", content: "/personaldetails" },
  { label: "Background", content: "/background" },
  { label: "IT Skills", content: "/itskills" },
  { label: "Preferences", content: "/preferences" },
];
const TalentProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Header pages={_pages}/>

      <Grid container spacing={2}>
        <Grid item xs={12}>
        <label htmlFor="avatar-input">
            <Avatar
              alt="Avatar"
              src={avatarUrl}
              sx={{ width: 170, height: 170, margin: "32px 64px" }}
            />
          </label>
          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12} sx={{margin:"0px 40px"}}>
          <VerticalTabs tabs={_tabs}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default TalentProfile
