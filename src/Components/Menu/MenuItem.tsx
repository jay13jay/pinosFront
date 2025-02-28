import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { MenuItemProps } from './types';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Cart/CartContext';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#grey',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const MenuItem: React.FC<{ menuItem: MenuItemProps }> = ({ menuItem }) => {
	const { id, title, image, description, ingredients, price, section } = menuItem;
	const numericId = Number(id);
	const [showAll, setShowAll] = useState(false);
	const { addItem } = useContext(CartContext);

	const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 3);
	const ingredientsList = displayedIngredients.map((ingredient, index) => (
		<Item key={index}>
			{ingredient}
		</Item>
	));

	return (
		<Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
			<CardMedia sx={{ height: 240, borderRadius: '20px' }} image={image} title="Cooked sliced pizza" />
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				<Typography variant="subtitle1" color="textSecondary">
					{section}
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
			<Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ padding: 2 }}>
				<Item sx={{ flexGrow: 1 }}>
					<Typography variant="h6" component="div">
						$ {price}
					</Typography>
				</Item>
				<Item>
					<Button
						variant="contained"
						color="primary"
						onClick={() => addItem({ id: id, name: title, price: price })}
					>
						Add to Cart
					</Button>
				</Item>
			</Grid>
		</Card>
	);
};

export default MenuItem;
