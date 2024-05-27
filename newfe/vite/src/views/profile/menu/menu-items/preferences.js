// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const preferences = {
  id: 'preferences',
  type: 'group',
  children: [
    {
      id: 'profile-preferences',
      title: 'Interview',
      type: 'item',
      url: 'preferences',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default preferences;
