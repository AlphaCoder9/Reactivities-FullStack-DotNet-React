import { ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios'; // is used to call Backend API to talk to ASP.NET server. 
import { useEffect, useState } from 'react' //userState = Store data and useEffect = run code on component load.

function App() { //This is teh main React Component for the Page.
  //Activities is the list of activities that we will get from the backend API. setActivities is the function to update the activities state. useState is a React hook that allows us to add state to functional components. Activity[] is the type of the activities state, which is an array of Activity objects.
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <ul>
        {activities.map((activity) => ( 
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </ul>
    </>

  )
}

export default App // export this component so that it can be used in other parts of the application.
