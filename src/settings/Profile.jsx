import * as React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ProfileComponent() {
    return (
        <Box sx={{ flexGrow: 1, padding: 4 }}>
            <Grid container spacing={4}>
                {/* Left Section - Profile Info */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ minHeight: '50vh' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom mb={4}>
                                J Prajapati
                            </Typography>
                            {/* Contact Information */}
                            <Box display="flex" alignItems="center" mb={2}>
                                <MailOutlineIcon sx={{ mr: 2 }} />
                                <Typography variant="body1">coding@jubi.com</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <PhoneIphoneIcon sx={{ mr: 2 }} />
                                <Typography variant="body1">9845632145</Typography>
                            </Box>
                            <Box display="flex" alignItems="center" mb={2}>
                                <LocationOnIcon sx={{ mr: 2 }} />
                                <Typography variant="body1">Kathmandu</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Right Section - About Me and Details */}
                <Grid item xs={12} sm={8}>
                    <Card sx={{ minHeight: '50vh' }}>
                        <CardContent>
                            {/* About Me Section */}
                            <Typography variant="h5" gutterBottom>
                                About me
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mb={4}>
                                I am Jubisha Prajapti. I am currently practising React and this is a small project developed with the help of Material UI.
                                I love to learn more and create new projects.
                            </Typography>

                            {/* Details Section */}
                            <Box mb={2}>
                                <Typography variant="body1" display="inline" fontWeight="bold">Full Name: </Typography>
                                <Typography variant="body1" display="inline">Albert Einstein</Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="body1" display="inline" fontWeight="bold">Father's Name: </Typography>
                                <Typography variant="body1" display="inline">Sr. Albert Einstein</Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="body1" display="inline" fontWeight="bold">Address: </Typography>
                                <Typography variant="body1" display="inline">Patna, India</Typography>
                            </Box>
                            <Box mb={2}>
                                <Typography variant="body1" display="inline" fontWeight="bold">Zip Code: </Typography>
                                <Typography variant="body1" display="inline">809990</Typography>
                            </Box>
                            <Box>
                                <Typography variant="body1" display="inline" fontWeight="bold">Website: </Typography>
                                <Typography variant="body1" display="inline">https://trickuweb.com</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
