// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const itskills = {
  id: 'itskills',
  type: 'group',
  children: [
    {
      id: 'profile-itskills',
      title: 'IT skills',
      type: 'item',
      url: 'itskills',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default itskills;
