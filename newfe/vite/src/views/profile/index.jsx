import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import MenuList from './menu';

const Profile = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <MainCard title="Your Profile" secondary={<SecondaryAction link="" />}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <MenuList />
            </Grid>
          </Grid>
        </MainCard>
    );
};

export default Profile;
