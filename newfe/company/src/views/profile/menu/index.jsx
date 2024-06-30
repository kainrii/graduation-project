import { useNavigate} from 'react-router-dom';
import profileMenuItem from './menu-items';
import MenuGroup from './MenuGroup';

const MenuList = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    navigate(item.url);
  };

  const menuItems = profileMenuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return <MenuGroup key={item.id} item={item} onClick={handleMenuItemClick} history={history} />;
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
