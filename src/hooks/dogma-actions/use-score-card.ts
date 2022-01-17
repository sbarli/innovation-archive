import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { increaseScore } from '../../state/scoresSlice';
import { getCardById } from '../../utils/cards';

export const useScoreCard = (playerId: string) => {
  const dispatch = useDispatch();

  const scoreCard = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      dispatch(increaseScore({ playerId, card }));
    },
    [dispatch, playerId]
  );

  return scoreCard;
};
