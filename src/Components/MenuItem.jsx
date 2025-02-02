import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const MenuItem = ({ title, description, ingredients, price }) => {
  return (
    <Card sx={{ 
      m: 1,
      width: '100%',
      backgroundColor: 'rgba(255, 0, 0, 0.58)',
      border: '7px solid black',
    }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <List sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index} sx={{ width: '33.33%' }}>
              <Typography variant="body2">{ingredient}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" component="p">
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
