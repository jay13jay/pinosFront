import React, { useContext } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import { CartContext, CartItem } from './CartContext';

const Cart = () => {
	const { items, removeItem } = useContext(CartContext);

	const rawTotalPrice = items.reduce(
		(total, item) => {
			const price = item.price;
			const quantity = item.quantity;
			console.log(`Price: ${price}, Quantity: ${quantity}, Total: ${total}`);
			return total + price * quantity;
		},
		0
	);
	const totalPrice = parseFloat(rawTotalPrice.toFixed(2));

	return (
		<Box>
			<Typography variant="h4">Your Cart</Typography>
			<List>
				{items.map(item => (
					<React.Fragment key={item.id}>
						<ListItem>
							<ListItemText primary={`${item.name} (x${item.quantity})`} secondary={`Price: \$ ${item.price}`} />
							<Button onClick={() => removeItem(item.id)}>Remove</Button>
						</ListItem>
						<Divider />
					</React.Fragment>
				))}
			</List>
			<Typography variant="h6">Total: $ {totalPrice}</Typography>
		</Box>
	);
};

export default Cart;
