import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { removeCardFromHand } from '../../state/handsSlice';
import { getCardById } from '../../utils/cards';

export const useRemoveCardFromHand = (playerId: string) => {
  const dispatch = useDispatch();

  const removeCardFromPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      dispatch(removeCardFromHand({ playerId, cardId }));
    },
    [dispatch, playerId]
  );

  return removeCardFromPlayerHand;
};
