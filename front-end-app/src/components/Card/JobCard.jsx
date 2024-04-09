import React from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function JobCard() {
  const navigate = useNavigate(); // Hook for navigation
  const [isFavorited, setIsFavorited] = React.useState(false);

  const handleFavoriteClick = (event) => {
    event.stopPropagation(); // Prevent the click from triggering the card's onClick event
    setIsFavorited(!isFavorited);
  };

  const handleCardClick = () => {
    // Open a new tab to the job detail page
    window.open('/job-detail', '_blank');
  };

  const salary = "$120,000/year";
  const address = "123 Main St, Cityville, CA 90210";

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
            React Developer
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
            <BusinessIcon fontSize="8px" />
            Sun Asterisk
          </Typography>
        }
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <CardContent sx={{ flex: '1 1 auto' }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AttachMoneyIcon fontSize="small" />
            {salary}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon fontSize="small" />
            {address}
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
