import { call, put } from 'redux-saga/effects'
import { callUpdatePassword } from '../api'
import { authActions } from '../auth';
import { profileActions } from '../profile';

export function* changePasswordSagaWorker(action) {
  try {
    console.log('change pass saga receive param: ', action)
    yield call(() => callUpdatePassword(action.payload));
    yield put(profileActions.changePasswordSuccess())
    yield put(authActions.logout())
  } catch (e) {
    console.log(e)
    yield put(profileActions.changePasswordFailed(e.message))
  }
}