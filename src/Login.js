import React, { useRef } from 'react';
import {TextField, Grid, Button} from '@mui/material';
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firestore } from './firebase';
export default function Login() {

    
    const usernameRef = useRef();
    const passwordRef = useRef();

    const verifyUser = async(e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usernameRef.current.value, passwordRef.current.value).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        }).catch((error) => {
            alert("The email or password is incorrect. Try again.");
        });
    }
    
    // const createUser = async(e) => {
    //     e.preventDefault();
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, usernameRef.current.value, passwordRef.current.value).then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //     }).catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //     });
    // }
    
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
                    <p>Users: user1@gmail.com, user2@gmail.com, user3@gmail.com</p>
                    <p>All passwords: password</p>
                </Grid>
                <Grid item xs = {12}>
                    <TextField id = "standard-basic" label = {'username'} size = "small" inputRef={usernameRef} />         
                </Grid>
                <Grid item xs = {12}>
                    <TextField id = "standard-basic" label = {'password'} size = "small" inputRef={passwordRef}/>
                </Grid>
                <Grid item xs = {12}>
                    <Button style = {{width: 40, height: 40}} size = "small" variant = "outlined" onClick={verifyUser}>
                        {/* <Link to = '/weather' style = {{textDecoration: 'none'}} >
                            Login
                        </Link> */}
                        Login
                    </Button>

                    {/* <Button style = {{width: 40, height: 40}} size = "small" variant = "outlined" onClick={createUser}>
                        <Link to = '/weather' style = {{textDecoration: 'none'}} >
                            SignUp
                        </Link>
                    </Button> */}
                </Grid>
            </Grid>
        </div>
    )
}

