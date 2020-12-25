import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import commonReducer from "./commonReducer";
import todoReducer from './todoReducer';
export default combineReducers({
    firebaseReducer,
    registerReducer,
    loginReducer,
    commonReducer,
    todoReducer
})