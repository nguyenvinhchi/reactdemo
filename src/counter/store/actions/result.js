import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return function (dispatch, getState) {
        setTimeout(() => {
            // const oldCounter = getState().counterState.counter;
            // console.log('[OLD COUNTER]', oldCounter)
            dispatch(saveResult(res))
        }, 2000);
    }
}
