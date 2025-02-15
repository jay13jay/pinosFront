import React from 'react';
import { AppBar, Button, Box, Toolbar, Typography, useTheme } from '@mui/material';
import Navbar from './Navigation/Navbar';
import { HeaderProps } from './types'; // Adjust the import path as necessary
import { Height } from '@mui/icons-material';

const Header: React.FC<HeaderProps> = ({ title }) => {
  const theme = useTheme();


  const styles = {
    backgroundColor: 'grey',
    boxShadow: '2px 5px 7px 0 rgba(255, 255, 255, 0.05)',
    // color: theme.palette.primary.dark,
    color: 'white',
    // border: `5px solid ${theme.palette.secondary.light}`,
    borderRadius: 3,
    mb: 2,
  }

  return (
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Navbar />
        </Toolbar>
      </AppBar>
  );
};

export default Header;


{/* 
<AppBar position="sticky">
  <Typography variant="h4">
    {title}
  </Typography>
  <Navbar />
</AppBar> 
*/}