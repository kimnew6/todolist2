import { takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../constants';
import { loginSaga } from './loginSaga';

export function* rootLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
