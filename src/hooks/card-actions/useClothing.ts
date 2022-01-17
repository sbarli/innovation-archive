import { useCallback } from 'react';

// import { CardIds, Colors } from '../../enums';
// import { selectPlayerBoard } from '../../state/boardsSlice';
// import { selectPlayerHand } from '../../state/handsSlice';
// import { IBoard, THand } from '../../types';
// import { useMeldCard } from '../dogma-actions/use-meld-card';
// import { useAppSelector } from '../use-app-selector';

// const findCardsInHandDifferentFromColorsOnBoard = ({
//   board,
//   hand,
// }: {
//   board: IBoard;
//   hand: THand;
// }) => {
//   const availableCards = Object.keys(board).reduce((acc, k) => {
//     // check if this key is a color
//     const color = k !== 'player' ? (k as Colors) : null;
//     // if there are no cards of this color on board
//     // AND we do have some cards of this color in hand
//     // THEN add them to the array of available cards
//     if (color && !board[color]?.cards?.length && hand[color]?.length) {
//       acc.push(...hand[color]);
//     }
//     return acc;
//   }, [] as CardIds[]);
//   return availableCards;
// };

export const useClothing = (playerId: string) => {
  // const playerBoard = useAppSelector(state => selectPlayerBoard(state, playerId));
  // const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));
  // const meldAction = useMeldCard(playerId);

  const dogma = useCallback(() => {
    /**
     * STEP 1: Meld a card from your hand of a different color from any card on your board.
     * determine available cards in hand, if any
     *  no cards -> skip to step 2
     *  yes cards
     *    player selects card
     *    remove card from hand(<selectedCardId>)
     *    meldAction(<selectedCardId>);
     */
    /**
     * STEP 2: Draw and score a 1 for each color present on your board not present on any opponent's board.
     * determine # cards to draw & score
     *  none -> skip to final step
     *  some
     *    draw n cards (do not put in hand)
     *    score drawn cards
     */
    /**
     * STEP 3: update player action
     */
  }, []);

  return dogma;
};
