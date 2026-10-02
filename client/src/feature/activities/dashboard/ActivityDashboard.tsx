import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../form/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[];
    cancelSelectActivity: () => void;
    selectActivity: (id: string) => void;
    selectedActivity: Activity;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;
   
}

export default function ActivityDashboard({ activities, cancelSelectActivity, selectActivity, selectedActivity,
    openForm, closeForm, editMode, }: Props) {
    return (
        <Grid container spacing={2}>
            <Grid size={7}>
                <ActivityList activities={activities} 
                selectActivity={selectActivity}
                 />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && 
                <ActivityDetails 
                selectedActivity={selectedActivity} cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm} />}
                {editMode && 
                <ActivityForm 
                closeForm={closeForm} 
                activity={selectedActivity}
                 />}
            </Grid>
        </Grid>
    )
}