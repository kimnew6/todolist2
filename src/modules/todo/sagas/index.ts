import { takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED } from '../constants';
import { loginSaga } from './loginSaga';

export function* rootLoginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
  yield takeEvery(LOGIN_SUCCEED, loginSaga);
  yield takeEvery(LOGIN_FAILED, loginSaga);
}
