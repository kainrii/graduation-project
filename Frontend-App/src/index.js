import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/public/Home'
import{
    BrowserRouter,
} from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);