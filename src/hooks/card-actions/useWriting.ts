import { useCallback } from 'react';

import { Ages } from '../../enums';
import { useDrawCard } from '../dogma-actions/use-draw-card';

// Draw a 2.
export const useWriting = (playerId: string) => {
  const drawAction = useDrawCard(playerId);

  const writing = useCallback(() => {
    drawAction({ ageToDraw: Ages.TWO });
  }, [drawAction]);

  return writing;
};
