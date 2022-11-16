import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { firestore } from '../firestore';

export const getPlayer = async (playerId: string) => {
  try {
    const getPlayerQuery = query(
      collection(firestore, 'players'),
      where('playerId', '==', playerId),
      limit(1)
    );
    const snapshot = await getDocs(getPlayerQuery);
    let player: any;
    snapshot.forEach(doc => {
      player = doc.data();
    });
    if (!player) {
      console.warn(`No player data available for player with id: ${playerId}`);
      throw new Error('No player data available');
    }
    return player;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred getting player data');
  }
};
