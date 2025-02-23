import React from 'react';
import pinosStaffPic from '../assets/pinos_staff_pic.avif'; 
import Jumbotron from '../Components/Jumbotron';

const placeholderImages = [
  pinosStaffPic,
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2"
];

const base = import.meta.env.BASE_URL;

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron title="Welcome to Pinos rVA" subtitle="Authentic Italian Cuisine" />
    </>
  );
};

export default Home;
