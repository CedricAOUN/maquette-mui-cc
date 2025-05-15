import { Box } from '@mui/material';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Box
        display='grid'
        gridTemplateColumns='1fr 11fr'
        gridTemplateRows='1fr 11fr'
        height={'100vh'}
      >
        <Box gridRow='1 / span 2'>
          <SideBar />
        </Box>
        <Header />
        <Box>CONTENT</Box>
      </Box>
    </>
  );
}

export default App;
