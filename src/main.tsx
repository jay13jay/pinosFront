import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LocationAndHours from './Pages/LocationAndHours';
import Menu from './Pages/Menu';

import './App.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      {/* <ThemeProvider theme={theme}>
        <CssBaseline /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location-and-hours" element={<LocationAndHours />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Router>
      {/* </ThemeProvider> */}
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
