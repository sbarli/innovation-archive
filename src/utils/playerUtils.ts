import { IPlayers } from '../types';

interface IPlayerName {
  name: string;
}

export const createBasePlayers = (players: IPlayerName[]) => {
  return players.reduce((acc, player, i) => {
    const name = player.name;
    const left = i === 0 ? '' : players[i - 1].name;
    const right = i === players.length - 1 ? '' : players[i + 1].name;
    acc[name] = {
      id: name,
      name,
      left,
      right,
    };
    return acc;
  }, {} as IPlayers);
};
