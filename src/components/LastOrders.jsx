import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const mockOrders = [
  {
    id: 1,
    name: 'Nom 1',
    date: '2023-10-01',
    status: 'En cours',
  },
  {
    id: 2,
    name: 'Nom 2',
    date: '2023-10-02',
    status: 'Terminé',
  },
  {
    id: 3,
    name: 'Nom 3',
    date: '2023-10-03',
    status: 'Payée',
  },
  {
    id: 4,
    name: 'Nom 4',
    date: '2023-10-04',
    status: 'Annulé',
  },
];

function LastOrders() {
  return (
    <TableContainer component={Paper}>
      <Typography variant='h6' fontWeight={'600'} sx={{ p: 2 }}>
        Dernières commandes
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Nom
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Date
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {order.id}
              </TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LastOrders;
