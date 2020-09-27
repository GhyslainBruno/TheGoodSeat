import {OFFERS_SEARCH_FULFILLED, OFFERS_SEARCH_REJECTED, OFFERS_SEARCH_REQUESTED} from "../constants/actionTypes/offersActionTypes";
import ky from "ky";
import {openSnackBar} from "./snackBarActions";

interface OffersApiReturnObject {
    code: number,
    offers: [{
        price: number,
        currency: string,
        waitingTime: number
    }]
}

//TODO: isn't a good practice at all - I should store user token in sessionStorage, and this would be what would say if the user is logged in or not
// I should very much use a User class instead of just not using Typescript in here - using any...
export const searOffers = (user: any, startLatitude: string, startLongitude: string, endLatitude: string, endLongitude: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(searchOffersRequestedAction());

            const result = await ky.get(
                `/offers?startLatitude=${startLatitude}&startLongitude=${startLongitude}&endLatitude=${endLatitude}&endLongitude=${endLongitude}`,
                {
                    headers: {
                        'Authorization': `Bearer ${user.userToken}`
                    }
                }
            ).json() as OffersApiReturnObject

            if (result.offers) {
                dispatch(openSnackBar('Offers search successful', 'success'))
                dispatch(searchOffersFulfilledAction(result.offers))
            }

        } catch(error) {
            //TODO: weird to do such a thing...
            dispatch(openSnackBar('Error during offers search', 'error'))
            dispatch(searchOffersRejectedAction('Error during offers search'))
        }
    }
}

/**
 * Action creators
 */

const searchOffersRequestedAction = () => {
    return {
        type: OFFERS_SEARCH_REQUESTED
    }
}
const searchOffersRejectedAction = (message: string) => {
    return {
        type: OFFERS_SEARCH_REJECTED
    }
}

//TODO: should use a Offers class --> don't have time to do so
const searchOffersFulfilledAction = (offers: any) => {
    return {
        type: OFFERS_SEARCH_FULFILLED,
        payload: offers
    }
}
