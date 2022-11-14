import { RootState } from '../../store';

export const selectBoards = (state: RootState) => state.boards.boards;
export const selectPlayerBoard = (state: RootState, playerId: string) =>
  state.boards.boards[playerId];
