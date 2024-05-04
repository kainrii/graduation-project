import React from 'react'
import { Card, CardHeader, Typography, Avatar,Divider, CardContent, Chip, List, ListItem, ListItemText} from '@mui/material';
import { red } from '@mui/material/colors';
import WorkIcon from '@mui/icons-material/Work';

const id = "660d3b4b47277396237c90a7";
//https://localhost:7049/api/Talent/660d3b4b47277396237c90a7
const ProfileCard = () => {
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
        // onClick={handleCardClick}
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
                Do Khanh Ly
            </Typography>
            }
            subheader={
                <Typography variant="body2" color="text.secondary" sx={{display:"flex", alignItems:"center"}}>
                <WorkIcon  fontSize="small" /> 
                    <span style={{paddingTop: "4px"}}>
                        Fresher Developer
                    </span> 
                </Typography>
            }
        />
        <Divider variant="middle"/>
        <CardContent sx={{padding:"0px"}}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ListItemText primary="Company 1" />
                    <Divider sx={{ width: '30%' , marginRight:"20px"}} />
                    <ListItemText secondary="Jan 9, 2020" />
                </ListItem>
            </List>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ListItemText primary="Company 2" />
                    <Divider sx={{ width: '30%' , marginRight:"20px"}} />
                    <ListItemText secondary="Jan 9, 2016" />
                </ListItem>
            </List>
        </CardContent>
        <Divider variant="middle"/>
        <CardContent sx={{padding:"0px"}}>
            <ListItemText primary="Skill tags: " sx={{paddingLeft:"16px", paddingBottom:"8px"}}/>
            <Chip size='small' label="HTML/CSS" variant="outlined"  sx={{marginLeft:"16px"}}/>
            <Chip size='small' label="JavaScript" variant="outlined" sx={{marginLeft:"16px"}} />
        </CardContent>
    </Card>
  )
}

export default ProfileCard
