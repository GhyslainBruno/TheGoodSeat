import { CLOSE_SNACK_BAR, OPEN_SNACK_BAR } from "../constants/actionTypes/snackBarActionTypes";

export const closeSnackBar = () => {
    return (dispatch: any) => {
        dispatch(closeSnackBarAction());
    }
}

export const openSnackBar = (message: string, severity: string) => {
    return (dispatch: any) => {
        dispatch(openSnackBarAction(message, severity));
    }
}

/**
 * Action creators
 */

const closeSnackBarAction = () => {
    return {
        type: CLOSE_SNACK_BAR
    }
}
const openSnackBarAction = (message: string, severity: string) => {
    return {
        type: OPEN_SNACK_BAR,
        payload: {
            message: message,
            severity: severity
        }
    }
}
