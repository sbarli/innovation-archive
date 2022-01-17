import { createBasePlayers } from '../utils/players';

export const createInitialPlayersStore = (playerNames: string[]) => {
  const players = createBasePlayers(playerNames.map(name => ({ name })));
  return {
    players,
    currentPlayer: playerNames[0],
    playerOrder: playerNames,
  };
};
