import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(() => ({
    border: '5px solid #000',
}));

interface MenuContainerProps {
  children: React.ReactNode;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ children }) => {
  return (
        <Grid container spacing={2}>
        {React.Children.map(children, (child) => (
            <Grid item xs={12} sm={6}>
                <Item>{child}</Item>
            </Grid>
        ))}
        </Grid>
  );
};

export default MenuContainer;
