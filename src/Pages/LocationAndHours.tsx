import React from 'react';
import { Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import MainContent from '../Components/MainContent';
import Navbar from '../Components/Navbar';

const LocationAndHours = () => {
  return (
    <>
      <Header title="Location and Hours" />
      <MainContent>
        <Typography variant="h5" component="h2">
          4112 Meadowdale Blvd, Richmond, VA 23234
        </Typography>
        <Typography variant="h3" component="h3">
          Hours:
        </Typography>
        <Typography variant="body1">
          Monday - Friday: 9am - 9pm
        </Typography>
        <Typography variant="body1">
          Saturday - Sunday: 10am - 8pm
        </Typography>
      </MainContent>
      <Footer />
    </>
  );
};

export default LocationAndHours;
