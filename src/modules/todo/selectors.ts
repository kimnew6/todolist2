import { RootState } from '../../modules';

export const selectOpenModal = (state: RootState): boolean =>
  state.todoReducer.openRedux;
