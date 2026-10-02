import { Box, Container, CssBaseline, Typography } from '@mui/material';
import { useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() { //This is teh main React Component for the Page.
  //Activities is the list of activities that we will get from the backend API. setActivities is the function to update the activities state. useState is a React hook that allows us to add state to functional components. Activity[] is the type of the activities state, which is an array of Activity objects.

  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((x: Activity) => x.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: 'eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading activities...</Typography>
        ) : (
          <ActivityDashboard activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity!}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}

            
          />)}
      </Container>
    </Box>

  )
}



export default App;

