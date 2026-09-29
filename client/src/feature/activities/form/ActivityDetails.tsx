import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


type Props = {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id?: string) => void;
    
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
  return (
   <Card sx={{ borderRadius: 3, border: '1px solid #9b570f' }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>{activity.date}</Typography>
        <Typography variant="body1">{activity.description} / {activity.venue}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => openForm(activity.id)} color="primary">
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="primary">
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}
