import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Ages } from '../../enums';
import { ActionNumbers } from '../../enums/game';
import { IPlayers, IResourcesByPlayer, TResourceTotals } from '../../types';

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
    // PLAYER REDUCERS
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
    updateAllPlayers: (state, { payload: { players } }: PayloadAction<{ players: IPlayers }>) => {
      state.players = players;
    },
    updatePlayerAge: (
      state,
      { payload: { playerId, newAge } }: PayloadAction<{ playerId: string; newAge: Ages }>
    ) => {
      if (state.players[playerId]) {
        state.players[playerId].age = newAge;
      }
    },

    // RESOURCE REDUCERS
    updateAllResources: (
      state,
      { payload: { resources } }: PayloadAction<{ resources: IResourcesByPlayer }>
    ) => {
      state.resources = resources;
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

    // WINNER REDUCERS
    setWinner: (state, { payload: { playerId } }: PayloadAction<{ playerId: string }>) => {
      state.winner = playerId;
    },
  },
});

export const {
  initPlayerOrder,
  playerTakesAction,
  updateAllPlayers,
  updateAllResources,
  updatePlayerAge,
  updatePlayerResources,
  setWinner,
} = playersSlice.actions;

export default playersSlice.reducer;
