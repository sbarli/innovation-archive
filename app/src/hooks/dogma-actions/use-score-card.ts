import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds } from '../../enums';
import { selectPlayerScoreAndPile } from '../../state/selectors';
import { updatePlayerScore } from '../../state/slices/scoresSlice';
import { getCardById } from '../../utils/cards';
import { useAppSelector } from '../use-app-selector';

export const useScoreCard = (playerId: string) => {
  const dispatch = useDispatch();
  const { score, scorePile } = useAppSelector(state => selectPlayerScoreAndPile(state, playerId));

  const scoreCard = useCallback(
    (cardId: CardIds) => {
      const card = getCardById(cardId);
      if (!card) {
        return;
      }
      const updatedScore = score + card.age;
      const updatedScorePile = [...scorePile, cardId];
      dispatch(updatePlayerScore({ playerId, score: updatedScore, scorePile: updatedScorePile }));
    },
    [dispatch, playerId, score, scorePile]
  );

  return scoreCard;
};
