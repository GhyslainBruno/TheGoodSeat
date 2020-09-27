import React from "react";
import {Paper} from "@material-ui/core";

export const Offer = (props: any) => {

    console.log(props)

    return (

        <Paper elevation={1} className="offerCard">
            <div>
                Price {props.offer.price} {props.offer.currency} - Arrive in {props.offer.waitingTime ? (props.offer.waitingTime/60).toFixed(0)+ 'm ' + props.offer.waitingTime % 60 + 's' : 'less than a minute'}
            </div>
        </Paper>
    )
}
