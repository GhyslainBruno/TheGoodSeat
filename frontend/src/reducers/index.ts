import { combineReducers } from 'redux'
import authenticationReducer from "./authenticationReducer";
import snackBar from "./snackBarReducers";
import offersReducer from "./offersReducer"

export default combineReducers({
    authenticationReducer,
    snackBar,
    offersReducer
})
