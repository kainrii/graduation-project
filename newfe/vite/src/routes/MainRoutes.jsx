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
const PersonalDetails = Loadable(lazy(() => import('views/profile/personaldetails')));
const Background = Loadable(lazy(() => import('views/profile/background')));
const ITSkills = Loadable(lazy(() => import('views/profile/itskills')));
const Preferences = Loadable(lazy(() => import('views/profile/preferences')));


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },

    {
      path: 'profile',
      children:[
        {
          path:'profile-id',
          element: <Profile/>
        },
        {
          path:'personaldetails',
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
