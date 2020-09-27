import {
    USER_SIGNUP_FULFILLED,
    USER_SIGNUP_REJECTED,
    USER_SIGNUP_REQUESTED,
    USER_SIGNIN_FULFILLED,
    USER_SIGNIN_REJECTED,
    USER_SIGNIN_REQUESTED
} from "../constants/actionTypes/authenticationActionTypes";

const initialState = {
    user: null,
    userLoading: false,
    signInError: false,
    signUpError: false,
    message: ''
}

//TODO: find the right type for action
export default function authenticationReducer (state = initialState, action: any) {

    switch (action.type) {
        case USER_SIGNUP_REQUESTED:
            return Object.assign({}, state, {
                user: 'foobar',
                userLoading: true
            });

        case USER_SIGNUP_FULFILLED :
            return Object.assign({}, state, {
                user: action.payload,
                userLoading: false
            });

        case USER_SIGNUP_REJECTED:
            return Object.assign({}, state, {
                user: null,
                userLoading: false,
                signUpError: true,
                errorMessage: action.payload.message
            });

        case USER_SIGNIN_REQUESTED:
            return Object.assign({}, state, {
                user: null,
                userLoading: true
            });

        case USER_SIGNIN_FULFILLED:
            return Object.assign({}, state, {
                user: action.payload,
                userLoading: false
            });

        case USER_SIGNIN_REJECTED:
            return Object.assign({}, state, {
                user: null,
                userLoading: false,
                signInError: true,
                message: action.payload
            });

        default:
            return state;
    }

}
