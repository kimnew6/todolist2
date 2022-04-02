import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_DATE,
  ADD_TODO,
  DELETE_TODO,
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  CLIENT_SET,
  CLIENT_UNSET,
} from './constants';
import { format } from 'date-fns';

export interface todoState {
  openRedux: boolean;
  schedulesRedux: Array<any>;
  dateInputRedux: string;
  loginLoading: boolean;
  loginSuccess: boolean;
  error: any;
}

export const initialState: todoState = {
  openRedux: false,
  schedulesRedux: [],
  dateInputRedux: '',
  loginLoading: false,
  loginSuccess: false,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: {
    payload: any;
    type: any;
    text: string;
    id: number;
    date: string;
    newSchedules: any;
    error: string;
    email: string;
    token: any;
  }
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openRedux: true };
    case CLOSE_MODAL:
      return { ...state, openRedux: false };
    case ADD_TODO:
      console.log(state);
      return {
        ...state,
        schedulesRedux: [
          ...state.schedulesRedux,
          { text: action.payload.text, date: action.payload.date },
        ],
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
        loginSuccess: false,
        error: null,
      };
    case LOGIN_SUCCEED:
      console.log('reducer / 로그인 성공');
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        error: null,
      };
    case LOGIN_FAILED: {
      console.log('reducer / 로그인 실패');
      return {
        ...state,
        loginLoading: false,
        loginSuccess: false,
        error: action.error,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        loginSuccess: false,
      };
    }
    case CLIENT_SET:
      return {
        id: action.token.userId,
        token: action.token,
      };

    case CLIENT_UNSET:
      return {
        id: null,
        token: null,
      };
    default:
      return state;
  }
};
