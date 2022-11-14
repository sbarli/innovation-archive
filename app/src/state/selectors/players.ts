import { RootState } from '../../store';

export const selectCurrentAction = (state: RootState) => state.players.currentPlayerActionNumber;
export const selectCurrentPlayerId = (state: RootState) => state.players.currentPlayer;
export const selectPlayerResources = (state: RootState, playerId: string) =>
  state.players.resources[playerId];
export const selectPlayers = (state: RootState) => state.players.players;
export const selectPlayer = (state: RootState, playerId: string) => state.players.players[playerId];
export const selectResources = (state: RootState) => state.players.resources;
export const selectWinner = (state: RootState) => state.players.winner;
