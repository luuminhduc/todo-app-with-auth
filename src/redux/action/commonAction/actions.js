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

export{showLoading,hideLoading};