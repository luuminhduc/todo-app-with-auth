import * as actions from './actionTypes';

const showLoading = () => {
    return{
        type: actions.SHOW_LOADING,
        payload:true,
    }
}

const hideLoading = () => {
    return {
        type: actions.HIDE_LOADING,
        payload: false,
    }
}


const switchTheme = () => {
    return {
        type: actions.SWITCH_THEME,
    }
}

const addAlert = (alert) => {
    return{
        type: actions.ADD_ALERT,
        payload:alert
    }
}

const removeAlert = (id) => {
    return{
        type: actions.REMOVE_ALERT,
        payload:id,
    }
}

const handleAlert = (alert) => dispatch => {
    dispatch(addAlert(alert));
    setTimeout(() => {
        dispatch(removeAlert(alert.id))
    }, 4000)
}


export{showLoading,hideLoading, switchTheme, handleAlert, removeAlert};