import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
  const profileid = '666198873807df84823caadf';
  const url = `https://localhost:7049/api/TalentProfiles/${profileid}`;


  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // console.log(personalDetails);
  return (
    <MainCard title="Your Profile">
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <List>
            {tabs.map((tab) => (
              <ListItem key={tab.id} disablePadding>
                <ListItemButton 
                  onClick={() => handleTabChange(tab.label)} 
                  sx={{
                    margin: "0px 16px 8px",
                    borderRadius: "8px",
                    backgroundColor: selectedTab === tab.label? "secondary.light" : "#fff"
                  }} 
                >
                  <ListItemText primary={tab.label} sx={{textEmphasisColor: selectedTab === tab.label? "secondary.dark" : "#fff"}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={0.5}></Grid>
        <Grid item xs={8} sx={{paddingLeft: 10}}>
          <Item sx={{textAlign:"left"}}>
            {selectedTab === 'Personal Details' && (
              <PersonalDetails isLoading={isLoading} id={profileid} />
            )}
            {selectedTab === 'Background' && (
              <Background/>
            )}
            {selectedTab === 'IT skills' && (
              <ITSkills isLoading={isLoading} id={profileid} />
            )}
            {selectedTab === 'Preferences' && (
              <Preferences isLoading={isLoading}/>
              // <div> jhdsbvjhv</div>
            )}
          </Item>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default YourProfile;