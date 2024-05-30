// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const preferences = {
  id: 'profile-preferences',
  type: 'group',
  children: [
    {
      id: 'profile-preferences',
      title: 'Preferences',
      type: 'item',
      url: '/profile/profile-id/preferences',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default preferences;
