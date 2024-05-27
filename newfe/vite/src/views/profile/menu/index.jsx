// material-ui
import { Typography } from '@mui/material';

// project imports
import MenuGroup from './MenuGroup';
import profileMenuItem from './menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const menuItems = profileMenuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <MenuGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{menuItems}</>;
};

export default MenuList;
