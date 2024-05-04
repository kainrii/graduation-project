import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/public/Home'
import{
    BrowserRouter,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
