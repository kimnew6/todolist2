import { combineReducers } from 'redux';
import { todoReducer } from './todo/reducer';

export * from './todo';

export interface RootState {
  todoReducer: {
    openRedux: boolean;
  };
}

export const rootReducer = combineReducers({ todoReducer });
