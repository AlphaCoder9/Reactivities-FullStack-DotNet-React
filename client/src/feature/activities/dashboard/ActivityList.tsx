import ActivityCard from './ActivityCard'
import { Box } from '@mui/material'
//property
type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
}
//component
export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activities.map(activity => <ActivityCard key={activity.id} 
        activity={activity} 
        selectActivity={selectActivity}
        deleteActivity={deleteActivity}
        />)}
    </Box>  
  )
}
