import { handleAlert, hideLoading, showLoading } from '../commonAction/actions';
import * as actions from './actionTypes';

const fetchAllTodos = () => (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("todos").orderBy("time", "desc").onSnapshot(snap => {
        const docs = [];
        snap.forEach(el => docs.push({...el.data(),id: el.id}));
        dispatch({
            type: actions.FETCH_ALL_TODOS,
            payload: docs,
        })
    })
}

const addTodo = (todo) => (dispatch, getState, {getFirestore}) => {
    dispatch(showLoading());
    const firestore = getFirestore();
    firestore.collection("todos").add(todo).then(() => {
        dispatch({
            type: actions.ADD_TODO_SUCCESS,
        })
        dispatch(hideLoading());
        dispatch(handleAlert({text:"A todo is added", status:"success", id:Math.random()}));
    }).catch(err => {
        dispatch({
            type: actions.ADD_TODO_ERROR,
            payload: err.message,
        })
    })
}

const updateTodo = (todo) => (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('todos').docs(todo.id).set({...todo}).then(() => {
        dispatch({
            type: actions.UPDATE_TODO_SUCCESS,
        })
    }).catch(err => {
        dispatch({
            type: actions.UPDATE_TODO_ERROR,
            payload: err.message,
        })
    })
}

export {fetchAllTodos, addTodo, updateTodo};