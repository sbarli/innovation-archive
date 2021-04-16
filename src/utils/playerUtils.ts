import { IPlayers } from '../types';

import { shuffleArray } from './sharedUtils';

interface IPlayerName {
  name: string;
}
interface IPlayerWithId extends IPlayerName {
  id: string;
}

const VALID_PLAYER_ID_CHARACTERS: { [key: string]: string } = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
  f: 'f',
  g: 'g',
  h: 'h',
  i: 'i',
  j: 'j',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  q: 'q',
  r: 'r',
  s: 's',
  t: 't',
  u: 'u',
  v: 'v',
  w: 'w',
  x: 'x',
  y: 'y',
  z: 'z',
  '0': '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};

export const formatPlayerId = (playerName: string) => {
  const loweredTrimmedPlayerName = playerName.toLowerCase().trim();
  const playerId = loweredTrimmedPlayerName.split('').reduce((acc, char: string) => {
    if (VALID_PLAYER_ID_CHARACTERS[char]) {
      acc += char;
    }
    return acc;
  }, '');
  return playerId;
};

export const createBasePlayers = (players: IPlayerWithId[]) => {
  return players.reduce((acc, player, i) => {
    // format current player's details
    const name = player.name;
    const id = player.id;
    const isFirst = i === 0;
    // add the ids for the player sitting to their left and right
    const left = i === 0 ? players[players.length - 1].id : players[i - 1].id;
    const right = i === players.length - 1 ? players[0].id : players[i + 1].id;
    acc[id] = {
      id,
      name,
      left,
      right,
      isFirst,
    };
    return acc;
  }, {} as IPlayers);
};

export const orderAndFormatPlayers = (players: IPlayerName[]) => {
  // first map all players to an id as well
  const playersWithId = players.map(player => ({
    name: player.name,
    id: formatPlayerId(player.name),
  }));
  // randomize the player order
  const randomizedPlayers = shuffleArray(playersWithId);
  // get list of just player ids in order
  const playerOrder = randomizedPlayers.map(pl => pl.id);
  // create a LL of players
  const formattedPlayers = createBasePlayers(randomizedPlayers);
  return { players: formattedPlayers, playerOrder };
};
