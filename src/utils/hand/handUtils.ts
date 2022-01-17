import { CardIds, Colors } from '../../enums';
import { IHands, THand } from '../../types';
import { determineCardColor } from '../cards';

/**
 * @name createBaseHand
 * @param starterCards
 *  first two cards for this hand
 * @description
 *  creates a new hand with first two cards populated
 * @returns {object}
 *  ex. {
 *        red: ['card-1'],
 *        blue: [],
 *        green: [],
 *        purple: ['card-2'],
 *        yellow: [],
 *      }
 */
export const createBaseHand = (starterCards: CardIds[]) => {
  // define empty hand
  const hand = {
    [Colors.RED]: [],
    [Colors.BLUE]: [],
    [Colors.GREEN]: [],
    [Colors.PURPLE]: [],
    [Colors.YELLOW]: [],
  } as THand;

  // populate hand with starter cards:
  //  determine color of starter card
  //  and push to hand
  starterCards.forEach(cardId => {
    hand[determineCardColor(cardId)].push(cardId);
  });

  return hand;
};

export const createInitialHandsForPlayers = (
  playerOrder: string[],
  starterCards: CardIds[],
  hands: IHands = {} as IHands
): IHands => {
  if (!playerOrder?.length) {
    return hands;
  }
  // select cards for current first player
  hands[playerOrder[0]] = createBaseHand(starterCards.slice(0, 2));
  // recursively call
  return createInitialHandsForPlayers(playerOrder.slice(1), starterCards.slice(2), hands);
};

export const calculateTotalCardsInHand = (hand: THand) => {
  if (!hand) {
    return 0;
  }
  const total = Object.values(hand).reduce((acc, cards) => (acc += cards.length), 0);
  return total;
};
