import { useCallback } from 'react';

import { Ages } from '../../enums';
import { useDrawCard } from '../dogma-actions/use-draw-card';
import { useMeldCard } from '../dogma-actions/use-meld-card';

// Draw and meld a 1.
export const useSailing = (playerId: string) => {
  const drawAction = useDrawCard(playerId);
  const meldAction = useMeldCard(playerId);

  const sailing = useCallback(() => {
    const drawnCard = drawAction({ ageToDraw: Ages.TWO, addCardToPlayerHand: false });
    if (drawnCard) {
      meldAction(drawnCard.id);
    }
  }, [drawAction, meldAction]);

  return sailing;
};
