import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_DATE,
  ADD_TODO,
  DELETE_TODO,
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
} from './constants';
import { format } from 'date-fns';

export interface todoState {
  openRedux: boolean;
  schedulesRedux: Array<string>;
  dateInputRedux: string;
  loginLoading: boolean;
  loginSucceed: boolean;
  loginFailed: any;
}

export const initialState: todoState = {
  openRedux: false,
  schedulesRedux: [],
  dateInputRedux: '',
  loginLoading: false,
  loginSucceed: false,
  loginFailed: null,
};

export const todoReducer = (
  state = initialState,
  action: {
    type: any;
    text: string;
    id: number;
    date: string;
    newSchedules: string;
    error: string;
  }
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openRedux: true };
    case CLOSE_MODAL:
      return { ...state, openRedux: false };
    case ADD_TODO:
      return {
        ...state,
        schedulesRedux: [...state.schedulesRedux, action.text],
      };
    case ADD_DATE:
      return { ...state, dateInputRedux: action.date };
    case DELETE_TODO:
      return { ...state, schedulesRedux: action.newSchedules };
    case LOGIN_REQUEST:
      console.log('reducer / 로그인 요청');
      return {
        ...state,
        loginLoading: true,
        loginSucceed: false,
        loginFailed: null,
      };
    case LOGIN_SUCCEED:
      console.log('reducer / 로그인 성공');
      return {
        ...state,
        loginLoading: false,
        loginSucceed: true,
        loginFailed: null,
      };
    case LOGIN_FAILED: {
      console.log('reducer / 로그인 실패');
      return {
        ...state,
        loginLoading: false,
        loginSucceed: false,
        loginFailed: action.error,
      };
    }
    default:
      return state;
  }
};
