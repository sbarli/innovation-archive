import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { firestore } from '../firestore';

export const getDeck = async (deckId: string) => {
  try {
    const getQuery = query(collection(firestore, 'decks'), where('deckId', '==', deckId), limit(1));
    const snapshot = await getDocs(getQuery);
    let deck: any;
    snapshot.forEach(doc => {
      deck = doc.data();
    });
    if (!deck) {
      console.warn(`No deck data available for deck with id: ${deckId}`);
      throw new Error('No deck data available');
    }
    return deck;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred getting deck data');
  }
};
