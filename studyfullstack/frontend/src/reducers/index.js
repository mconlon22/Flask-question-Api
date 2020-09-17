import { combineReducers } from "redux";
import Questions from './Questions'
import auth from './auth'
export default combineReducers({
    Questions,
    auth
});
