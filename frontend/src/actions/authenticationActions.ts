import {
    USER_SIGNIN_FULFILLED,
    USER_SIGNIN_REJECTED,
    USER_SIGNIN_REQUESTED,
    USER_SIGNUP_FULFILLED,
    USER_SIGNUP_REJECTED,
    USER_SIGNUP_REQUESTED
} from "../constants/actionTypes/authenticationActionTypes";
import ky from 'ky';

//TODO : find the good type for dispatch
export const userSignUp = (user: any) => {
    return (dispatch: any) => {
        dispatch(userSignUpRequestedAction());
        return 'HERE TO MAKE ASYNC CALL TO SIGNUP';
    }
}

export const userSignIn = (email: string, phoneNumber: string) => {
    return async (dispatch: any) => {

        try {
            dispatch(userSignInRequestedAction());

            const options = {
                responseType: 'json',
                json: {
                    'email': email,
                    'phoneNumber': phoneNumber,
                }
            };

            const result = await ky.post('/signin', options).json();

            // @ts-ignore
            if (result.user) {
                // @ts-ignore
                return dispatch(userSignInFulfilledAction(result.user))
            }

        } catch(error) {
            return dispatch(userSignInRejectedAction('Error during sign in'))
        }
    }
}

function userSignUpRequestedAction() {
    return {
        type: USER_SIGNUP_REQUESTED
    };
}
function userSignUpRejectedAction() {
    return {
        type: USER_SIGNUP_REJECTED
    };
}
function userSignUpFulfilledAction() {
    return {
        type: USER_SIGNUP_FULFILLED
    };
}

function userSignInRequestedAction() {
    return {
        type: USER_SIGNIN_REQUESTED
    };
}
function userSignInRejectedAction(message: string) {
    return {
        type: USER_SIGNIN_REJECTED,
        payload: message
    };
}
function userSignInFulfilledAction(user: any) {
    return {
        type: USER_SIGNIN_FULFILLED,
        payload: user
    };
}
