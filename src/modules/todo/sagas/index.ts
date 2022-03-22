import { takeEvery, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAILED } from '../constants';
import { loginSaga } from './loginSaga';

export function* rootLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
