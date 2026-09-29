import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
//tiny react component

type Props = {
    activity: Activity;
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityCard({ activity, selectActivity, deleteActivity }: Props) {
    return (
        <Card sx={{ borderRadius: 3, border: '1px solid #9b570f' }}>

            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>{activity.date}</Typography>
                <Typography variant="body1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button onClick={() => selectActivity(activity.id)}size="small" variant="contained">View</Button>
                    <Button onClick={() => deleteActivity(activity.id)}size="small" color="error" variant="contained">
                        Delete </Button>
                </Box>
            </CardActions>
        </Card>
    )
}
