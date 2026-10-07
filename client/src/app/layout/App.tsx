import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router';
import HomePage from '../../feature/activities/home/HomePage';

function App() { //This is teh main React Component for the Page.
  //Activities is the list of activities that we will get from the backend API. setActivities is the function to update the activities state. useState is a React hook that allows us to add state to functional components. Activity[] is the type of the activities state, which is an array of Activity objects.
  const location = useLocation();


  return (
    <Box sx={{ bgcolor: 'eeeeee' }}>
      <CssBaseline />
      {location.pathname === '/' ? <HomePage /> :
        <>
          <NavBar />
          <Container maxWidth="xl" sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      }
    </Box>
  )
}
export default App;

