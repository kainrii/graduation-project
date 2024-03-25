import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/public/Home'
import{
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

