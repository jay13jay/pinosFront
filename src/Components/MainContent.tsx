import React from 'react';
import { Box, useTheme } from '@mui/material';
import ChatBox from './Chat/ChatBox';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box component="main" sx={{ 
      xs: {
        width: '100%',
        height: '10%',
      },
      minWidth: '350px',
      display: 'flex',
      flexGrow: 1,
      overflow: 'auto',
      flexDirection: 'column', 
      textAlign: 'center',
      py: 3,
      px: 10,
      marginTop: 4, // top margin accounts for the top header
      marginBottom: 15, // gives a gap between the main content and the footer
      borderRadius: 1.5,
      // border: `5px solid ${theme.palette.secondary.main}`,
    }}>
      {children}
      <ChatBox />
    </Box>
  );
};

export default MainContent;
