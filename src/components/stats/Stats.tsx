import React from 'react';

import { useAppSelector } from '../../hooks/use-app-selector';
import { Collapse } from '../../libs/ui/collapse';
import { selectPlayerAchievements } from '../../state/achievementsSlice';
import { selectPlayer, selectPlayerResources } from '../../state/playersSlice';
import { selectPlayerScore } from '../../state/scoresSlice';
import { ResourceTotals } from '../resource-totals';

export function Stats({ player }: { player: string }) {
  const playerData = useAppSelector(state => selectPlayer(state, player));
  const playerAchievements = useAppSelector(state => selectPlayerAchievements(state, player));
  const playerScore = useAppSelector(state => selectPlayerScore(state, player));
  const playerResources = useAppSelector(state => selectPlayerResources(state, player));

  const playerAge = playerData?.age ?? null;

  if (
    !player ||
    !playerResources ||
    !playerAchievements ||
    !playerAge ||
    playerScore === undefined
  ) {
    return null;
  }

  const totalAchievements = playerAchievements?.totalAchievements ?? 0;

  return (
    <div data-testid="player-stats">
      <Collapse header="Stats" showCaret={false}>
        <p>Age: {playerAge}</p>
        <p>Achievements: {totalAchievements}</p>
        <p>Score: {playerScore}</p>
        <ResourceTotals resourceTotals={playerResources} />
      </Collapse>
    </div>
  );
}
