import {
  getBoard,
  getDeck,
  getGame,
  getPlayer,
} from './get-utils';
import { getCards } from './cards';

export const getTestGame = async () => {
  try {
    const testGame = await getGame('pimone_tumbaa');
    return testGame;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting test game');
  }
};

export const getTestPlayers = async () => {
  try {
    const pimone = await getPlayer('pimone');
    const tumbaa = await getPlayer('tumbaa');
    return [pimone, tumbaa];
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting test players');
  }
};

export const getTestBoards = async () => {
  try {
    const pimoneBoard = await getBoard('pimone_tumbaa_pimone');
    const tumbaaBoard = await getBoard('pimone_tumbaa_tumbaa');
    return [pimoneBoard, tumbaaBoard];
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting test boards');
  }
};

export const getTestDeck = async () => {
  try {
    const testDeck = await getDeck('pimone_tumbaa_deck');
    return testDeck;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting test deck');
  }
};

export const getAllTestData = async () => {
  try {
    const [boards, cards, deck, game, players] = await Promise.all([
      getTestBoards(),
      getCards(),
      getTestDeck(),
      getTestGame(),
      getTestPlayers(),
    ]);
    return {
      boards,
      cards,
      deck,
      game,
      players,
    };
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting all test data');
  }
};

