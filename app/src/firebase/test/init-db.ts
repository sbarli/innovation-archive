import { addDoc, collection } from 'firebase/firestore';

import { firestore } from '../firestore';

import testData from './test_db.json';

export const initGames = async () => {
  try {
    const games = testData.games;
    const createdGames = Object.values(games).map(async game => {
      const docRef = await addDoc(collection(firestore, 'games'), game);
      console.log('Game written with ID: ', docRef.id);
      return docRef;
    });
    return await Promise.all(createdGames);
  } catch (e) {
    console.error('Error adding game(s): ', e);
  }
};

export const initBoards = async () => {
  try {
    const boards = testData.boards;
    const createdBoards = Object.values(boards).map(async board => {
      const docRef = await addDoc(collection(firestore, 'boards'), board);
      console.log('Board written with ID: ', docRef.id);
      return docRef;
    });
    return await Promise.all(createdBoards);
  } catch (e) {
    console.error('Error adding board(s): ', e);
  }
};

export const initCards = async () => {
  try {
    const cards = testData.cards;
    const createdCards = Object.values(cards).map(async card => {
      const docRef = await addDoc(collection(firestore, 'cards'), card);
      console.log('Card written with ID: ', docRef.id);
      return docRef;
    });
    return await Promise.all(createdCards);
  } catch (e) {
    console.error('Error adding card(s): ', e);
  }
};

export const initDecks = async () => {
  try {
    const decks = testData.decks;
    const createdDecks = Object.values(decks).map(async deck => {
      const docRef = await addDoc(collection(firestore, 'decks'), deck);
      console.log('Deck written with ID: ', docRef.id);
      return docRef;
    });
    return await Promise.all(createdDecks);
  } catch (e) {
    console.error('Error adding deck(s): ', e);
  }
};

export const initPlayers = async () => {
  try {
    const players = testData.players;
    const createdPlayers = Object.values(players).map(async player => {
      const docRef = await addDoc(collection(firestore, 'players'), player);
      console.log('Player written with ID: ', docRef.id);
      return docRef;
    });
    return await Promise.all(createdPlayers);
  } catch (e) {
    console.error('Error adding player(s): ', e);
  }
};
