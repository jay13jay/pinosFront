import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LocationAndHours from './LocationAndHours';
import './App.css'; // Import the CSS file
// ...existing code...

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Change this to your desired primary color
    },
    secondary: {
      main: '#0dff00', // Change this to your desired secondary color
    },
    background: {
      default: '#ffe200', // Change this to your desired background color
    },
  },
  // ...other theme customization...
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationAndHours />
      {/* ...existing code... */}
    </ThemeProvider>
  );
};

export default App;
