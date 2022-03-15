import { OPEN_MODAL, ADD_TODO, DELETE_TODO } from './constants';

export const openModal = () => ({ type: OPEN_MODAL });
export const addTodo = () => ({ type: ADD_TODO });
export const deleteTodo = () => ({ type: DELETE_TODO });
