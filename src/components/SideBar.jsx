import HomeIcon from '@mui/icons-material/Home';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/material';

function SideBar() {
  return (
    <Stack
      sx={{
        height: '100%',
        pt: 12,
        boxShadow: 1,
        '& .MuiSvgIcon-root': {
          color: '#717171',
        }
      }}
      alignItems={'center'}
      spacing={2}
    >
      <HomeIcon />
      <GridViewRoundedIcon />
      <AddIcon />
      <PeopleIcon />
      <BarChartIcon />
      <SettingsIcon />
    </Stack>
  );
}

export default SideBar;
