// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const personaldetails = {
  id: 'personaldetails',
  type: 'group',
  children: [
    {
      id: 'profile-personaldetails',
      title: 'Personal Details',
      type: 'item',
      url: '/profile/profile-id/profile-personaldetails',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default personaldetails;
