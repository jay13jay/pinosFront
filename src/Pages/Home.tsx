import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import pinosStaffPic from '../assets/pinos_staff_pic.avif'; 

const base = import.meta.env.BASE_URL;

const Home: React.FC = () => {
  return (
    <>
      <Header title="Pino's RVA" />
      <MainContent>
        <Typography color='secondary' variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
          Pinos RVA!
        </Typography>
        <Typography color='secondary' variant="h4" component="h2" sx={{ fontWeight: 600 }}>
          The passion for Italian food done well
        </Typography>
        {/* <img src={pinosStaffPic} alt="Pinos Staff" style={{ maxWidth: '100%' }} /> new image insertion */}
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
