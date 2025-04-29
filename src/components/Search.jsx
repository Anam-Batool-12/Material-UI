// components/BlogSearchBar.jsx
import React from 'react';
import { TextField, Box } from '@mui/material';

const BlogSearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center', pt:6 }}>
      <TextField
        label="Search Blogs"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: '100%', maxWidth: 500 }}
      />
    </Box>
  );
};

export default BlogSearchBar;
