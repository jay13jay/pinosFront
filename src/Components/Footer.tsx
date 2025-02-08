import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
            <Typography variant="body1"
            sx={{ textAlign: 'center', flexGrow: 1 }}>
            Site by: Sentient™ 2025 &copy;
            </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
  );
};

export default Footer;
