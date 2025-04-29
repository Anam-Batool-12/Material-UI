import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const BlogGrid = () => {
  const blogData = [
    {
      title: 'Blog 1',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Blog 2',
      summary: 'Cupiditate saepe consequatur, doloremque nostrum fuga expedita.',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Blog 3',
      summary: 'Totam impedit hic modi, excepturi pariatur officia.',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Blog 4',
      summary: 'Quae doloremque nostrum fuga expedita a sapiente conse',
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <Box sx={{ pt: 6 }}> {/* Add padding top (pt: 6 = 48px) */}
      <Grid container spacing={6}>
        {blogData.map((blog, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="180"
                image={blog.imageUrl}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.summary}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', justifyContent: 'flex-end' }}>
                <Button size="small" variant="contained" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogGrid;
