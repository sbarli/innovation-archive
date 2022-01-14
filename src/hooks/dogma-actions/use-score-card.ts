import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds } from '../../enums';
import { increaseScore } from '../../state/scoresSlice';

export const useScoreCard = (playerId: string) => {
  const dispatch = useDispatch();

  const scoreCard = useCallback(
    (cardId: CardIds) => {
      const card = cardsById[cardId];
      if (!card) {
        return;
      }
      dispatch(increaseScore({ playerId, card }));
    },
    [dispatch, playerId]
  );

  return scoreCard;
};
