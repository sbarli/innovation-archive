import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds } from '../../enums';
import { removeCardFromHand, selectPlayerHand } from '../../state/handsSlice';
import { useAppSelector } from '../use-app-selector';

export const useRemoveCardFromHand = (playerId: string) => {
  const dispatch = useDispatch();
  const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));

  const removeCardFromPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = cardsById[cardId];
      if (!playerHand || !card) {
        return;
      }
      dispatch(removeCardFromHand({ player: playerId, color: card.color, card: cardId }));
    },
    [dispatch, playerHand, playerId]
  );

  return removeCardFromPlayerHand;
};