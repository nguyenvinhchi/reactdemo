import { call, put } from 'redux-saga/effects'
import { callAuthenticate } from '../api/auth';
import { authActions } from '../auth'

export function* authenSagaWorker(action) {
  console.log('auth saga receive param: ', action)
  try {
    const payload = yield call(() => callAuthenticate(action.payload));
    yield put(authActions.authSuccess(payload))
  } catch (e) {
    console.log(e)
    yield put(authActions.authFailed(e.message))
  }
}
