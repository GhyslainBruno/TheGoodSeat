import React from "react";
import {Link} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../constants/routes";
import {Paper} from "@material-ui/core";

export const HomePage = () => {
    return (
        <Paper elevation={1} className="signInCard">
            <div>
                <div>Home Page - technical test for The Good Seat company</div>
                <div>
                    <Link to={SIGN_IN}>Sign In</Link>
                </div>
                <div>
                    <Link to={SIGN_UP}>Sign Up</Link>
                </div>
            </div>
        </Paper>
    )
}
