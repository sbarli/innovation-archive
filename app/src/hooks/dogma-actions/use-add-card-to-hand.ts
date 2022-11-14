import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { selectPlayerHand } from '../../state/selectors';
import { updatePlayerHand } from '../../state/slices/handsSlice';
import { getCardById } from '../../utils/cards';
import { useAppSelector } from '../use-app-selector';

export const useAddCardToHand = (playerId: string) => {
  const dispatch = useDispatch();
  const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));

  const addCardToPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      const updatedHand = [...playerHand, cardId];
      dispatch(updatePlayerHand({ playerId, hand: updatedHand }));
    },
    [dispatch, playerHand, playerId]
  );

  return addCardToPlayerHand;
};
