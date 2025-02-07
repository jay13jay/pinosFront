import React from 'react';
import { Box } from '@mui/material';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box component="main" sx={{ 
      flexGrow: 1, 
      py: 3, 
      bgcolor: 'primary.main',
    }}>
      {children}
    </Box>
  );
};

export default MainContent;
