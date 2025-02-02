import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const Menu = () => {
  return (
    <>
      <Header />
      <MainContent>
        <h2>Menu</h2>
        <p>Here you can find our delicious menu items!</p>
        {/* Add menu items here */}
      </MainContent>
      <Footer />
    </>
  );
};

export default Menu;