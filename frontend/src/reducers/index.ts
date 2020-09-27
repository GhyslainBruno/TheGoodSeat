import { combineReducers } from 'redux'
import authenticationReducer from "./authenticationReducer";
import snackBar from "./snackBarReducers";

export default combineReducers({
    authenticationReducer,
    snackBar
})
