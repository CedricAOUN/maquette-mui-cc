import { Box, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';

function Chart() {
  return (
    <Box sx={{ maxWidth: '500px' }}>
      <Typography variant='h5' fontWeight={'600'} sx={{ mb: 2 }}>
        Graphique(avec @mui/x-charts)
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        colors={['cyan']}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={300}
      />
    </Box>
  );
}

export default Chart;
