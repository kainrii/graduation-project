import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MuiTypography from '@mui/material/Typography';

// import Typography from 'views/utilities/Typography';
import { Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

import MenuList from './menu';
const Profile = () => {
    const [isLoading, setLoading] = useState(true);  
    const [Companys, setCompanys] = useState([]);
    const [error, setError] = useState(null); // State to handle any error
    
    useEffect(() => {
      setLoading(false);
    }, []);


    return (
      <MainCard title="Your Profile" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={6} sm={3}>
          <MenuList/>
        </Grid>
        <Grid item xs={18} sm={9}>
        </Grid>

      </Grid>
    </MainCard>
  );
}

export default Profile