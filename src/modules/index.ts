import { combineReducers } from 'redux';
import { todoReducer } from './todo/reducer';

export * from './todo';

export interface RootState {
  todoReducer: {
    openRedux: boolean;
    schedulesRedux: Array<string>;
    dateInputRedux: string;
  };
}

export const rootReducer = combineReducers({ todoReducer });
