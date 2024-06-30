import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//material UI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';

//project import
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import PersonalDetails from './PersonalDetails';
import ITSkills from './ITSkills';
import Background from './Background';
import Preferences from './Preferences';
import MuiTypography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'? '#1A1D23' : '#fff',
 ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const tabs = [
  { id: 1, label: 'Personal Details' },
  { id: 2, label: 'Background' },
  { id: 3, label: 'IT skills' },
  { id: 4, label: 'Preferences' },
];



const YourProfile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
console.log(id);
  
  return (
    <MainCard title="Your Profile" secondary ="">
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} sx={{paddingLeft: 10}}>
          <PersonalDetails isLoading={isLoading} id={id} />
          <MuiTypography variant="h3" gutterBottom sx={{paddingTop:4, paddingBottom:2}}>
            Background
          </MuiTypography>
          <Background/>
          <MuiTypography variant="h3" gutterBottom sx={{paddingTop:4, paddingBottom:2}}>
            Skills
          </MuiTypography>
          <ITSkills isLoading={isLoading} id={id} />
          <MuiTypography variant="h3" gutterBottom sx={{paddingTop:4, paddingBottom:2}}>
            Preferences
          </MuiTypography>
          <Preferences isLoading={isLoading}/>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default YourProfile;