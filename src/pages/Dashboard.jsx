import Stats from '../components/Stats';
import { Stack} from '@mui/material';
import Chart from '../components/Chart';
import LastOrders from '../components/LastOrders';

function Dashboard() {
  return (
    <Stack sx={{ m: 4, maxWidth: '100%', maxHeight: '100%' }} spacing={4}>
      <Stats />
      <Chart />
      <LastOrders />
    </Stack>
  );
}

export default Dashboard;
