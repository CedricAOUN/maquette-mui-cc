import { AppBar, Box, IconButton, Menu, Typography } from '@mui/material';
import avatar from '../assets/avatar.png';
import { Toolbar } from '@mui/x-charts';
import { AccountCircle } from '@mui/icons-material';

function Header() {
  const auth = true;
  return (
    <header>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 600, ml: 2 }}>
            Tableau de bord
          </Typography>
          <Box>
            <IconButton
              size='large'
              color='inherit'
            >
              <AccountCircle sx={{ fontSize: '40px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
