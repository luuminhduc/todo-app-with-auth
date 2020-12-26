import  * as actions from '../action/commonAction/actionTypes';

const initalState = {
    loading : false,
    isLight:true,
    alertList:[
        {text:"When you are loged in, you can switch to dark theme or light theme", status:"info",id:Math.random()},
        {text: "You can drag and drop the todo item to change its order (Bạn có thể kéo và thả những todo item để có thể thay đổi vị trí của chúng)", status:"info",index:Math.random()}
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