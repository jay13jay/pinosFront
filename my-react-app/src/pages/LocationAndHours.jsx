import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

const LocationAndHours = () => {
  return (
    <>
      <Header />
      <MainContent>
        <h2>Location and Hours</h2>
        <p>Our location is at 123 Main St, Anytown, USA.</p>
        <p>We are open from:</p>
        <ul>
          <li>Monday to Friday: 9 AM - 9 PM</li>
          <li>Saturday: 10 AM - 10 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </MainContent>
      <Footer />
    </>
  );
};

export default LocationAndHours;