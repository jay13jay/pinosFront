import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LocationAndHours from './Pages/LocationAndHours';
import Menu from './Pages/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

const getComputedStyleValue = (variable: string) => getComputedStyle(document.documentElement).getPropertyValue(variable);

const theme = createTheme({
  palette: {
    primary: {
      main: getComputedStyleValue('--primary-color').trim(), // red
      light: getComputedStyleValue('--primary-color-light').trim(), // light red
      dark: getComputedStyleValue('--primary-color-dark').trim(), // dark red
      contrastText: getComputedStyleValue('--primary-color-contrast').trim(), // white
    },
    secondary: {
      main: getComputedStyleValue('--secondary-color').trim(), // yellow
      light: getComputedStyleValue('--secondary-color-light').trim(), // light yellow
      dark: getComputedStyleValue('--secondary-color-dark').trim(), // orange
      contrastText: getComputedStyleValue('--secondary-color-contrast').trim(), // black
    },
  },
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location-and-hours" element={<LocationAndHours />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
