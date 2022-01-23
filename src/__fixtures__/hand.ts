import { cards as cardsById } from '../data/cardsById';
import { IHands } from '../types';

export const createInitialHands = (playerIds: string[]) => {
  const cards = Object.values(cardsById);
  const hands = playerIds.reduce((acc, playerId, i) => {
    const card = cards[i].id;
    acc[playerId] = [card];
    return acc;
  }, {} as IHands);
  return hands;
};
