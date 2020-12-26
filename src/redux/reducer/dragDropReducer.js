import * as actions from '../action/dragDropAction/actionTypes';

const initalState = {
    startIndex:null,
    endIndex:null
}

export default function dragDropReducer(state=initalState, action){
    const {type, payload} = action;
    switch(type){
        case actions.GET_DRAG_START:return{...state, startIndex:payload};
        case actions.GET_DRAG_END:return{...state, endIndex:payload};
        case actions.SWAP_TODO_ITEM:return{...state, startIndex:null, endIndex:null}
        default:return state;
    }
}