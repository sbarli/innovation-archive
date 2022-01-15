import { useCallback } from 'react';

import { Ages } from '../../enums';
import { useDrawCard } from '../dogma-actions/use-draw-card';

// Draw two 1's.
export const useTheWheel = (playerId: string) => {
  const drawAction = useDrawCard(playerId);

  const dogma = useCallback(() => {
    drawAction({ ageToDraw: Ages.ONE, numCardsToDraw: 2 });
  }, [drawAction]);

  return dogma;
};
