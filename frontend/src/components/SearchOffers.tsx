import React, {useState} from "react";
import {Button, CircularProgress, Paper, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../App";
import {searOffers} from "../actions/offersActions";
import {OffersList} from "./OffersList";

export const SearchOffers = () => {

    const user = useSelector((state: ReduxState) => state.authenticationReducer.user);
    const searchLoading = useSelector((state: ReduxState) => state.offersReducer.searchLoading);

    const [startLatitude, setStartLatitude] = useState('48.870377');
    const [startLongitude, setStartLongitude] = useState('2.370615');
    const [endLatitude, setEndLatitude] = useState('48.882719');
    const [endLongitude, setEndLongitude] = useState('2.322451');

    const dispatch = useDispatch();

    const onSubmit = (event: any) => {
        dispatch(searOffers(user, startLatitude, startLongitude, endLatitude, endLongitude));
        event.preventDefault();
    }

    return (
        <div>
            Search Offers Component

            <form onSubmit={onSubmit}>
                <Paper elevation={1} className="signInCard">
                    <div>
                        <TextField
                            type="string"
                            label={'Start Latitude'}
                            value={startLatitude}
                            onChange={event => setStartLatitude(event.target.value)}
                        />

                        <TextField
                            type="string"
                            label={'Start Longitude'}
                            value={startLongitude}
                            onChange={event => setStartLongitude(event.target.value)}
                        />
                    </div>

                    <div>
                        <TextField
                            type="string"
                            label={'End Latitude'}
                            value={endLatitude}
                            onChange={event => setEndLatitude(event.target.value)}
                        />

                        <TextField
                            type="string"
                            label={'End Longitude'}
                            value={endLongitude}
                            onChange={event => setEndLongitude(event.target.value)}
                        />
                    </div>

                    <Button type="submit">Search</Button>
                    { searchLoading ? <CircularProgress color="secondary"/> : null }
                </Paper>
            </form>

            <OffersList/>

        </div>

    )
}
