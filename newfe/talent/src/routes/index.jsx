import { createBrowserRouter } from 'react-router-dom';

// routes
import DeveloperRoutes from './DeveloperRoutes';
import CompanyRoutes from './CompanyRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //
export const devrouter = createBrowserRouter([DeveloperRoutes, AuthenticationRoutes], {
  basename: '/developer'
});
export const comrouter = createBrowserRouter([CompanyRoutes, AuthenticationRoutes], {
  basename: '/company'
});

