import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: { main: '#004aad' },
    white: { main: '#fff' },
    text: { primary: '#000' },
    secondary: { main: '#000' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontSize: 11.5,
  },
  spacing: 8.5,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
