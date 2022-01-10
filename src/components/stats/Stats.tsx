import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

export function Stats({ player }: { player: string }) {
  const playerAchievements = useSelector(
    (state: RootState) => state.achievements.playerAchievements[player]
  );
  const playerScore = useSelector((state: RootState) => state.players.scores[player]);

  if (!player) {
    return null;
  }

  const totalAchievements = playerAchievements?.totalAchievements ?? 0;

  return (
    <div data-testid="player-stats">
      <h3>Stats</h3>
      <p>Achievements: {totalAchievements}</p>
      <p>Score: {playerScore}</p>
    </div>
  );
}
