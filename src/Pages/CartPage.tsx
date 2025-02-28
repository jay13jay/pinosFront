import React from 'react';
import { Container, Typography } from '@mui/material';
import Cart from '../Components/Cart/Cart';

const CartPage: React.FC = () => {
  return (
    <>
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        {/* Render the shopping cart */}
        <Cart />
      </Container>
    </>
  );
};

export default CartPage;
