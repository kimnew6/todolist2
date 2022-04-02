import { combineReducers } from 'redux';
import { todoReducer } from './todo/reducer';
import { all } from 'redux-saga/effects';
import { rootLoginSaga } from './todo/sagas';
export * from './todo';

export interface RootState {
  todoReducer: {
    openRedux: boolean;
    schedulesRedux: Array<any>;
    dateInputRedux: string;
    loginSuccess: boolean;
  };
}

export const rootReducer = combineReducers({ todoReducer });

export function* rootSaga() {
  yield all([rootLoginSaga()]);
}
