import React from 'react';
import { Button, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const theme = useTheme();

  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({
        textDecoration: 'overline',
      })}>
        <Button 
          variant="outlined" 
          startIcon={<HomeIcon />}
          color="primary">
          Home
        </Button>
      </NavLink>

      <NavLink to="/menu" style={({ isActive }) => ({
        textDecoration: 'overline',
      })}>
        <Button 
          variant="outlined" 
          startIcon={<MenuBookIcon />}
          color="secondary" 
          sx={({ isActive }) => ({
            backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          })} >
          Menu
        </Button>
      </NavLink>

      <NavLink to="/location-and-hours" style={({ isActive }) => ({
        textDecoration: 'overline',
      })}>
        <Button 
          variant="outlined" 
          color="primary" 
          sx={({ isActive }) => ({
            backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          })}
        >
          Location & Hours
        </Button>
      </NavLink>

      <NavLink to="/about" style={({ isActive }) => ({
        textDecoration: 'overline',
      })}>
        <Button 
          variant="outlined" 
          color="primary" 
          sx={({ isActive }) => ({
            backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          })}
        >
          About
        </Button>
      </NavLink>

      <NavLink to="/contact" style={({ isActive }) => ({
        textDecoration: 'overline',
      })}>
        <Button 
          variant="outlined" 
          color="primary" 
          sx={({ isActive }) => ({
            backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          })}
        >
          Contact
        </Button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
