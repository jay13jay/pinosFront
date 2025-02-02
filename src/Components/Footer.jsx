import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(77, 7, 7)',
        color: 'white',
        bottom: 0,
        boxShadow: '2px 5px 7px 0 rgba(0, 0, 0, 0.59)',
        textAlign: 'center',
        padding: '1rem',
      }}
      className="footer"
    >
      <Typography variant="body1">
        © 2025 Sentient, LLC
      </Typography>
    </Box>
  );
};

export default Footer;
