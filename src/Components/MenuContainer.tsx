import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    // padding: theme.spacing(1),
    minWidth: '100%', // Ensure all items have the same width
    border: '5px solid #000',
    overflow: 'hidden', // Prevent overflow
}));

const MenuContainer: React.FC = ({ children }) => {
  return (
        <Grid container spacing={3}>
        {React.Children.map(children, (child) => (
            <Grid item xs={12} sm={6}>
                <Item>{child}</Item>
            </Grid>
        ))}
        </Grid>
  );
};

export default MenuContainer;
