import { Container, Typography } from "@mui/material";


export default function HomePage() {
    return (
        <Container sx={{mt: 3}}>
            <Typography variant="h4" component="h1" sx={{mb: 2}}>
                Home Page
            </Typography>
        </Container>
    );
}