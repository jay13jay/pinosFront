import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Cart from '../Components/Cart/Cart';

const CartPage: React.FC = () => {
  return (
    <>
      <Header title="Your Cart" />
      <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Shopping Cart
        </Typography>
        {/* Render the shopping cart */}
        <Cart />
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
