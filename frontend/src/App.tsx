import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {
    Button,
    CircularProgress,
    TextField,
    Snackbar,
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { userSignIn, userSignUp } from "./actions/authenticationActions";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {closeSnackBar} from "./actions/snackBarActions";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {SearchOffers} from "./components/SearchOffers";
import {HomePage} from "./components/HomePage";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export interface ReduxState {
    authenticationReducer: {
        user: {
            email: string,
            phoneNumber: string
        },
        userLoading: boolean,
        error: boolean,
        message: string
    },
    snackBar: {
        open: boolean,
        message: string,
        severity: "success" | "info" | "warning" | "error" | undefined
    }
}

export const App = () => {

    const user = useSelector((state: ReduxState) => state.authenticationReducer.user);
    const userLoading = useSelector((state: ReduxState) => state.authenticationReducer.userLoading);
    const openSnackBar = useSelector((state: ReduxState) => state.snackBar.open);
    const message = useSelector((state: ReduxState) => state.snackBar.message);
    const severity = useSelector((state: ReduxState) => state.snackBar.severity);

    const dispatch = useDispatch();

    return (

        <Router>
            <main>

                <AppBar position="static">
                    <Toolbar>
                        <Typography style={{flex: '1'}} variant="h6">
                            The Good Seat
                        </Typography>
                        <div>
                            { user ? user.email : null }
                        </div>
                        <div>
                            { userLoading ? <CircularProgress color="secondary"/> : null }
                        </div>
                    </Toolbar>
                </AppBar>

                <Button onClick={() => dispatch(userSignUp('foobar@gmail.com'))}>User Sign Up</Button>

                {
                    user ?
                        <div>
                            <Route exact path='/offers' render={() =><SearchOffers/>}/>
                        </div>
                        :
                        <div>
                            <Route exact path='/signin' render={() =><SignIn/>}/>
                            <Route exact path='/signup' render={() =><SignUp/>}/>
                            <Route exact path='/' render={() =><HomePage/>}/>
                        </div>
                }

                <Snackbar
                    autoHideDuration={3000}
                    open={openSnackBar}
                    onClose={() => {dispatch(closeSnackBar())}}
                >
                    <Alert severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>

            </main>
        </Router>
    );
}
