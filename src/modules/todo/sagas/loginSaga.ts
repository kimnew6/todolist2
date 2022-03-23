import { call, cancel, put, take, fork } from 'redux-saga/effects';
import { LoginRequest, setClient, unsetClient } from '..';
import { loginRequest, loginFailed, loginSucceed } from '../actions';
import { withRouter } from '../../../components/withRouter';
import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCEED,
  CLIENT_UNSET,
} from '../constants';
import axios from 'axios';
const API: string = `http://localhost:9001/api/login/users`;
// function loginApi(email: string, password: string) {
//   // return fetch(API, {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({ email, password }),
//   // })
//   //   .then(response => response.json())
//   //   .catch(error => {
//   //     throw error;
//   //   });
//   const data = fetch(API, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });
//   console.log(data);
// }

export function* logout() {
  yield put(unsetClient());
  localStorage.removeItem('token');
}

// export function* loginFlow(email: LoginRequest, password: LoginRequest) {
//   let token;
//   try {
//     token = call(loginApi, email, password);
//     yield put;
//     setClient(token);
//     yield put({
//       type: LOGIN_SUCCEED,
//     });
//     localStorage.setItem('token', JSON.stringify(token));
//   } catch (error: any) {
//     yield put({
//       type: LOGIN_FAILED,
//       error,
//     });
//   }
//   return token;
// }

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
