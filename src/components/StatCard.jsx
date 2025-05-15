import { Card, Stack, Typography } from '@mui/material';

function StatCard({ icon, value, unit }) {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 2,
        borderRadius: 2,
        boxShadow: 1,
        gap: 2,
        width: '100%',
      }}
    >
      {icon}
      <Stack>
        <Typography variant='h6' fontWeight={'600'}>{value}</Typography>
        <Typography variant='subtitle2' color='#717171'>{unit}</Typography>
      </Stack>
    </Card>
  );
}

export default StatCard;
