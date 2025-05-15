import { Box } from '@mui/material';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Box
        display='grid'
        gridTemplateColumns='80px 11fr'
        gridTemplateRows='70px 11fr'
        height={'100vh'}
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
