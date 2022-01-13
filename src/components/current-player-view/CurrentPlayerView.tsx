import React from 'react';

import { useActionOptions } from '../../hooks/use-action-options';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectCurrentAction } from '../../state/playersSlice';
import { ActionsBar } from '../actions-bar';
import { Board } from '../board';
import { Hand } from '../hand';
import { Stats } from '../stats';

export function CurrentPlayerView({ player }: { player: string }) {
  const currentActionNumber = useAppSelector(selectCurrentAction);
  const { canAchieve, canDogma, canDraw, canMeld, drawAction, meldAction } = useActionOptions({
    player,
  });

  if (!player) {
    return null;
  }

  return (
    <div data-testid="current-player-view">
      <ActionsBar
        canAchieve={canAchieve}
        canDogma={canDogma}
        canDraw={canDraw}
        canMeld={canMeld}
        currentActionNumber={currentActionNumber}
        drawAction={drawAction}
      />
      <Stats player={player} />
      <Hand isCurrentPlayer={true} meldAction={meldAction} player={player} />
      <Board player={player} />
    </div>
  );
}
