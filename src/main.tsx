import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LocationAndHours from './Pages/LocationAndHours';
import Menu from './Pages/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CartProvider } from './Components/Cart/CartContext';
import ChatBox from './Components/Chat/ChatBox';

import './App.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/cinzel/800.css';
import '@fontsource/cinzel/900.css';

import CartPage from './Pages/CartPage';

interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
const base = import.meta.env.BASE_URL; // should be "/pinosFront/"

const customTheme = {
  typography: {
    fontFamily: '"Cinzel", serif',
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
};

const theme = createTheme(customTheme);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Router basename={base}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location-and-hours" element={<LocationAndHours />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <ChatBox />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
