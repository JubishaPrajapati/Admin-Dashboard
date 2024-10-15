import React from 'react'
import SideNav from "../bar/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../bar/NavBar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GeoChart from '../charts/GeoChart';
import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';
import CountUp from 'react-countup';

export default function Analytics() {
    return (
        <>
            <div className="bg-color">
                <NavBar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack direction="row" spacing={2} >
                                    <Box sx={{ width: "50%" }}>

                                        <Card sx={{ height: 19 + "vh" }} id="gradient">
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#f0fcfc", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#f0fcfc" }}>
                                                    <CountUp delay={0.2} end={25000} duration={0.3} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} id="gradient">
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#ffffff", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                    <CountUp delay={0.4} end={32000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>

                                    <Box sx={{ width: "50%", height: "50%" }} >
                                        <Card sx={{ height: 19 + "vh" }} id="gradient">
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#ffffff", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                    <CountUp delay={0.2} end={15000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>



                                        <Card sx={{ height: 19 + "vh", marginTop: "16px" }} id="gradientgreen">
                                            <CardContent>
                                                <Typography gutterBottom variant="p" component="div" sx={{ color: "#ffffff", padding: "7px 0px" }}>
                                                    Visitors
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ccd1d1" }}>
                                                    <CountUp delay={0.2} end={5000} duration={0.6} />
                                                </Typography>
                                                <Typography gutterBottom variant="body2" color="text.secondary" sx={{ color: "#ccd1d1" }}>
                                                    Since last week
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }} >
                                    <CardContent>
                                        <LineChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    );
}
