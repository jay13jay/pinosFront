import React from 'react';
import { Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Toolbar>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/location-and-hours">
        Location and Hours
      </Button>
      <Button color="inherit" component={Link} to="/menu">
        Menu
      </Button>
    </Toolbar>
  );
};

export default Navbar;
