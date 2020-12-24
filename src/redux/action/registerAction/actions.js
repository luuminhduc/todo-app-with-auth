import * as actions from './actionTypes';

const registerRequest = (user) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
        user.email,
        user.password,
    ).then(res => {
        firestore.collection("users").doc(res.user.uid).set({
            name: '',
            avatar:''
        })
    }).then(() => {
        alert("sdsd")
        dispatch({
            type: actions.REGISTER_SUCCESS,
        })
    }).catch(err => {
        dispatch({
            type: actions.REGISTER_ERROR,
            payload: err.message
        })
    })
}


export {registerRequest};