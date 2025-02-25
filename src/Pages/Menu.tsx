import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MenuItem from '../Components/Menu/MenuItem';
import MainContent from '../Components/MainContent';
import MenuContainer from '../Components/Menu/MenuContainer';

const base = import.meta.env.BASE_URL;

const menuItems = [
  {
    id: 0,
    title: "Pizza Margherita",
    description: "Classic pizza with tomatoes, mozzarella cheese, and fresh basil.",
    ingredients: ["Tomatoes", "Mozzarella Cheese", "Fresh Basil"],
    price: "12.99",
    image: `${base}menu_items/Cooked_sliced_pizza_on_peel-CPO.jpg`
  },
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
    ingredients: ["Spaghetti", "Eggs", "Cheese", "Pancetta", "Pepper"],
    price: "14.99",
    image: `${base}menu_items/spaghetti-carbonara.jpg`
  },
  {
    id: 2,
    title: "Tiramisu",
    description: "Popular coffee-flavored Italian dessert.",
    ingredients: ["Coffee", "Mascarpone Cheese", "Ladyfingers", "Cocoa Powder"],
    price: "6.99",
    image: `${base}menu_items/tiramisu.jpg`
  }
];

const Menu: React.FC = () => {
  return (
    <>
      <Header title="Menu" />
        <MainContent>
          <MenuContainer>
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                price={Number(item.price)}
                image={item.image} id={0}              />
            ))}
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                price={Number(item.price)}
                image={item.image} id={0}              />
            ))}
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                price={Number(item.price)}
                image={item.image} id={0}              />
            ))}
          </MenuContainer>
        </MainContent>
      <Footer />
    </>
  );
};

export default Menu;
