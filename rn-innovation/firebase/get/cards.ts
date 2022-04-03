import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());

export const getCards = async () => {
  try {
    const snapshot = await get(child(dbRef, 'cards'));
    if (!snapshot.exists()) {
      console.log("No cards available");
      throw new Error('No cards available');
    } 
    const cardsData = snapshot.val();
    return cardsData;
  }
  catch(error) {
    console.error(error);
    throw new Error('An error occurred getting cards');
  }
};