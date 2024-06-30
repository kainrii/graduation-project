// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const jobs = {
  id: 'foryourcareer',
  title: 'For your Career',
  type: 'group',
  children: [
    {
      id: 'fyc-jobs',
      title: 'Jobs',
      type: 'item',
      url: '/fyc/fyc-jobs/',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'fyc-companies',
      title: 'Companies',
      type: 'item',
      url: '/fyc/fyc-companies/',
      icon: icons.IconPalette,
      breadcrumbs: false
    }
  ]
};

export default jobs;
