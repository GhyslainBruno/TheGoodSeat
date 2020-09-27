import React, {useState} from "react";
import {Redirect} from 'react-router-dom';
import {Button, TextField} from "@material-ui/core";
import {userSignUp} from "../actions/authenticationActions";
import {useDispatch, useSelector} from "react-redux";
import {ToggleButton} from "@material-ui/lab";
// @ts-ignore
import CheckIcon from '@material-ui/icons/Check';

export const SignUp = (props: any) => {

    const [email, setEmail] = useState('test@gmail.com');
    const [firstName, setFirstName] = useState('Kim');
    const [lastName, setLastName] = useState('Hernandez');
    const [birthDate, setBirthDate] = useState('1996-05-17');
    const [phoneNumber, setPhoneNumber] = useState('+33667182298');
    const [isPhoneNumberVerified, setIsPhoneNumberVerified] = useState(true);
    const [country, setCountry] = useState('France');

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        dispatch(userSignUp(email, firstName, lastName, birthDate, phoneNumber, isPhoneNumberVerified, country));
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
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />
            </div>

            <div>
                <TextField
                    type="string"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />
            </div>

            <div>
                <TextField
                    type="string"
                    value={birthDate}
                    onChange={event => setBirthDate(event.target.value)}
                />
            </div>

            <div>
                <TextField
                    type="string"
                    value={phoneNumber}
                    onChange={event => setPhoneNumber(event.target.value)}
                />
            </div>

            <div>
                <ToggleButton
                    value="check"
                    selected={isPhoneNumberVerified}
                    onChange={() => setIsPhoneNumberVerified(!isPhoneNumberVerified)}
                >
                    <CheckIcon />
                </ToggleButton>

            </div>

            <div>
                <TextField
                    type="string"
                    value={country}
                    onChange={event => setCountry(event.target.value)}
                />
            </div>

            <Button type="submit">Sign Up</Button>
        </form>
    )
}
