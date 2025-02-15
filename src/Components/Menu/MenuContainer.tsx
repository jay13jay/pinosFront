import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import type { MenuContainerProps } from './types';

const Item = styled(Paper)(() => ({
  marginTop: '7px',
    border: '5px solid #fff',
    borderRadius: '20px',

}));

const MenuContainer: React.FC<MenuContainerProps> = ({ children }) => {
  return (
        
        <Grid container spacing={1} flexGrow={1} bgcolor={'black'} justifyContent={'center'}>
        {React.Children.map(children, (child) => (
            <Item>{child}</Item>
        ))}
        </Grid>
  );
};

export default MenuContainer;
