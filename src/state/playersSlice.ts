import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { IPlayer, IPlayers } from '../types';

interface PlayersState {
  players: IPlayers;
  currentPlayer: string | null;
  firstPlayer: string | null;
}

const initialState: PlayersState = {
  players: {},
  currentPlayer: null,
  firstPlayer: null,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<IPlayer>) => {
      const newPlayer = action.payload;
      if (state.players[newPlayer.id]) {
        return state;
      }
      state.players[newPlayer.id] = newPlayer;
    },
    nextPlayer: state => {
      if (!state.currentPlayer) {
        return state;
      }
      state.currentPlayer = state.players[state.currentPlayer].right;
    },
  },
});

export const { addPlayer, nextPlayer } = playersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.players.value)`
export const selectPlayers = (state: RootState) => state.players.players;

export default playersSlice.reducer;
