import React from 'react';
import {TextField, Grid, Button} from '@mui/material';
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <div>
            <Grid
                sx = {{p: 4}}
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                direction= "column"
            >
                <Grid item xs = {12}>
                    <TextField id = "standard-basic" label = {'username'} size = "small"/>         
                </Grid>
                <Grid item xs = {12}>
                    <TextField id = "standard-basic" label = {'password'} size = "small"/>
                </Grid>
                <Grid item xs = {12}>
                    <Button style = {{width: 40, height: 40}} size = "small" variant = "outlined">
                        <Link to = '/weather' style = {{textDecoration: 'none'}} >
                            Login
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;