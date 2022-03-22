import { call, put } from 'redux-saga/effects';
import { LoginRequest } from '..';
import { loginRequest, loginFailed, loginSucceed } from '../actions';
import { LOGIN_FAILED, LOGIN_SUCCEED } from '../constants';

const loginAPI = `http://localhost:9001/api/login/users`;

export function* loginSaga(action: LoginRequest) {
  try {
    const res = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCEED,
      data: res.data,
    });
  } catch (err: any) {
    yield put({
      type: LOGIN_FAILED,
      error: err.response.data,
    });
  }
}
