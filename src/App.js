import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import draculaTheme from './theme'; // Import the Dracula theme
import Routes from './routes'; // Import the Routes component

function App() {
  return (
    <ThemeProvider theme={draculaTheme}>
      <CssBaseline /> 
      <Routes /> 
    </ThemeProvider>
  );
}

export default App;
