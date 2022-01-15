import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { cards as cardsById } from '../data/cardsById';
import { CardIds } from '../enums';
import { addCardToBoard, selectPlayerBoard } from '../state/boardsSlice';
import {
  selectPlayerResources,
  selectSpecificPlayer,
  updatePlayerAge,
  updatePlayerResources,
} from '../state/playersSlice';
import { updateResourceTotalsWhenMelding } from '../utils/cardUtils';

import { useAppSelector } from './use-app-selector';

// const checkCardInHand = (hand: THand, cardId: CardIds) =>
//   Object.keys(hand).reduce((isInHand, key) => {
//     if (!isInHand && key !== 'player') {
//       const colorHasCard = hand[key as Colors].indexOf(cardId) > -1;
//       return colorHasCard;
//     }
//     return isInHand;
//   }, false);

export const useMeldCard = (playerId: string) => {
  const dispatch = useDispatch();
  const player = useAppSelector(state => selectSpecificPlayer(state, playerId));
  const playerBoard = useAppSelector(state => selectPlayerBoard(state, playerId));
  const playerResources = useAppSelector(state => selectPlayerResources(state, playerId));

  const meldCard = useCallback(
    (cardId: CardIds) => {
      const card = cardsById[cardId];
      if (!card) {
        return;
      }
      // update player age, if melding card is higher
      if (card.age > player.age) {
        dispatch(updatePlayerAge({ player: playerId, newAge: card.age }));
      }
      // recalculate resource totals
      const cardPile = playerBoard[card.color]?.cards;
      const coveringCardId = cardPile?.length ? cardPile[cardPile.length - 1] : undefined;
      const updatedResourceTotals = updateResourceTotalsWhenMelding({
        coveringCardId,
        meldingCardId: cardId,
        resourceTotals: playerResources,
        splayDirection: playerBoard[card.color]?.splayed,
      });
      dispatch(updatePlayerResources({ playerId, updatedResources: updatedResourceTotals }));
      dispatch(addCardToBoard({ player: playerId, color: card.color, card: cardId }));
    },
    [dispatch, player.age, playerBoard, playerId, playerResources]
  );

  return meldCard;
};
