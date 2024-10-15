import React from 'react'
import SideNav from "../bar/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../bar/NavBar";
import ProductList from './products/ProductList';

export default function Products() {
    return (
        <>
            <NavBar />
            <Box height={70} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <ProductList/>
                </Box>
            </Box>

        </>
    );
}
