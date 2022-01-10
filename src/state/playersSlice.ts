import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { IPlayers, IScoresByPlayer } from '../types';

interface PlayersState {
  players: IPlayers;
  playerOrder: string[];
  currentPlayer: string | null;
  scores: IScoresByPlayer;
}

const initialState: PlayersState = {
  players: {},
  playerOrder: [],
  currentPlayer: null,
  scores: {},
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    initPlayers: (state, { payload: { players } }: PayloadAction<{ players: IPlayers }>) => {
      // add all players
      state.players = players;
      // add default scores for players
      state.scores = Object.values(players).reduce((acc, player) => {
        acc[player.id] = 0;
        return acc;
      }, {} as IScoresByPlayer);
    },
    initPlayerOrder: (
      state,
      { payload: { playerOrder } }: PayloadAction<{ playerOrder: string[] }>
    ) => {
      // add player order
      state.playerOrder = playerOrder;
      // setup current player as first player id
      state.currentPlayer = playerOrder[0];
      // set left, right, and isFirst values for each player
      playerOrder.forEach((playerId, idx) => {
        if (idx === 0) {
          // set players obj to include isFirst boolean
          state.players[playerOrder[0]].isFirst = true;
        }
        state.players[playerOrder[0]].right =
          idx === playerOrder.length - 1 ? playerOrder[0] : playerOrder[idx + 1];
        state.players[playerOrder[0]].left =
          idx === 0 ? playerOrder[playerOrder.length - 1] : playerOrder[idx - 1];
      });
    },
    nextPlayer: state => {
      if (!state.currentPlayer) {
        return state;
      }
      state.currentPlayer = state.players[state.currentPlayer].right;
    },
  },
});

export const { initPlayers, initPlayerOrder, nextPlayer } = playersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.players.value)`
export const selectPlayers = (state: RootState) => state.players.players;
export const selectCurrentPlayer = (state: RootState) => state.players.currentPlayer;

export default playersSlice.reducer;
