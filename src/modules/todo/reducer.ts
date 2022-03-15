import { OPEN_MODAL, ADD_TODO, DELETE_TODO } from './constants';
import { format } from 'date-fns';

interface State {
  open: boolean;
  schedules: Array<string>;
  scheduleInput: string;
  dateInput: string;
  selected: Array<number>;
}

export const initialState: State = {
  open: false,
  schedules: [],
  scheduleInput: '',
  dateInput: format(new Date(), 'yyyy/MM/dd'),
  selected: [],
};

export const todoReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, open: true };
    default:
      return state;
  }
};
