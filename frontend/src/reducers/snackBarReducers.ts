import {CLOSE_SNACK_BAR, OPEN_SNACK_BAR} from "../constants/actionTypes/snackBarActionTypes";

const initialState = {
    open: false,
    message: '',
    severity: ''
}

export default function snackBar (state = initialState, action: any) {
    switch (action.type) {
        case CLOSE_SNACK_BAR:
            return Object.assign({}, state, {
                open: false
            });

        case OPEN_SNACK_BAR:
            return Object.assign({}, state, {
                open: true,
                message: action.payload.message,
                severity: action.payload.severity
            });

        default:
            return state;
    }
}
