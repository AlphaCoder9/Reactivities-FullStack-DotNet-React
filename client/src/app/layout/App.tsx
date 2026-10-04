import { Box, Container, CssBaseline } from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

function App() { //This is teh main React Component for the Page.
  //Activities is the list of activities that we will get from the backend API. setActivities is the function to update the activities state. useState is a React hook that allows us to add state to functional components. Activity[] is the type of the activities state, which is an array of Activity objects.

  return (
    <Box sx={{ bgcolor: 'eeeeee' }}>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>

  )
}
export default App;

