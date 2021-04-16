import { cards as cardsById } from '../data/cardsById';
import { Ages, CardIds, Colors, TOTAL_CARDS_IN_AGE } from '../enums';
import { IHands, TCardIdsByAge, TCardsById, THand } from '../types';

import { shuffleArray } from './sharedUtils';

/**
 * @name baseBoardPile
 * @description
 *  base structure for a board pile
 */
const baseBoardPile = Object.freeze({
  cards: [],
  splayed: null,
});

/**
 * @name createBaseBoard
 * @param player
 *  id for player who owns the board
 * @description
 *  creates an empty board obj for given player
 * @returns {object}
 *  ex. {
 *        player: '1',
 *        red: { cards: [], splayed: null },
 *        blue: { cards: [], splayed: null },
 *        green: { cards: [], splayed: null },
 *        purple: { cards: [], splayed: null },
 *        yellow: { cards: [], splayed: null },
 *      }
 */
export const createBaseBoard = (player: string) => {
  return {
    player,
    [Colors.RED]: Object.assign({}, baseBoardPile),
    [Colors.BLUE]: Object.assign({}, baseBoardPile),
    [Colors.GREEN]: Object.assign({}, baseBoardPile),
    [Colors.PURPLE]: Object.assign({}, baseBoardPile),
    [Colors.YELLOW]: Object.assign({}, baseBoardPile),
  };
};

const determineCardColor = (cardId: CardIds) => cardsById[cardId].color;

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

export const sortAndShuffleCards = (cards: TCardsById): TCardIdsByAge => {
  return Object.values(cards).reduce(
    (d, c) => {
      // add card to it's age group
      d[c.age].push(c.id);
      // if we've got all cards in age, shuffle them
      // to get final order of cards for this game.
      if (d[c.age].length === TOTAL_CARDS_IN_AGE[c.age]) {
        d[c.age] = shuffleArray(d[c.age]);
      }
      return d;
    },
    {
      [Ages.ONE]: [],
      [Ages.TWO]: [],
      [Ages.THREE]: [],
      [Ages.FOUR]: [],
      [Ages.FIVE]: [],
      [Ages.SIX]: [],
      [Ages.SEVEN]: [],
      [Ages.EIGHT]: [],
      [Ages.NINE]: [],
      [Ages.TEN]: [],
    } as TCardIdsByAge
  );
};

export const createInitialHandsForPlayers = (
  playerOrder: string[],
  starterCards: CardIds[],
  hands: IHands = {} as IHands
) => {
  if (!playerOrder) {
    return hands;
  }
  // select cards for current first player
  hands[playerOrder[0]] = createBaseHand(starterCards.slice(0, 2));
  // recursively call
  createInitialHandsForPlayers(playerOrder.slice(1), starterCards.slice(2), hands);
};
