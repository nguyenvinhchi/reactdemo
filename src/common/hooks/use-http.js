import { useCallback, useReducer } from "react";
import {
  ERROR_HTTP_ACTION,
  SEND_HTTP_ACTION,
  SUCCESS_HTTP_ACTION,
} from "./http-actions";
import { COMPLETED_STATUS, PENDING_STATUS } from "./http-statuses";

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function httpReducer(state, action) {
  if (action.type === SEND_HTTP_ACTION) {
    return {
      data: null,
      error: null,
      status: PENDING_STATUS,
    };
  }

  if (action.type === SUCCESS_HTTP_ACTION) {
    return {
      data: action.responseData,
      error: null,
      status: COMPLETED_STATUS,
    };
  }

  if (action.type === ERROR_HTTP_ACTION) {
    return {
      data: null,
      error: action.errorMessage,
      status: COMPLETED_STATUS,
    };
  }

  return state;
}

/**
 * a hook return send HTTP request function & statuses of that action as {data, error, status }
 * @param {*} requestFunction
 * @param {*} startWithPending - the request should start with loading status or not
 * @returns { sendRequest, data, error, status }
 */
function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? PENDING_STATUS : null,
    data: null,
    error: null,
  });

  /**
   * Send http request function which will return in the hook
   */
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({
        type: SEND_HTTP_ACTION,
      });

      try {
        const responseData = await requestFunction(requestData);
        dispatch({
          type: SUCCESS_HTTP_ACTION,
          responseData,
        });
      } catch (error) {
        dispatch({
          type: ERROR_HTTP_ACTION,
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
