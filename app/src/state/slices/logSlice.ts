import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { GameStatuses } from '../../enums';

interface IGameLog {
  status: GameStatuses;
  message: string;
  data?: any;
}

interface IGameLogState {
  logs: IGameLog[];
}

export const initialState: IGameLogState = {
  logs: [],
};

export const logSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, { payload: logItem }: PayloadAction<IGameLog>) => {
      state.logs.push(logItem);
    },
  },
});

export const { addLog } = logSlice.actions;

export default logSlice.reducer;
