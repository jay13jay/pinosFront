import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';
import Navbar from './Navbar';
import { HeaderProps } from './Header'; // Adjust the import path as necessary

const Header: React.FC<HeaderProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <AppBar position="sticky">
        <Typography variant="h4">
          {title}
        </Typography>
        <Navbar />
    </AppBar>
  );
};

export default Header;
