import React, { useContext } from 'react';
import { Button, useTheme, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import { NavButtonProps } from '../types';
import { CartContext } from '../Cart/CartContext';

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
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <nav>
      <div>
        <NavButton to="/" label="Home" icon={<HomeIcon />} onClick={() => {}} />
        <NavButton to="/menu" label="Menu" icon={<MenuBookIcon />} onClick={() => {}} />
        <NavButton to="/location-and-hours" label="Location" icon={null} onClick={() => {}} />
        <NavButton 
          to="/cart" 
          label="Cart" 
          icon={
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          } 
          onClick={() => {}} 
        />
      </div>
    </nav>
  );
};

export default Navbar;
