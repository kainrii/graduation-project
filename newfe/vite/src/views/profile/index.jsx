import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';


const Profile = () => {
    const [isLoading, setLoading] = useState(true);  
    const [Companys, setCompanys] = useState([]);
    const [error, setError] = useState(null); // State to handle any error
    
    useEffect(() => {
      setLoading(false);
    }, []);


    return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}

export default Profile