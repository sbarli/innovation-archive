import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { addCardToHand } from '../../state/handsSlice';
import { getCardById } from '../../utils/cards';

export const useAddCardToHand = (playerId: string) => {
  const dispatch = useDispatch();

  const addCardToPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      dispatch(addCardToHand({ playerId, cardId }));
    },
    [dispatch, playerId]
  );

  return addCardToPlayerHand;
};
