import { OPEN_MODAL, ADD_TODO, DELETE_TODO } from './constants';

export const openModal = (): any => ({ type: OPEN_MODAL });
export const addToDo = (text: string) => ({
  type: ADD_TODO,
  text,
});
export const deleteToDo = (id: number) => ({ type: DELETE_TODO, id });
