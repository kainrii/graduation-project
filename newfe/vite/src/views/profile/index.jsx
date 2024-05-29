import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';

// project import
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import PersonalDetails from './PersonalDetails';
import ITSkills from './ITSkills';


import MenuList from './menu';
const Profile = () => {
    const [isLoading, setLoading] = useState(true);  
    const [Companys, setCompanys] = useState([]);
    const [error, setError] = useState(null); // State to handle any error
    
    useEffect(() => {
      setLoading(false);
    }, []);


    return (
      <MainCard title="Your Profile" secondary={<SecondaryAction link="" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} sm={3}>
          <MenuList/>
        </Grid>
        <Grid item xs={18} sm={9}>
          
          {/* <PersonalDetails isLoading={isLoading}/> */}
          <ITSkills/>
        </Grid>
      </Grid>
    </MainCard>
  );
}

export default Profile