import { Stack } from '@mui/material'
import StatCard from './StatCard'
import { AttachMoney, People, Message } from '@mui/icons-material'

const mockStats = [
  {
    icon: <AttachMoney sx={{ fontSize: '32px' }} />,
    value: 1000,
    unit: 'Ventes',
  },
  {
    icon: <People sx={{ fontSize: '32px' }} />,
    value: 300,
    unit: 'Clients',
  },
  {
    icon: <Message sx={{ fontSize: '32px' }} />,
    value: 5,
    unit: 'Messages',
  },
]

function Stats() {
  return (
    <Stack direction='row' width={'100%'} spacing={4} justifyContent='space-between'>
      {mockStats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          unit={stat.unit}
        />
      ))}
    </Stack>
  )
}

export default Stats