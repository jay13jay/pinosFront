import React from 'react';
import { Button, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom';

const NavButton: React.FC<{ to: string, label: string, icon: React.ReactNode }> = ({ to, label, icon }) => {
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
        <NavButton to="/" label="Home" icon={<HomeIcon />} />
        <NavButton to="/menu" label="Menu" icon={<MenuBookIcon />} />
        <NavButton to="/location-and-hours" label="Location & Hours" icon={null} />
      </div>
    </nav>
  );
};

export default Navbar;
