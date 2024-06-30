// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const profile = {
  id: 'profile',
  title: 'Profile',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Profile',
      type: 'item',
      url: '/profile/profile-id/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default profile;
