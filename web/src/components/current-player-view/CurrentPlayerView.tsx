import React from 'react';
import styled from 'styled-components/macro';

import { useActionOptions } from '../../hooks/use-action-options';
import { useAppSelector } from '../../hooks/use-app-selector';
import { selectCurrentAction } from '../../state/selectors';
import { ActionsBar } from '../actions-bar';
import { Board } from '../board';
import { Hand } from '../hand';
import { Stats } from '../stats';

const CurrentPlayerViewLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 1rem;
`;

const ActionsAndStatsLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > div {
    flex: 1 1 0px;
  }
`;

export const CurrentPlayerView = ({ player }: { player: string }) => {
  const currentActionNumber = useAppSelector(selectCurrentAction);
  const { canAchieve, canDogma, canDraw, canMeld, drawAction, meldAction } = useActionOptions({
    player,
  });

  if (!player) {
    return null;
  }

  return (
    <CurrentPlayerViewLayout data-testid="current-player-view">
      <ActionsAndStatsLayout>
        <ActionsBar
          canAchieve={canAchieve}
          canDogma={canDogma}
          canDraw={canDraw}
          canMeld={canMeld}
          currentActionNumber={currentActionNumber}
          drawAction={drawAction}
        />
        <Stats player={player} />
      </ActionsAndStatsLayout>
      <Hand isCurrentPlayer={true} meldAction={meldAction} player={player} />
      <Board player={player} />
    </CurrentPlayerViewLayout>
  );
};
