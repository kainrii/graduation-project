import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { element } from 'prop-types';
// jobs routing
const Jobs = Loadable(lazy(()=> import('views/jobs')));

// companies routing
const Companies = Loadable(lazy(()=> import('views/companies')));
const CompanyInfo = Loadable(lazy(()=>import('views/companyinfo')))
//profile routing
const Profile = Loadable(lazy(() => import('views/profile')));
const PersonalDetails = Loadable(lazy(() => import('views/profile')));
const Background = Loadable(lazy(() => import('views/profile')));
const ITSkills = Loadable(lazy(() => import('views/profile')));
const Preferences = Loadable(lazy(() => import('views/profile')));
const CreateProfile = Loadable(lazy(()=>import('views/profile')))

//interview routing
const Interview = Loadable(lazy (()=>import('views/interview')));



// ==============================|| MAIN ROUTING ||============================== //

const DeveloperRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/:id',
      element:<Jobs/>
    },
    {
      path: 'new',
      element:<CreateProfile/>
    },
    {
      path: 'profile',
      children:[
        {
          path:'profile-id/:id',
          element: <Profile/>,
          children: [
            {
              path:'profile-personaldetails/:id',
              element: <PersonalDetails/>
            },
            {
              path:'background/:id',
              element: <Background/>
            },
            {
              path:'itskills/:id',
              element: <ITSkills/>
            },
            {
              path:'preferences/:id',
              element: <Preferences/>
            }
          ]
        }

      ]
    },

    {
      path: 'fyc/',
      children:[
        {
          path: 'fyc-jobs/:id',
          element: <Jobs/>
        },
        {
          path:'fyc-companies/:id',
          element: <Companies/>,
        },
        {
          path: 'fyc-companies/:company-id',
          element: <CompanyInfo/>
        }
      ]
    },
    
    {
      path: 'interview',
      children:[
        {
          path: 'dashboard/:id',
          element: <Interview/>
        },
      ]
    }
  ]


};

export default DeveloperRoutes;
