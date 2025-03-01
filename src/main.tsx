import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout is the general structure of the pages, includes header, footer, etc
import Home from './Pages/Home';
import LocationAndHours from './Pages/LocationAndHours';
import Menu from './Pages/Menu';
import Providers from './Components/Providers';

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
      <Router basename={base}>
        <Providers>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location-and-hours" element={<LocationAndHours />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Providers>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
