import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MenuItemProps } from './types';


const MenuItem: React.FC<MenuItemProps> = ({ title, description, ingredients, price }) => {
    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 240 }}
        image="/files/menu_pictures/Cooked_sliced_pizza_on_peel-CPO.jpg"
        title="Cooked sliced pizza"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MenuItem;