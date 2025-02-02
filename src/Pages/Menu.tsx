import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MenuItem from '../Components/MenuItem';
import MainContent from '../Components/MainContent';
import MenuContainer from '../Components/MenuContainer';

const Menu = () => {
  return (
    <>
      <Header title="Menu" />
      <Container className="container">
        
          <Typography variant="h4">
            Our delicious offerings:
          </Typography>
        <MainContent>
          <MenuContainer>
            <MenuItem 
              title="Pizza Margherita" 
              description="Classic pizza with tomatoes, mozzarella cheese, and fresh basil." 
              ingredients={["Tomatoes", "Mozzarella Cheese", "Fresh Basil"]} 
              price="$12.99" 
            />
            <MenuItem 
              title="Spaghetti Carbonara" 
              description="Traditional Italian pasta with eggs, cheese, pancetta, and pepper." 
              ingredients={["Spaghetti", "Eggs", "Cheese", "Pancetta", "Pepper"]} 
              price="$14.99" 
            />
            <MenuItem 
              title="Tiramisu" 
              description="Popular coffee-flavored Italian dessert." 
              ingredients={["Coffee", "Mascarpone Cheese", "Ladyfingers", "Cocoa Powder"]} 
              price="$6.99" 
            />
          </MenuContainer>
        </MainContent>
      </Container>
      <Footer />
    </>
  );
};

export default Menu;
