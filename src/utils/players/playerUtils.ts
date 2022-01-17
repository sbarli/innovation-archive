import { IPlayers, IStarterCardsData } from '../../types';

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
      age: 1,
    };
    return acc;
  }, {} as IPlayers);
};

export const getPlayerOrder = (starterCards: IStarterCardsData[]) => {
  const sortedOrder = starterCards
    .sort((a: IStarterCardsData, b: IStarterCardsData) => a.card.localeCompare(b.card))
    .map((data: IStarterCardsData) => data.player);
  return sortedOrder;
};

export const updatePlayersWithOrder = (playerOrder: string[]) => {
  const playersToUpdate = createBasePlayers(
    playerOrder.map(name => ({
      name,
    }))
  );
  playerOrder.forEach((name, idx) => {
    const id = formatPlayerId(name);
    const lastIndex = playerOrder.length - 1;
    if (idx === 0) {
      playersToUpdate[id].isFirst = true;
      playersToUpdate[id].left = formatPlayerId(playerOrder[lastIndex]);
      playersToUpdate[id].right = formatPlayerId(playerOrder[1]);
    } else if (idx === lastIndex) {
      playersToUpdate[id].left = formatPlayerId(playerOrder[idx - 1]);
      playersToUpdate[id].right = formatPlayerId(playerOrder[0]);
    } else {
      playersToUpdate[id].left = formatPlayerId(playerOrder[idx - 1]);
      playersToUpdate[id].right = formatPlayerId(playerOrder[idx + 1]);
    }
  });
  return playersToUpdate;
};
