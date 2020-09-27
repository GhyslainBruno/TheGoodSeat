import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import {CircularProgress, Snackbar, AppBar, Toolbar, Typography} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {closeSnackBar} from "./actions/snackBarActions";
import {SignIn} from "./components/SignIn";
import {SignUp} from "./components/SignUp";
import {SearchOffers} from "./components/SearchOffers";
import {HomePage} from "./components/HomePage";
import { withRouter } from 'react-router-dom';

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
        message: string,
        isUserSignedUp: boolean,
        isUserSignedIn: boolean
    },
    offersReducer: {
        offers: [],
        searchLoading: boolean
    },
    snackBar: {
        open: boolean,
        message: string,
        severity: "success" | "info" | "warning" | "error" | undefined
    }
}

const App = () => {

    const user = useSelector((state: ReduxState) => state.authenticationReducer.user);
    const userLoading = useSelector((state: ReduxState) => state.authenticationReducer.userLoading);
    const openSnackBar = useSelector((state: ReduxState) => state.snackBar.open);
    const message = useSelector((state: ReduxState) => state.snackBar.message);
    const severity = useSelector((state: ReduxState) => state.snackBar.severity);

    const dispatch = useDispatch();

    return (

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

                {
                    user ?
                        <div>
                            <Route exact path='/' render={() =><Redirect to="/offers"/>}/>
                            <Route exact path='/signin' render={() =><SignIn/>}/>
                            <Route exact path='/signup' render={() =><SignUp/>}/>
                            <Route exact path='/offers' render={() =><SearchOffers/>}/>
                        </div>
                        :
                        <div>
                            <Route exact path='/offers' render={() =><Redirect to="/signin"/>}/>
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
    );
}

export default withRouter(App);
