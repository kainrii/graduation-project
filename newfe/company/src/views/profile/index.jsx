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
    <MainCard title="Company Information">

    </MainCard>
  );
};

export default YourProfile;