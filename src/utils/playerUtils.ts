import { IPlayers, IStarterCardsData } from '../types';

interface IPlayerName {
  name: string;
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

export const createBasePlayers = (players: IPlayerName[]) => {
  return players.reduce((acc, player, i) => {
    // format current player's details
    const name = player.name;
    const id = formatPlayerId(name);
    acc[id] = {
      id,
      name,
      left: null,
      right: null,
      isFirst: false,
    };
    return acc;
  }, {} as IPlayers);
};

export const getPlayerOrder = (starterCards: IStarterCardsData[]) => {
  return starterCards
    .sort((a: IStarterCardsData, b: IStarterCardsData) => (a.card > b.card ? 1 : 0))
    .map((data: IStarterCardsData) => data.player);
};
