import React from 'react';
import { useSelector } from 'react-redux';

import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';
import { ResourceTotals } from '../resource-totals';

export function Stats({ player }: { player: string }) {
  const allPlayersData = useSelector((state: RootState) => state.players);
  const playerAchievements = useSelector(
    (state: RootState) => state.achievements.playerAchievements[player]
  );
  const playerScore = useSelector((state: RootState) => state.scores.scores[player]);

  const playerResourceTotals = allPlayersData.resources[player];
  const playerAge = allPlayersData.players[player]?.age ?? null;

  if (
    !player ||
    !playerResourceTotals ||
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
        <ResourceTotals resourceTotals={playerResourceTotals} />
      </Collapse>
    </div>
  );
}
