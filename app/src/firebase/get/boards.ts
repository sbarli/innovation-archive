import { collection, getDocs, limit, query, where } from 'firebase/firestore';

import { firestore } from '../firestore';

export const getBoard = async (boardId: string) => {
  try {
    const getQuery = query(
      collection(firestore, 'boards'),
      where('boardId', '==', boardId),
      limit(1)
    );
    const snapshot = await getDocs(getQuery);
    let board: any;
    snapshot.forEach(doc => {
      board = doc.data();
    });
    if (!board) {
      console.warn(`No board data available for board with id: ${boardId}`);
      throw new Error('No board data available');
    }
    return board;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred getting board data');
  }
};
