import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { firestore } from '../firestore';

export const getGame = async (gameId: string) => {
  try {
    const getQuery = query(collection(firestore, 'games'), where('gameId', '==', gameId), limit(1));
    const snapshot = await getDocs(getQuery);
    let game: any;
    snapshot.forEach(doc => {
      game = doc.data();
    });
    if (!game) {
      console.warn(`No game data available for game with id: ${gameId}`);
      throw new Error('No game data available');
    }
    return game;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred getting game data');
  }
};
