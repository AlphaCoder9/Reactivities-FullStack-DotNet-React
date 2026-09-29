import { Box, Container, CssBaseline,} from '@mui/material';
import axios from 'axios'; // is used to call Backend API to talk to ASP.NET server. 
import { useEffect, useState } from 'react' //userState = Store data and useEffect = run code on component load.
import NavBar from './NavBar';
import ActivityDashboard from '../../feature/activities/dashboard/ActivityDashboard';

function App() { //This is teh main React Component for the Page.
  //Activities is the list of activities that we will get from the backend API. setActivities is the function to update the activities state. useState is a React hook that allows us to add state to functional components. Activity[] is the type of the activities state, which is an array of Activity objects.
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const[editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(a => a.id === id));
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

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id));
    setSelectedActivity(undefined);
  }
  // save and update logic
  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
      setSelectedActivity(activity);
      } else{
        const newActivity = {...activity, id: activities.length.toString()};
        setActivities([...activities, newActivity]);
        setSelectedActivity(newActivity);
      }
      setEditMode(false); //close form after creating the activity. 
  }

  return (
    <Box sx={{ bgcolor: 'eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity!}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        submitForm={handleSubmitForm}
        deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Box>

  )
}


export default App // export this component so that it can be used in other parts of the application.
