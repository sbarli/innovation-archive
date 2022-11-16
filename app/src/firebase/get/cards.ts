import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '../firestore';

export const getCards = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, 'cards'));
    const cardsData: any[] = [];
    snapshot.forEach(doc => cardsData.push(doc.data()));
    if (!cardsData.length) {
      throw new Error('No cards available');
    }
    return cardsData;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred getting cards');
  }
};
