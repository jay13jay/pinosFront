import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';

const Home: React.FC = () => {
  return (
    <>
    <Header title="Pino's RVA" />
    <MainContent>
      <Typography variant="h2" component="h1" gutterBottom>
        Pinos RVA!
      </Typography>
      <Typography variant="h4" component="h2">
        The passion for Italian food done well
      </Typography>
    </MainContent>
    <Footer />
    </>
  );
};

export default Home;
