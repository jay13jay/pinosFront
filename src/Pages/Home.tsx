import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ReusableBox from '../ReusableBox';
import MainContent from '../Components/MainContent';

const Home = () => {
  return (
    <>
      <Header title="Pino's RVA" />
          <MainContent>
            <Container>
              <Typography variant="h2" component="h1" gutterBottom>
                Pinos RVA!
              </Typography>
              <Typography variant="h5" component="h2">
                The passion for Italian food done well
              </Typography>
            </Container>
          </MainContent>
      <Footer />
    </>
  );
};

export default Home;
