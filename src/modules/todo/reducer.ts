import { OPEN_MODAL, ADD_TODO, DELETE_TODO } from './constants';
import { format } from 'date-fns';

export interface State {
  openRedux: boolean;
  // schedulesRedux: Array<string>;
  // scheduleInputRedux: string;
  // dateInputRedux: string;
}

export const initialState: State = {
  openRedux: false,
  // schedulesRedux: [],
  // scheduleInputRedux: '',
  // dateInputRedux: format(new Date(), 'yyyy/MM/dd'),
};

export const todoReducer = (
  state = initialState,
  action: { type: string; text: string; id: number }
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openRedux: true };
    // case ADD_TODO:
    //   return [{ text: action.text, id: Date.now(), ...state }];
    // case DELETE_TODO:
    //   return state.schedulesRedux.filter((toDo: any) => toDo.id !== action.id);
    default:
      return state;
  }
};
