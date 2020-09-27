import React, {useState} from 'react';
import './App.css';
import {Button, CircularProgress, TextField, Snackbar} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { userSignIn, userSignUp } from "./actions/authenticationActions";
import {sign} from "crypto";

export const App = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+33667182298');

    // @ts-ignore
    const user = useSelector(state => state.authenticationReducer.user);
    // @ts-ignore
    const userLoading = useSelector(state => state.authenticationReducer.userLoading);
    // @ts-ignore
    const signInError = useSelector(state => state.authenticationReducer.signInError);
    // @ts-ignore
    const message = useSelector(state => state.authenticationReducer.message);
    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        dispatch(userSignIn(email, phoneNumber));
        event.preventDefault();
    }

    return (
        <main>
            <div>User signed in : { user ? user.email : null }</div>

            {
                userLoading ? <CircularProgress /> : null
            }

            <Button onClick={() => dispatch(userSignUp('foobar@gmail.com'))}>User Sign Up</Button>

            <Snackbar
                open={signInError}
                message={message}
            />

            <form onSubmit={onSubmit}>

                <TextField
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <TextField
                    type="string"
                    value={phoneNumber}
                    onChange={event => setPhoneNumber(event.target.value)}
                />

                <Button type="submit">Sign In</Button>
            </form>
        </main>
    );
}
