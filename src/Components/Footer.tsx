import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{
      py: 3,
      px: 2, 
      mt: 'auto', 
      backgroundColor: 'primary.main' 
    }}>
      <Typography variant="body1">Site by: Sentient™ 2025</Typography>
    </Box>
  );
};

export default Footer;
