import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { IPlayers } from '../types';

interface PlayersState {
  players: IPlayers;
  playerOrder: string[];
  currentPlayer: string | null;
}

const initialState: PlayersState = {
  players: {},
  playerOrder: [],
  currentPlayer: null,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    initPlayers: (
      state,
      {
        payload: { players, playerOrder },
      }: PayloadAction<{ players: IPlayers; playerOrder: string[] }>
    ) => {
      // add all players
      state.players = players;
      // add player order
      state.playerOrder = playerOrder;
      // setup current player as first player id
      state.currentPlayer = playerOrder[0];
    },
    nextPlayer: state => {
      if (!state.currentPlayer) {
        return state;
      }
      state.currentPlayer = state.players[state.currentPlayer].right;
    },
  },
});

export const { initPlayers, nextPlayer } = playersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.players.value)`
export const selectPlayers = (state: RootState) => state.players.players;
export const selectCurrentPlayer = (state: RootState) => state.players.currentPlayer;

export default playersSlice.reducer;
