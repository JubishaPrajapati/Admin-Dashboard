import { Grid, IconButton, Typography, Box } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {collection, updateDoc, getDocs,doc , get} from "firebase/firestore";
import { db } from "../../firebase-config";
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';


export default function EditProducts({ fid,closeEvent }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const setRows =useAppStore((state)=> state.setRows);
    const empCollectionRef = collection(db, "products");

    //edit click garda pailai bata bhayeko data dekhaunalai 
    useEffect(()=>{
        console.log("FID:" +fid.id);
        setName(fid.name);
        setPrice(fid.price);
        setCategory(fid.category);
    },[]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const categories = [
        {
            value: 'Mobile',
            label: 'Mobile',
        },
        {
            value: 'Laptop',
            label: 'Laptop',
        },
        {
            value: 'Speaker',
            label: 'Speaker',
        },
        {
            value: 'Tv',
            label: 'Tv',
        },
        {
            value: 'Refrigeretors',
            label: 'Refrigeretors',
        },
        {
            value: 'Earbuds',
            label: 'Earbuds',
        },
    ];

    const createUser = async() => {
        // empcollection calls the products and sets its name and prices 
        const userDoc = doc(db, "products",fid.id);
        const newFields={
            name: name,
            price: Number(price),
            category: category,
            date: String(new Date()),
        };
        await updateDoc(userDoc,newFields);
        getUsers();  //updates the list 
        closeEvent();
        Swal.fire("Submitted!", "Your file has been updated." ,"success");  //swal.fire is to display the modals or alerts 
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        const products = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setRows(products);
      };
    

    return (
        <>
            <Box sx={{ m: 2 }} />
            <Typography variant='h5' align="center">
                Edit Product
            </Typography>
            <IconButton style={{ position: "absolute", top: "0", right: "0" }} onClick={closeEvent}>
                <CloseIcon />
            </IconButton>
            <Box height={20} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        size="small"
                        value={name}
                        onChange={handleNameChange}
                        sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic"
                        label="Price"
                        variant="outlined"
                        size="small"
                        value={price}
                        onChange={handlePriceChange}
                        type="number"

                        //to show the price icon we have to set it in props 

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CurrencyRupeeIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ minWidth: "100%" }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic"
                        label="Category"
                        variant="outlined"
                        size="small"
                        value={category}
                        select
                        onChange={handleCategoryChange}
                        sx={{ minWidth: "100%" }}>

                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}

                    </TextField>

                </Grid>

                <Grid item xs={12}>
                    <Typography variant='h5' align='center'>
                        <Button variant="contained" onClick={createUser}>
                            Submit
                        </Button>
                    </Typography>
                </Grid>

            </Grid>
            <Box sx={{ m: 4 }} />
        </>
    )
}

