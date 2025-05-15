import { Avatar, Stack, Typography } from '@mui/material';
import avatar from '../assets/avatar.png';

function Header() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      padding={2}
      alignItems={'center'}
      bgcolor={'primary.main'}
      sx={{
        boxShadow: 1,
      }}
    >
      <Typography variant='h5' color={'white'} fontWeight={'600'}>
        Tableau de bord
      </Typography>
      <Avatar alt='Avatar image' src={avatar} />
    </Stack>
  );
}

export default Header;
