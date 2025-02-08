import React from 'react';
import { Container, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';

const LocationAndHours: React.FC = () => {
  return (
    <>
      <Header title="Location" />
      <MainContent>
        <Typography variant="h2">Our Location and Hours</Typography>
      </MainContent>
      <Footer />
      </>
  );
};

export default LocationAndHours;
