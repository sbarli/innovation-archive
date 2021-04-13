import { Ages, Colors, TOTAL_CARDS_IN_AGE } from '../enums';
import { TCardIdsByAge, TCardsById } from '../types';

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
