import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { element } from 'prop-types';
// jobs routing
const Jobs = Loadable(lazy(()=> import('views/jobs')));

// companies routing

const Companies = Loadable(lazy(()=> import('views/companies')));

//profile routing

const Profile = Loadable(lazy(() => import('views/profile')));
const PersonalDetails = Loadable(lazy(() => import('views/profile')));
const Background = Loadable(lazy(() => import('views/profile')));
const ITSkills = Loadable(lazy(() => import('views/profile')));
const Preferences = Loadable(lazy(() => import('views/profile')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element:<Jobs/>
    },

    {
      path: 'profile',
      children:[
        {
          path:'profile-id',
          element: <Profile/>,
          children: [
            {
              path:'profile-personaldetails',
              element: <PersonalDetails/>
            },
            {
              path:'background',
              element: <Background/>
            },
            {
              path:'itskills',
              element: <ITSkills/>
            },
            {
              path:'preferences',
              element: <Preferences/>
            }
          ]
        }

      ]
    },

    {
      path: 'fyc',
      children:[
        {
          path: 'fyc-jobs',
          element: <Jobs/>
        },
        {
          path:'fyc-companies',
          element: <Companies/>
        }
      ]
    }
  ]
};

export default MainRoutes;
