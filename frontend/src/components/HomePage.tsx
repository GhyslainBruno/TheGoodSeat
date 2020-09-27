import React from "react";
import {Link} from "react-router-dom";
import {SIGN_IN, SIGN_UP} from "../constants/routes";

export const HomePage = () => {
    return (
        <div>
            <div>Home Page - technical test for The Good Seat company</div>
            <div>
                <Link style={{color: '#f98e8d'}} to={SIGN_IN}>Sign In</Link>
            </div>
            <div>
                <Link style={{color: '#f98e8d'}} to={SIGN_UP}>Sign Up</Link>
            </div>
        </div>
    )
}
