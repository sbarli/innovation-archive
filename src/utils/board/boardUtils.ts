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
    [Colors.RED]: Object.assign({}, baseBoardPile),
    [Colors.BLUE]: Object.assign({}, baseBoardPile),
    [Colors.GREEN]: Object.assign({}, baseBoardPile),
    [Colors.PURPLE]: Object.assign({}, baseBoardPile),
    [Colors.YELLOW]: Object.assign({}, baseBoardPile),
  };
};

export const calculateTotalTopCardsOnBoard = (board: TBoard) => {
  if (!board) {
    return 0;
  }
  const total = Object.keys(board).reduce((acc, key) => {
    if (key !== 'player' && board[key as Colors]?.cards?.length) {
      acc += 1;
    }
    return acc;
  }, 0);
  return total;
};
