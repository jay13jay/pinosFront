import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout is the general structure of the pages, includes header, footer, etc
import Layout from './Components/Layout';
import Home from './Pages/Home';
import LocationAndHours from './Pages/LocationAndHours';
import Menu from './Pages/Menu';
import { CartProvider } from './Components/Cart/CartContext';
import ChatBox from './Components/Chat/ChatBox';

import './App.css';
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

// const theme = createTheme(customTheme);
import { ThemeProvider } from "@material-tailwind/react";

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <CartProvider>
          <Layout>
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
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
