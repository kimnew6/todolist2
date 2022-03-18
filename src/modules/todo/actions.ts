import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TODO,
  ADD_DATE,
  DELETE_TODO,
} from './constants';

export const openModal = () => ({ type: OPEN_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const addToDo = (text: string) => ({
  type: ADD_TODO,
  text,
});
export const addDate = (date: string) => ({ type: ADD_DATE, date });
export const deleteToDo = (newSchedules: string) => ({
  type: DELETE_TODO,
  newSchedules,
});
