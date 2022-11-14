import { useCallback } from 'react';

import { Ages } from '../../enums';
import { useDrawCard } from '../dogma-actions/use-draw-card';
import { useTuckCard } from '../dogma-actions/use-tuck-card';

// Draw and tuck a 1.
export const useMonotheism = (playerId: string) => {
  const drawAction = useDrawCard(playerId);
  const tuckAction = useTuckCard(playerId);

  const dogma = useCallback(() => {
    const drawnCards = drawAction({ ageToDraw: Ages.ONE, addCardsToPlayerHand: false });
    if (drawnCards) {
      tuckAction(drawnCards[0]);
    }
  }, [drawAction, tuckAction]);

  return dogma;
};
