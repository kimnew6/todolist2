import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_DATE,
  ADD_TODO,
  DELETE_TODO,
} from './constants';
import { format } from 'date-fns';

export interface todoState {
  openRedux: boolean;
  schedulesRedux: Array<string>;
  dateInputRedux: string;
}

export const initialState: todoState = {
  openRedux: false,
  schedulesRedux: [],
  dateInputRedux: '',
};

export const todoReducer = (
  state = initialState,
  action: {
    type: any;
    text: string;
    id: number;
    date: string;
    newSchedules: string;
  }
) => {
  console.log(state);
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
    default:
      return state;
  }
};
