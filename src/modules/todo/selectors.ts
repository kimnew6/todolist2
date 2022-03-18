import { RootState } from '../../modules';

export const selectOpenModal = (state: RootState) =>
  state.todoReducer.openRedux;
export const selectSchedules = (state: RootState) =>
  state.todoReducer.schedulesRedux;
export const selectDateInput = (state: RootState) =>
  state.todoReducer.dateInputRedux;
