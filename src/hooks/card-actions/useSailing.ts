import { useCallback } from 'react';

import { Ages } from '../../enums';
import { useDrawCard } from '../dogma-actions/use-draw-card';
import { useMeldCard } from '../dogma-actions/use-meld-card';

// Draw and meld a 1.
export const useSailing = (playerId: string) => {
  const drawAction = useDrawCard(playerId);
  const meldAction = useMeldCard(playerId);

  const dogma = useCallback(() => {
    const drawnCards = drawAction({ ageToDraw: Ages.ONE, addCardToPlayerHand: false });
    if (drawnCards) {
      meldAction(drawnCards[0].id);
    }
  }, [drawAction, meldAction]);

  return dogma;
};
