import React from 'react'
import Header from '../../components/Header'
import { Grid, Avatar} from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VerticalTabs from '../../components/navigation/TabPanel';


// import hehe from '../../../public/hehe';
const _pages = [ 'Jobs', 'Profile','Interview rehearsal'];

const TalentProfile = () => {
  return (
    <div>
      <Header pages={_pages}/>
      <Grid container spacing={4}>
        <Grid item xs ={1} style={{ padding:"36px 0px", marginTop:"40px"}}/>
        <Grid item xs ={3} 
          style={{
            padding:"36px 0px", 
            marginTop:"40px", 
            display: "flex",
            justifyContent:"center"
            }}
        >
          <Grid container spacing={1}         >
            <Grid item xs ={12}               
                style={{
                display: "flex",
                justifyContent:"center"
              }}>
              <Avatar
                // alt="Avatar"
                src="../../../public/logo192.png"
                sx={{ width: 128, height: 128 }}
              />
            </Grid> 
            <Grid item xs ={12}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider', marginTop:"40px"}}
              >
                <Tab label="Personal details" sx={{backgroundColor: "#cccccc",margin:"8px 16px"}} />
                <Tab label="Background" sx={{backgroundColor: "#cccccc",margin:"8px 16px"}} />
                <Tab label="IT Skills" sx={{backgroundColor: "#cccccc",margin:"8px 16px"}} />
                <Tab label="Preferences" sx={{backgroundColor: "#cccccc",margin:"8px 16px"}}/>
              </Tabs>         
            </Grid> 
          </Grid>
       </Grid>
        <Grid item xs ={7} style={{paddingTop:"36px",marginTop:"40px" }} >
          
        </Grid>
        <Grid item xs ={1} style={{ paddingTop:"36px", marginTop:"40px"}}/>
      </Grid>
    </div>
  )
}

export default TalentProfile
