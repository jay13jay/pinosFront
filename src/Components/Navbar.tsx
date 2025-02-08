import React from 'react';
import { Button, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';
import { NavButtonProps } from './types';

const NavButton: React.FC<NavButtonProps> = ({ to, label, icon }) => {
  const theme = useTheme();
  const buttonStyles = {
    color: theme.palette.secondary.dark,
    marginLeft: theme.spacing(1),
  };

  return (
    <NavLink to={to} style={({ isActive }) => ({
      ...buttonStyles,
      textDecoration: isActive ? 'overline' : 'none',
    })}>
      <Button variant="contained" color='secondary' startIcon={icon}>
        {label}
      </Button>
    </NavLink>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav>
      <div>
        <NavButton to="/" label="Home" icon={<HomeIcon />} onClick={() => {}} />
        <NavButton to="/menu" label="Menu" icon={<MenuBookIcon />} onClick={() => {}} />
        <NavButton to="/location" label="Location & Hours" icon={null} onClick={() => {}} />
      </div>
    </nav>
  );
};

export default Navbar;
