import * as actions from '../action/todoAction/actionTypes';

const initialState = {
    todoList: [],
    error: null,
    type: "all",
}

export default function todoReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_ALL_TODOS: return{...state, todoList: payload};
        default: return state;
    }
}