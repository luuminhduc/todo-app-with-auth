import { handleAlert, hideLoading, showLoading } from '../commonAction/actions';
import * as actions from './actionTypes';

const loginRequest = (user,history) => (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch(showLoading());
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        user.email,
        user.password,
    ).then(() => {
        dispatch(hideLoading())
        dispatch(handleAlert({text:"You are now loged in",status:"success",id:Math.random()}));
        dispatch({
            type: actions.LOGIN_SUCCESS,
        })
        history.goBack();
    }).catch(err => {
        dispatch(hideLoading())

        dispatch({
            type: actions.LOGIN_ERROR,
            payload: err.message,
        })
    })
}

const logOut = () => (dispatch, getState,{getFirebase}) => {
    dispatch(showLoading())

    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
        dispatch(hideLoading())
        dispatch({
            type: actions.LOG_OUT,
        })
    }).catch(err => {
        console.log(err);
    })
}

export {loginRequest, logOut}