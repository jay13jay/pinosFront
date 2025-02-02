import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <>
      <Header />
      <MainContent>
        <h2>Benvenuto!</h2>
        <h5>Welcome to the Home Page</h5>
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;