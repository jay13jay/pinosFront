import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Navbar from './Navbar';

const Header = ({ title }) => {
  return (
    <AppBar position="sticky" sx={{ 
      backgroundColor: 'rgb(77, 7, 7)',
      color: 'white',
      boxShadow: '2px 5px 7px 0 rgba(255, 255, 255, 0.05)',
      marginBottom: '1rem',
      border: '5px solid black',
      borderRadius: 3,
    }}>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1, left: 0 }}>
          {title}
        </Typography>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
