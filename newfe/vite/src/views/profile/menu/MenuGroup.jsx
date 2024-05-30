import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// project imports
import MenuItem from './MenuItem';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const MenuGroup = ({ item, onClick }) => {
  const theme = useTheme();

  // menu list collapse & items
  const items = item.children?.map((menu) => {
    return <MenuItem key={menu.id} item={menu} level={1} onClick={onClick}  />;
  });

return (
    <>
      <List
        subheader={
          item.title && (
            <Typography variant="caption" sx={{...theme.typography.menuCaption }} display="block" gutterBottom>
              {item.title}
              {item.caption && (
                <Typography variant="caption" sx={{...theme.typography.subMenuCaption }} display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider
      <Divider sx={{ mt: 0.25, mb: 1.25 }} /> */}
    </>
  );
};

MenuGroup.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func // Added prop type for onClick callback
};

export default MenuGroup;
