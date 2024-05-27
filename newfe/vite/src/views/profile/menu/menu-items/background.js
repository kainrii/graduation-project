// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const background = {
  id: 'background',
  type: 'group',
  children: [
    {
      id: 'profile-background',
      title: 'Background',
      type: 'item',
      url: 'background',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default background;
