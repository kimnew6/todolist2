import { call, put } from 'redux-saga/effects';
import { LoginRequest } from '..';
import { loginRequest, loginFailed, loginSucceed } from '../actions';
import { LOGIN_FAILED, LOGIN_SUCCEED } from '../constants';

const API: string = `http://localhost:9001/api/login/users`;
export function* loginSaga(action: LoginRequest) {
  try {
    const response = fetch(API, {
      method: 'POST',
      // body: JSON.stringify({
      //   email: ,
      //   password: ,
      // // }),
    });
    const responseBody = JSON.stringify({ response });

    console.log(responseBody);
    yield put({
      type: LOGIN_SUCCEED,
    });
  } catch (err: any) {
    yield put({
      type: LOGIN_FAILED,
      error: err.response.data,
    });
  }
}
