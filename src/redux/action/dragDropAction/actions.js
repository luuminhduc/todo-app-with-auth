import { updateTodo } from '../todoAction/actions';
import * as actions from './actionTypes';

const getDragStart = (index) => {
    return{
        type: actions.GET_DRAG_START,
        payload:index
    }
}

const getDragEnd = (index) => {
    return {
        type: actions.GET_DRAG_END,
        payload: index,
    }
}

const swapTodoItem = (startItem, endItem) => async (dispatch) => {
    const start = {...startItem, index: endItem.index};
    const end = {...endItem, index:startItem.index};

    const arr = [start, end];



    for(let i = 0 ; i < arr.length; i++) {
        await dispatch(updateTodo(arr[i]));
    }

    await dispatch({
        type: actions.SWAP_TODO_ITEM
    })
}

export {getDragStart, getDragEnd, swapTodoItem};