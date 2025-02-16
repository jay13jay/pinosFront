import React, { useContext, useState, useEffect } from 'react'; // added useEffect
import { AppBar, Toolbar, Button, IconButton, Typography, Box, useTheme, Badge, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const [showNav, setShowNav] = useState(!isSmall); // default visible on desktop, hidden on small
  const { items } = useContext(CartContext);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const toggleNav = () => setShowNav(prev => !prev);

  // update nav visibility when screen size changes
  useEffect(() => {
    setShowNav(!isSmall);
  }, [isSmall]);

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between', alignItems: isSmall ? 'flex-start' : 'center', flexDirection: isSmall ? 'column' : 'row' }}>
        <Box display="flex" justifyContent="flex-end" width="90%" alignItems="center">
          {showNav ? (
            <>
              <>
                {/* Navigation buttons */}
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
              </>
              <IconButton color="inherit" onClick={toggleNav}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <IconButton color="inherit" onClick={toggleNav}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
