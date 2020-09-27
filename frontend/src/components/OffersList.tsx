import React from "react";
import {useSelector} from "react-redux";
import {ReduxState} from "../App";
import {Offer} from "./Offer";

export const OffersList = () => {

    const offers = useSelector((state: ReduxState) => state.offersReducer.offers);

    return (
        <div>
            {
                offers.map((offer: any) => {
                    return <Offer offer={offer} key={offer.price}/>
                })
            }
        </div>
    )
}
