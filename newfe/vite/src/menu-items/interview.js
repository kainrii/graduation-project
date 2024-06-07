// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const interview = {
  id: 'interview',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Interview',
      type: 'item',
      url: 'interview/dashboard',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default interview;
