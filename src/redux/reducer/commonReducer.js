import  * as actions from '../action/commonAction/actionTypes';

const initalState = {
    loading : false,
}

export default function commonReducer(state=initalState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.SHOW_LOADING:case actions.HIDE_LOADING:return {...state, loading:payload}
        default: return state;
    }
}