import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { selectPlayerHand } from '../../state/selectors';
import { updatePlayerHand } from '../../state/slices/handsSlice';
import { getCardById } from '../../utils/cards';
import { useAppSelector } from '../use-app-selector';

export const useRemoveCardFromHand = (playerId: string) => {
  const dispatch = useDispatch();
  const playerHand = useAppSelector(state => selectPlayerHand(state, playerId));

  const removeCardFromPlayerHand = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      const cardIdxInHand = playerHand.indexOf(cardId);
      if (cardIdxInHand > -1) {
        const updatedHand = [
          ...playerHand.slice(0, cardIdxInHand),
          ...playerHand.slice(cardIdxInHand + 1),
        ];
        dispatch(updatePlayerHand({ playerId, hand: updatedHand }));
      }
    },
    [dispatch, playerHand, playerId]
  );

  return removeCardFromPlayerHand;
};
