import { CardIds } from '../../enums';
import { IHands } from '../../types';

/**
 * @name createInitialHandsForPlayers
 * @returns initial hand with 2 cards from top of Age 1 pile
 */
export const createInitialHandsForPlayers = (
  playerOrder: string[],
  starterCards: CardIds[],
  hands: IHands = {} as IHands
): IHands => {
  if (!playerOrder?.length) {
    return hands;
  }
  // select cards for current first player
  hands[playerOrder[0]] = starterCards.slice(0, 2);
  // recursively call
  return createInitialHandsForPlayers(playerOrder.slice(1), starterCards.slice(2), hands);
};
