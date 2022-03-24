import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TODO,
  ADD_DATE,
  DELETE_TODO,
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  CLIENT_SET,
  CLIENT_UNSET,
} from './constants';

export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginSucceed {
  type: typeof LOGIN_SUCCEED;
}
export interface LogoutRequest {
  type: typeof LOGOUT_REQUEST;
}

export interface LoginFailed {
  type: typeof LOGIN_FAILED;
  payload: { response: any };
}

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const addToDo = (text: string) => ({
  type: ADD_TODO,
  text,
});
export const addDate = (date: string) => ({ type: ADD_DATE, date });
export const deleteToDo = (newSchedules: string) => ({
  type: DELETE_TODO,
  newSchedules,
});

export const loginRequest = (payload: LoginRequest['payload']) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSucceed = (): LoginSucceed => ({
  type: LOGIN_SUCCEED,
});

export const loginFailed = (payload: LoginFailed['payload']): LoginFailed => ({
  type: LOGIN_FAILED,
  payload,
});

export const logoutRequest = (): LogoutRequest => ({
  type: LOGOUT_REQUEST,
});

export function setClient(token: any) {
  return {
    type: CLIENT_SET,
    token,
  };
}

export function unsetClient() {
  return {
    type: CLIENT_UNSET,
  };
}
