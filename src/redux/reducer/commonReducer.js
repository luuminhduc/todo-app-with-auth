import  * as actions from '../action/commonAction/actionTypes';

const initalState = {
    loading : false,
    isLight:true,
    alertList:[
        
    ],
}

export default function commonReducer(state=initalState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.ADD_ALERT: return {...state, alertList:[...state.alertList, payload]};
        case actions.REMOVE_ALERT:return {...state, alertList:[...state.alertList].filter(el => el.id !== payload)}
        case actions.SHOW_LOADING:case actions.HIDE_LOADING:return {...state, loading:payload};
        case actions.SWITCH_THEME:return {...state, isLight: !state.isLight};
        default: return state;
    }
}