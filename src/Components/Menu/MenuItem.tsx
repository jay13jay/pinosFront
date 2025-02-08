import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MenuItemProps } from './types';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const MenuItem: React.FC<MenuItemProps> = ({ title, image, description, ingredients, price }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 3);
  const ingredientsList = displayedIngredients.map((ingredient, index) => (
    <Item>
      {ingredient}
    </Item>
    ));

  return (
    <Card sx={{ maxWidth: 345, height: 475}}>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title="Cooked sliced pizza"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Grid container spacing={1}>
          {ingredientsList}
          {ingredients.length > 3 && (
            <Button onClick={() => setShowAll(!showAll)} style={{ cursor: 'pointer' }}>
                {showAll ? 'Show less' : '→ Show more'}
            </Button>
          )}
        </Grid>
      </CardContent>
      <Typography variant="h6" component="div">
        {price}
      </Typography>
    </Card>
  );
};

export default MenuItem;
