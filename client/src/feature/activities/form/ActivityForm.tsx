import { Paper, Typography, Box, TextField, Button } from "@mui/material"

type Props = {
    closeForm: () => void;
    activity: Activity;
    submitForm: (activity: Activity) => void;
}

export default function ActivityForm({ activity, closeForm, submitForm }: Props) {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data: Record<string, FormDataEntryValue> = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        //if (activity.id) data.id = activity.id
        submitForm(data as unknown as Activity)
    }

    return (
        <Paper sx={{ borderRadius: 3, padding: 3, border: '1px solid #9b570f' }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create activity
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField name="title" label='Title' defaultValue={activity?.title} />
                <TextField name="description" label='Description' multiline rows={3} defaultValue={activity?.description} />
                <TextField name="category" label='Category' defaultValue={activity?.category} />
                <TextField name="date" label='' type="date" defaultValue={activity?.date} />
                <TextField name="city" label='City' defaultValue={activity?.city} />
                <TextField name="venue" label='Venue' defaultValue={activity?.venue} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3 }}>
                    <Button onClick={closeForm} color='inherit'>Cancel</Button>
                    <Button color='success' variant="contained" type="submit">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Paper >
    )
}
