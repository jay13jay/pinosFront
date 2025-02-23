import React, { useState, useEffect } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images]);

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', 
    width: '800px', 
    height: '400px',
    border: '12px solid black',
    borderRadius: '20px', 
    overflow: 'hidden' }}>
      <img 
        src={images[current]} 
        alt={`Slide ${current}`} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <button 
        onClick={handlePrev} 
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowBackIos />
      </button>
      <button 
        onClick={handleNext} 
        style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowForwardIos />
      </button>
    </div>
  );
};

export default ImageSlider;
