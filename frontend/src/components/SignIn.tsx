import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {userSignIn} from "../actions/authenticationActions";

export const SignIn = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+33667182298');

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        dispatch(userSignIn(email, phoneNumber));
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>

            <div>
                <TextField
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
            </div>

            <div>
                <TextField
                    type="string"
                    value={phoneNumber}
                    onChange={event => setPhoneNumber(event.target.value)}
                />
            </div>

            <Button type="submit">Sign In</Button>
        </form>
    )
}
