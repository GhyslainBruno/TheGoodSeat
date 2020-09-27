import {OFFERS_SEARCH_FULFILLED, OFFERS_SEARCH_REJECTED, OFFERS_SEARCH_REQUESTED} from "../constants/actionTypes/offersActionTypes";

const offersInitialState = {
    offers: [],
    searchLoading: false
}

export default function offersReducer(state = offersInitialState, action: any) {
    switch (action.type) {
        case OFFERS_SEARCH_REQUESTED:
            return Object.assign({}, state, {
                offers: [],
                searchLoading: true
            });

        case OFFERS_SEARCH_REJECTED:
            return Object.assign({}, state, {
                offers: [],
                searchLoading: false
            });

        case OFFERS_SEARCH_FULFILLED:
            return Object.assign({}, state, {
                offers: action.payload,
                searchLoading: false
            });

        default:
            return state;
    }
}
