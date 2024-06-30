import PropTypes from 'prop-types';
import React from 'react';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonCompanyCard from 'ui-component/cards/Skeleton/CompanyCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { fetchJobsByCompanyId } from 'api/job';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const CompanyCard = ({ isLoading, company }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null); // State to handle any error
  const [openDialog, setOpenDialog] = useState(false);

  console.log(company);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    const fetchJobsData = async () => {
      try {
        const response = await fetchJobsByCompanyId(company.companyId);
        setJobs(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchJobsData();
  }, []);

  return (
    <>
      {isLoading? (
        <SkeletonCompanyCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">{company.companyName}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ pt: '16px!important' }}>
                {/* <BajajAreaChartCard /> */}
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column">
                  {jobs.map((job, index) => (
                    <Grid item key={index}>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {job.jobName}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            {job.jobLocation}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar
                            sx={{
                              cursor: 'pointer',
                             ...theme.typography.smallAvatar,
                              bgcolor: 'econdary.light',
                              color: 'econdary.dark',
                              marginLeft: 1.875
                            }}
                          >
                            <ArrowUpwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                          </Avatar>
                        </Grid>
                      </Grid>
                      <Divider sx={{ my: 1.5 }} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation onClick={handleViewClick}>
              View
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle><Typography variant="h2"> {company.companyName}</Typography></DialogTitle>
        <DialogContent>
          <Typography variant="h4"> {company.companyDescription}</Typography>
          <Typography variant="body1">Company Email: {company.companyEmail}</Typography>
          <Typography variant="body1">Company Phone Number: {company.companyPhoneNumber}</Typography>
          <Typography variant="body1">Company Status: {company.companyStatus === 1 ? 'Active' : 'Inactive'}</Typography>

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

CompanyCard.propTypes = {
  isLoading: PropTypes.bool,
  company: PropTypes.object.isRequired
};

export default CompanyCard;