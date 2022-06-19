import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());

export const getPlayer = async (playerId: string) => {
  try {
    const snapshot = await get(child(dbRef, `players/${playerId}`));
    if (!snapshot.exists()) {
      console.log(`No player data available for player with id: ${playerId}`);
      throw new Error('No player data available');
    } 
    const playerData = snapshot.val();
    return playerData;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting player data');
  }
};

export const getBoard = async (boardId: string) => {
  try {
    const snapshot = await get(child(dbRef, `boards/${boardId}`));
    if (!snapshot.exists()) {
      console.log(`No board data available for board with id: ${boardId}`);
      throw new Error('No board data available');
    } 
    const boardData = snapshot.val();
    return boardData;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting board data');
  }
};

export const getGame = async (gameId: string) => {
  try {
    const snapshot = await get(child(dbRef, `games/${gameId}`));
    if (!snapshot.exists()) {
      console.log(`No game data available for game with id: ${gameId}`);
      throw new Error('No game data available');
    } 
    const gameData = snapshot.val();
    return gameData;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting game data');
  }
};

export const getDeck = async (deckId: string) => {
  try {
    const snapshot = await get(child(dbRef, `decks/${deckId}`));
    if (!snapshot.exists()) {
      console.log(`No deck data available for deck with id: ${deckId}`);
      throw new Error('No deck data available');
    } 
    const deckData = snapshot.val();
    return deckData;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting deck data');
  }
};