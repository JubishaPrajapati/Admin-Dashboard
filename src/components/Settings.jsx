import React from 'react'
import SideNav from "../bar/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../bar/NavBar";
import List from "../settings/List"

export default function Settings() {
    return (
        <>
            <NavBar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <List/>
                </Box>
            </Box>

        </>
    );
}
