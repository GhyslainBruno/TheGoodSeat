import React, {useState} from "react";
import {Button, Paper, TextField} from "@material-ui/core";
import {userSignUp} from "../actions/authenticationActions";
import {useDispatch} from "react-redux";
import {ToggleButton} from "@material-ui/lab";
// @ts-ignore
import CheckIcon from '@material-ui/icons/Check';
import {Link} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../constants/routes";

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

        <Paper elevation={1} className="signInCard">
            <form onSubmit={onSubmit}>

                <div>
                    <TextField
                        type="email"
                        label={'Email'}
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        type="string"
                        label={'First Name'}
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        type="string"
                        label={'Last Name'}
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        type="string"
                        label={'Birth Date'}
                        value={birthDate}
                        onChange={event => setBirthDate(event.target.value)}
                    />
                </div>

                <div>
                    <TextField
                        type="string"
                        label={'Phone Number'}
                        value={phoneNumber}
                        onChange={event => setPhoneNumber(event.target.value)}
                    />
                </div>

                <div>
                    Is Phone Number Verified :
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
                        label={'Country'}
                        value={country}
                        onChange={event => setCountry(event.target.value)}
                    />
                </div>

                <Button type="submit">Sign Up</Button>
                <div>
                    <Link to={SIGN_IN}>Already have an account ? Sign In</Link>
                </div>
            </form>
        </Paper>
    )
}
