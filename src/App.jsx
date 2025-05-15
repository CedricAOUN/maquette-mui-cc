import { Box } from '@mui/material';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Box
        display='grid'
        gridTemplateColumns='80px 1fr'
        gridTemplateRows='70px 1fr'
        sx={{
          height: '100dvh',
          maxHeight: '100dvh',
          overflow: 'hidden',
        }}
      >
        <Box gridRow='1 / span 2'>
          <SideBar />
        </Box>
        <Header />
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
