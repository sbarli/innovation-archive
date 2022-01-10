import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { ResourceTotals } from '../resource-totals';

export function Stats({ player }: { player: string }) {
  const playerAchievements = useSelector(
    (state: RootState) => state.achievements.playerAchievements[player]
  );
  const playerScore = useSelector((state: RootState) => state.scores.scores[player]);

  const playerResourceTotals = useSelector((state: RootState) => state.players.resources[player]);

  if (!player || !playerResourceTotals || !playerAchievements || playerScore === undefined) {
    return null;
  }

  const totalAchievements = playerAchievements?.totalAchievements ?? 0;

  return (
    <div data-testid="player-stats">
      <h3>Stats</h3>
      <p>Achievements: {totalAchievements}</p>
      <p>Score: {playerScore}</p>
      <ResourceTotals resourceTotals={playerResourceTotals} />
    </div>
  );
}
