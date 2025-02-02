import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import '../App.css';

/**
 * MainContent component
 * 
 * This component serves as the main content area of the application.
 * It wraps its children with a styled Box component from Material-UI.
 * 
 * Props:
 * - children: React nodes to be rendered inside the main content area.
 */

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  minWidth: '100%', // Ensure all items have the same width
}));


const MainContent = ({ children }) => {
  return (
      <Box sx={{
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'rgb(8, 77, 7)',
        // border: '10px solid black',
        // borderRadius: 3,
        // p: 1,
        my: 3,
        flexGrow: 1,
      }}>
          <Grid container spacing={1}>
            <Grid size={12}>
              {children}
            </Grid>
          </Grid>
      </Box>
  );
};

export default MainContent;
