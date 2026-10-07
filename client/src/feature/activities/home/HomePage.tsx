import { AccessTime, ArrowForward, Celebration, Place } from "@mui/icons-material";
import { Box, Button, Card, Chip, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function HomePage() {
    const { activities, isPending } = useActivities();
    const featuredActivity = activities?.[0];
    const categories = activities
        ? Array.from(new Set(activities.map(activity => activity.category))).slice(0, 4)
        : [];

    return (
        <Paper
            sx={{
                color: 'white',
                minHeight: { xs: 'auto', md: 'calc(100vh - 120px)' },
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: 4,
                backgroundImage: 'linear-gradient(135deg, #14245f 0%, #176d92 58%, #159c9e 100%)',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1280,
                    mx: 'auto',
                    px: { xs: 3, md: 7 },
                    py: { xs: 5, md: 8 },
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
                    alignItems: 'center',
                    gap: { xs: 5, md: 8 },
                }}
            >
                <Box>
                    <Typography
                        variant="overline"
                        sx={{ color: '#a8f0df', fontWeight: 700, letterSpacing: 2 }}
                    >
                        YOUR NEXT GREAT STORY STARTS HERE
                    </Typography>
                    <Typography
                        component="h1"
                        sx={{
                            mt: 1,
                            mb: 2,
                            fontSize: { xs: '2.8rem', sm: '3.7rem', md: '4.5rem' },
                            lineHeight: 1.05,
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                        }}
                    >
                        Find your people.
                        <Box component="span" sx={{ display: 'block', color: '#a8f0df' }}>
                            Find your next favorite thing.
                        </Box>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ maxWidth: 560, mb: 4, color: 'rgba(255,255,255,0.82)', fontWeight: 400 }}
                    >
                        Discover local activities, meet people who share your interests, and make plans worth looking forward to.
                    </Typography>
                    <Button
                        component={Link}
                        to="/activities"
                        size="large"
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                            px: 3.5,
                            py: 1.5,
                            borderRadius: 999,
                            bgcolor: '#fff',
                            color: '#182a73',
                            fontWeight: 700,
                            '&:hover': { bgcolor: '#e8f8f5' },
                        }}
                    >
                        Browse activities
                    </Button>

                    {categories.length > 0 && (
                        <Box sx={{ mt: 5 }}>
                            <Typography variant="body2" sx={{ mb: 1.5, color: 'rgba(255,255,255,0.75)' }}>
                                POPULAR CATEGORIES
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {categories.map(category => (
                                    <Chip
                                        key={category}
                                        label={category}
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.35)',
                                            bgcolor: 'rgba(255,255,255,0.1)',
                                        }}
                                        variant="outlined"
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}
                </Box>

                <Card
                    sx={{
                        p: { xs: 2, sm: 3 },
                        borderRadius: 4,
                        color: '#172554',
                        boxShadow: '0 24px 70px rgba(3, 18, 48, 0.28)',
                        transform: { md: 'rotate(1deg)' },
                    }}
                >
                    <Box
                        sx={{
                            minHeight: 190,
                            mb: 2.5,
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: 3,
                            color: 'white',
                            backgroundImage: 'linear-gradient(135deg, #ed6a5a 0%, #f4a261 55%, #e9c46a 100%)',
                        }}
                    >
                        <Chip
                            label="FEATURED ACTIVITY"
                            size="small"
                            sx={{ alignSelf: 'flex-start', color: 'white', bgcolor: 'rgba(23,37,84,0.28)', fontWeight: 700 }}
                        />
                        <Celebration sx={{ width: 64, height: 64, alignSelf: 'flex-end', opacity: 0.9 }} />
                    </Box>

                    {isPending ? (
                        <Typography color="text.secondary">Finding activities for you...</Typography>
                    ) : featuredActivity ? (
                        <>
                            <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                                {featuredActivity.title}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <AccessTime color="primary" />
                                    <Typography variant="body2">
                                        {new Date(featuredActivity.date).toLocaleString()}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Place color="primary" />
                                    <Typography variant="body2">
                                        {featuredActivity.venue}, {featuredActivity.city}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                component={Link}
                                to={`/activities/${featuredActivity.id}`}
                                endIcon={<ArrowForward />}
                            >
                                View activity
                            </Button>
                        </>
                    ) : (
                        <Typography color="text.secondary">
                            No activities yet. Be the first to create one!
                        </Typography>
                    )}
                </Card>
            </Box>
        </Paper>
    );
}
