import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ActionNumbers } from '../enums/game';
import { RootState } from '../store';
import { IPlayers, IResourcesByPlayer, TResourceTotals } from '../types';

interface PlayersState {
  players: IPlayers;
  playerOrder: string[];
  currentPlayer: string | null;
  currentPlayerActionNumber: ActionNumbers;
  resources: IResourcesByPlayer;
  winner: string | null;
}

export const initialState: PlayersState = {
  players: {},
  playerOrder: [],
  currentPlayer: null,
  currentPlayerActionNumber: ActionNumbers.ONE,
  resources: {},
  winner: null,
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    initPlayerOrder: (
      state,
      { payload: { playerOrder } }: PayloadAction<{ playerOrder: string[] }>
    ) => {
      // add player order
      state.playerOrder = playerOrder;
      // setup current player as first player id
      state.currentPlayer = playerOrder[0];
    },
    playerTakesAction: state => {
      if (!state.currentPlayer) {
        return state;
      }
      if (state.currentPlayerActionNumber === ActionNumbers.ONE) {
        state.currentPlayerActionNumber = ActionNumbers.TWO;
        return state;
      }
      state.currentPlayer = state.players[state.currentPlayer].right;
      state.currentPlayerActionNumber = ActionNumbers.ONE;
    },
    setWinner: (state, { payload: { playerId } }: PayloadAction<{ playerId: string }>) => {
      state.winner = playerId;
    },
    updateAllPlayersResources: (
      state,
      { payload: { playerResources } }: PayloadAction<{ playerResources: IResourcesByPlayer }>
    ) => {
      // add all players
      state.resources = playerResources;
    },
    updatePlayerAge: (
      state,
      { payload: { player, newAge } }: PayloadAction<{ player: string; newAge: number }>
    ) => {
      if (state.players[player]) {
        state.players[player].age = newAge;
      }
    },
    updatePlayerResources: (
      state,
      {
        payload: { playerId, updatedResources },
      }: PayloadAction<{ playerId: string; updatedResources: TResourceTotals }>
    ) => {
      if (state.resources[playerId]) {
        state.resources[playerId] = updatedResources;
      }
    },
    updatePlayers: (state, { payload: { players } }: PayloadAction<{ players: IPlayers }>) => {
      // add all players
      state.players = players;
    },
  },
});

export const {
  initPlayerOrder,
  playerTakesAction,
  setWinner,
  updatePlayerAge,
  updatePlayerResources,
  updatePlayers,
  updateAllPlayersResources,
} = playersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.players.value)`
export const selectCurrentAction = (state: RootState) => state.players.currentPlayerActionNumber;
export const selectCurrentPlayerId = (state: RootState) => state.players.currentPlayer;
export const selectPlayerResources = (state: RootState, playerId: string) =>
  state.players.resources[playerId];
export const selectPlayers = (state: RootState) => state.players.players;
export const selectPlayer = (state: RootState, playerId: string) => state.players.players[playerId];
export const selectWinner = (state: RootState) => state.players.winner;

export default playersSlice.reducer;
