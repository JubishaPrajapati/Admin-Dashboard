import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

export default function FormPropsTextFields() {
    return (
        <>
            <Grid container spacing={4}>
                {/* Personal Details */}
                <Grid item xs={12} sm={6} md={6}>
                    <h3>Personal Details</h3>
                    <Card sx={{ minHeight: 50 + "vh" }}>
                        <CardContent>
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <Box display="flex" gap={4}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Name"
                                        defaultValue="Jubisha Prajapati"
                                        InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Country"
                                        defaultValue="Nepal"
                                        InputProps={{ readOnly: true }}
                                    />
                                </Box>
                                <Box display="flex" gap={4}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Hobby"
                                        defaultValue="Drawing"
                                        InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Address"
                                        defaultValue="Kathmandu"
                                        InputProps={{ readOnly: true }}
                                    />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Contact Details */}
                <Grid item xs={12} sm={6} md={6}>
                    <h3>Contact Details</h3>
                    <Card sx={{ minHeight: 50 + "vh" }}>
                        <CardContent>
                            <Box
                                component="form"
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <Box display="flex" gap={4}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Contact-Number"
                                        defaultValue="9856321452"
                                        InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Email"
                                        defaultValue="jubisha@gmail.com"
                                        InputProps={{ readOnly: true }}
                                    />
                                </Box>
                                <Box display="flex" gap={4}>
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Profile-URL"
                                        defaultValue="https://coding.com"
                                        InputProps={{ readOnly: true }}
                                    />
                                    <TextField
                                        id="outlined-read-only-input"
                                        label="Office-Address"
                                        defaultValue="Bagbazar,ktm"
                                        InputProps={{ readOnly: true }}
                                    />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
