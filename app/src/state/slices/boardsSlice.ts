import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBoards, TBoard } from '../../types';

interface IBoardsState {
  boards: IBoards;
}

export const initialState: IBoardsState = {
  boards: {},
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    updateAllBoards: (state, { payload: { boards } }: PayloadAction<{ boards: IBoards }>) => {
      state.boards = boards;
    },
    updatePlayerBoard: (
      state,
      { payload: { board, playerId } }: PayloadAction<{ board: TBoard; playerId: string }>
    ) => {
      if (state.boards[playerId]) {
        state.boards[playerId] = board;
      }
    },
  },
});

export const { updateAllBoards, updatePlayerBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
