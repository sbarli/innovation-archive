import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { addCardToHand, selectPlayerHand } from '../../state/handsSlice';
import { getCardById } from '../../utils/cardUtils';
import { useAppSelector } from '../use-app-selector';

export const useAddCardToHand = (playerId: string) => {
  const dispatch = useDispatch();
  const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));

  const addCardToPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!playerHand || !card) {
        return;
      }
      dispatch(addCardToHand({ player: playerId, color: card.color, card: cardId }));
    },
    [dispatch, playerHand, playerId]
  );

  return addCardToPlayerHand;
};
