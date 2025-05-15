import { Drawer, List, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const icons = [
  <HomeIcon />,
  <GridViewRoundedIcon />,
  <AddIcon />,
  <PeopleIcon />,
  <BarChartIcon />,
  <SettingsIcon />,
];

function SideBar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          width: 80,
        },
      }}
    >
      <List
        sx={{
          height: '100%',
          boxShadow: 1,
          paddingTop: 10,
          gap: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          '& .MuiSvgIcon-root': {
            color: '#717171',
            mx: 'auto',
          },
        }}
      >
        {icons.map((icon, index) => (
          <ListItemIcon
            key={index}
            sx={{
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#f0f0f0',
                color: '#000',
              },
            }}
          >
            {icon}
          </ListItemIcon>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;