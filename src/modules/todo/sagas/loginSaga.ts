import { call, put } from 'redux-saga/effects';
import { LoginRequest, setClient, unsetClient } from '..';
import { loginFailed, loginSucceed } from '../actions';
import axios from 'axios';
const API: string = `http://localhost:9001/api/login/users`;

export function* logout() {
  yield put(unsetClient());
  localStorage.removeItem('token');
}

function loginApi(payload: LoginRequest['payload']) {
  return axios.post(API, payload);
}

export function* loginSaga(action: LoginRequest): any {
  try {
    const result = yield call(loginApi, action.payload);
    console.log(result);
    if (result.data.success) {
      yield put(loginSucceed());
    } else {
      yield put(loginFailed({ response: result.data.success }));
    }
  } catch (e) {
    yield put(loginFailed({ response: '' }));
  }
}
