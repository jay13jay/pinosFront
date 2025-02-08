import React from 'react';
import { Box, useTheme } from '@mui/material';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const theme = useTheme();
/* max-width: 1920px; */
// margin: 0 auto;
/* padding: 2rem; */
/* text-align: center; */
/* justify-content: center; */
/* background-color: rgb(113, 113, 113); */
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
      // width: 1240,
      // height: 600,
      py: 3,
      px: 10,
      marginTop: 10, // top margin accounts for the top header
      marginBottom: 15, // gives a gap between the main content and the footer
      // bgcolor: 'rgb(40,40,40)',
      // bgcolor: 'rgb(113, 113, 113)',
      borderRadius: 1.5,
      border: `5px solid ${theme.palette.secondary.main}`,
    }}>
      {children}
    </Box>
  );
};

export default MainContent;
