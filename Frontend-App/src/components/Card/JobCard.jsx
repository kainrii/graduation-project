import React,{useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';

// const id = '66162804a238a213adc748cb';

export default function JobCard({job}) {
  const navigate = useNavigate(); // Hook for navigation
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isFavorited, setIsFavorited] = React.useState(false);
  const fetchCompany = async () => {
    const companyUrl = `https://localhost:7049/api/Company/${job.companyId}`;
    try {
      const response = await axios.get(companyUrl);
      setCompany(response.data);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setIsLoading(false); // Set loading to false after both fetches are complete or failed
    }
  };

  useEffect(() => {
    if(job && job.companyId) {
      fetchCompany();
    }
  }, [job]); 

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent the click from triggering the card's onClick event
    setIsFavorited(!isFavorited);
  };

  const handleCardClick = () => {
    if (job && job.jobId && job.companyId) {
      const url = `/job-detail?id=${job.jobId}&companyId=${job.companyId}`;
      window.open(url, '_blank');
    } else {
      console.error('Job data is incomplete.');
    }
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 384,
        '&:hover': 
          { 
            opacity: 0.8,
            cursor: "pointer"
          }

      }} 
       onClick={handleCardClick}
    >
      <CardHeader
        sx={{ padding: "8px 16px" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500], width: 56, height: 56, borderRadius: '10%' }} aria-label="job">
            R
          </Avatar>
        }
        title={
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 'bold', color: "var(--dark-navy)" }}>
            {job.jobName}
          </Typography>
        }
        subheader={
          isLoading ? (
            <Typography variant="body2" color="text.secondary">Loading company...</Typography>
          ) : error ? (
            <Typography variant="body2" color="text.secondary">Company info not available</Typography>
          ) : (
            <Typography variant="body2" color="text.secondary">
              <BusinessIcon fontSize="small" />
              {company ? company.companyName : 'Company not found'}
            </Typography>
          )
        }
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AttachMoneyIcon fontSize="small" />
            {job.details.benefits}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon fontSize="small" />
            {job.details.workplaceLocation}
          </Typography>
        </CardContent>
        <CardActions sx={{ flex: '0 1 auto', padding: 2 }}>
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            <FavoriteIcon sx={{ color: isFavorited ? red[200] : 'inherit' }} />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
