import { cloneDeep } from 'lodash-es';

import { Colors } from '../../enums';
import { TBoard } from '../../types';

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
    [Colors.RED]: cloneDeep(baseBoardPile),
    [Colors.BLUE]: cloneDeep(baseBoardPile),
    [Colors.GREEN]: cloneDeep(baseBoardPile),
    [Colors.PURPLE]: cloneDeep(baseBoardPile),
    [Colors.YELLOW]: cloneDeep(baseBoardPile),
  };
};

export const calculateTotalTopCardsOnBoard = (board: TBoard) => {
  if (!board) {
    return 0;
  }
  const total = Object.keys(board).reduce((acc, color) => {
    if (board[color as Colors]?.cards?.length) {
      acc += 1;
    }
    return acc;
  }, 0);
  return total;
};
