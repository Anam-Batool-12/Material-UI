import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const Post = () => {
  return (
    <Card
      sx={{
        width: '100%',
        padding: 2,
        borderRadius: 0, // remove border radius for edge-to-edge look, or adjust to your taste
        boxShadow: 3,
        backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&auto=format&fit=crop&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '300px' // optional: ensures it has visible height even with short content
      }}
    >
      <CardContent>
        <Typography variant="h4" color="inherit" gutterBottom>
          Blog Summary
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate saepe consequatur, 
          doloremque nostrum fuga expedita a sapiente consequuntur totam impedit hic modi, 
          excepturi pariatur officia.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="contained" color="primary">
          Read More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
