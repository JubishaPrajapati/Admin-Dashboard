import React from 'react'
import SideNav from "../bar/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../bar/NavBar";
import AccordionDash from '../bar/AccordionDash';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from '../charts/BarChart';
import CountUp from 'react-countup';
import "../Dash.css";

export default function Home() {
    return (
        <>
            <div className="bg-color">
                <NavBar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} id="gradient">
                                        <CardContent>
                                            <div id="styleicon">
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                               $<CountUp delay={0.4} end={5000} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earnings
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} id="gradientgreen">
                                        <CardContent>
                                            <div id="styleicon">
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $<CountUp delay={0.4} end={800} duration={0.6} />
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>

                            <Grid item xs={4}>
                                <Stack spacing={2}>

                                    <Card id="gradientgreen" >
                                        <Stack spacing={2} direction="row">
                                            <div id="styleicon">
                                                <StorefrontIcon />
                                            </div>

                                            <div className="cardpadding">
                                                <span className="pricetitle">$205k</span> <br />
                                                <span className="pricesubtitle">Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>

                                    <Card>
                                        <Stack spacing={2} direction="row">
                                            <div id="styleiconblack">
                                                <StorefrontIcon />
                                            </div>

                                            <div className="cardpadding">
                                                <span className="pricetitle">$205k</span> <br />
                                                <span className="pricesubtitle">Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>

                                </Stack>
                            </Grid>
                        </Grid>

                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart />

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className="cardpadding">
                                            <span className="pricetitle">Popular Products</span>
                                        </div>
                                        <AccordionDash />
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
