import { createStore } from 'redux';
import { openModal, addToDo, deleteToDo } from './actions';
import rootReducer from './index';

const store = createStore(rootReducer);
export const actionCreators = {
  openModal,
  addToDo,
  deleteToDo,
};

export default store;
