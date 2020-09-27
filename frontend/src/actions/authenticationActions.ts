import {
    USER_SIGNIN_FULFILLED,
    USER_SIGNIN_REJECTED,
    USER_SIGNIN_REQUESTED,
    USER_SIGNUP_FULFILLED,
    USER_SIGNUP_REJECTED,
    USER_SIGNUP_REQUESTED
} from "../constants/actionTypes/authenticationActionTypes";
import ky from 'ky';
import {openSnackBar} from "./snackBarActions";
import {history} from '../index';

interface AuthenticationApiReturnObject {
    code: number,
    message: string,
    user: object
}

//TODO : find the good type for dispatch
export const userSignUp = (email: string, firstName: string, lastName: string, birthDate: string, phoneNumber: string, isPhoneNumberVerified: boolean, country: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(userSignUpRequestedAction());

            const options = {
                responseType: 'json',
                json: {
                    'email': email,
                    'firstName': firstName,
                    'lastName': lastName,
                    'birthDate': birthDate,
                    'phoneNumber': phoneNumber,
                    'isPhoneNumberVerified': isPhoneNumberVerified,
                    'country': country
                }
            };

            const result = await ky.post('/signup', options).json() as AuthenticationApiReturnObject

            if (result.user) {
                dispatch(openSnackBar('User signed up', 'success'))
                dispatch(userSignUpFulfilledAction());
                history.push('/signin');
            }
        } catch(error) {
            //TODO: weird to do such a thing...
            dispatch(openSnackBar('Error during sign up', 'error'))
            dispatch(userSignUpRejectedAction('Error during sign up'))
        }
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

            const result = await ky.post('/signin', options).json() as AuthenticationApiReturnObject

            if (result.user) {
                dispatch(openSnackBar('User signed in', 'success'))
                dispatch(userSignInFulfilledAction(result.user))
                history.push('/offers');
            }

        } catch(error) {
            //TODO: weird to do such a thing...
            dispatch(openSnackBar('Error during sign in', 'error'))
            dispatch(userSignInRejectedAction('Error during sign in'))
        }
    }
}

/**
 * Action creators
 */

function userSignUpRequestedAction() {
    return {
        type: USER_SIGNUP_REQUESTED
    };
}
function userSignUpRejectedAction(message: string) {
    return {
        type: USER_SIGNUP_REJECTED,
        payload: message
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

//TODO: should use a User class --> don't have time to do so
function userSignInFulfilledAction(user: any) {
    return {
        type: USER_SIGNIN_FULFILLED,
        payload: user
    };
}


