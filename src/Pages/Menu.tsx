import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MenuItem from '../Components/Menu/MenuItem';
import MainContent from '../Components/MainContent';
import MenuContainer from '../Components/Menu/MenuContainer';

const menuItems = [
  {
    title: "Pizza Margherita",
    description: "Classic pizza with tomatoes, mozzarella cheese, and fresh basil.",
    ingredients: ["Tomatoes", "Mozzarella Cheese", "Fresh Basil"],
    price: "$12.99",
    image: "/files/menu_items/Cooked_sliced_pizza_on_peel-CPO.jpg"
  },
  {
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
    ingredients: ["Spaghetti", "Eggs", "Cheese", "Pancetta", "Pepper"],
    price: "$14.99",
    image: "/files/menu_items/spaghetti-carbonara.jpg"
  },
  {
    title: "Tiramisu",
    description: "Popular coffee-flavored Italian dessert.",
    ingredients: ["Coffee", "Mascarpone Cheese", "Ladyfingers", "Cocoa Powder"],
    price: "$6.99",
    image: "/files/menu_items/tiramisu.jpg"
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
                price={item.price}
                image={item.image}
              />
            ))}
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                price={item.price}
                image={item.image}
              />
            ))}
            {menuItems.map((item, index) => (
              <MenuItem 
                key={index}
                title={item.title}
                description={item.description}
                ingredients={item.ingredients}
                price={item.price}
                image={item.image}
              />
            ))}
          </MenuContainer>
        </MainContent>
      <Footer />
    </>
  );
};

export default Menu;
