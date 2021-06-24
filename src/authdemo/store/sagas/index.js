
import { all, takeEvery } from 'redux-saga/effects'
import { authActions } from '../auth';
import { profileActions } from '../profile';
import { authenSagaWorker } from './authSaga'
import { changePasswordSagaWorker } from './profileSaga'

/**
 * actions Saga Watcher
 */
export default function* rootSaga() {
  yield all([
    takeEvery(profileActions.changePasswordAttempt.toString(), changePasswordSagaWorker),
    takeEvery(authActions.authAttempt.toString(), authenSagaWorker)
  ]);
}
