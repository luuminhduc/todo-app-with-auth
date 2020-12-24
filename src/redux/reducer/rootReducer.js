import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import commonReducer from "./commonReducer";
export default combineReducers({
    firebaseReducer,
    registerReducer,
    loginReducer,
    commonReducer
})