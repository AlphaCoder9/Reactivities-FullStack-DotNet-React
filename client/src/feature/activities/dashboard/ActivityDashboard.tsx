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
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, cancelSelectActivity, selectActivity, selectedActivity,
    openForm, closeForm, editMode, submitForm, deleteActivity }: Props) {
    return (
        <Grid container spacing={2}>
            <Grid size={7}>
                <ActivityList activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity} />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && 
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} 
                openForm={openForm} />}
                {editMode && 
                <ActivityForm 
                closeForm={closeForm} 
                activity={selectedActivity}
                submitForm={submitForm} />}
            </Grid>
        </Grid>
    )
}