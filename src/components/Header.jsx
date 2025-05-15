import { Avatar, Stack, Typography } from "@mui/material"

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" padding={2} alignItems={'center'} bgcolor={'primary.main'}>
      <Typography variant="h5" color={'white'}>Tableau de bord</Typography>
      <Avatar alt="Avatar image" src="./assets/avatar.png" />
    </Stack>
  )
}

export default Header