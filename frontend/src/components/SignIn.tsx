import React, {useState} from "react";
import {Button, TextField, Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {userSignIn} from "../actions/authenticationActions";
import {Link} from "react-router-dom";
import {SIGN_UP} from "../constants/routes";

export const SignIn = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+33667182298');

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        dispatch(userSignIn(email, phoneNumber));
        event.preventDefault();
    }

    return (
        <Paper elevation={1} className="signInCard">
            <form onSubmit={onSubmit}>

                <div>
                    <TextField
                        label={'email'}
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        label={'Phone Number'}
                        type="string"
                        value={phoneNumber}
                        onChange={event => setPhoneNumber(event.target.value)}
                    />
                </div>

                <Button type="submit">Sign In</Button>
                <div>
                    <Link to={SIGN_UP}>Don't have an account ? Sign Up</Link>
                </div>
            </form>
        </Paper>
    )
}
