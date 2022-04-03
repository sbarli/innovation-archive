import React from 'react';

import { Board } from '../board';
import { Hand } from '../hand';
import { Stats } from '../stats';

export function OpponentPlayerView({ player }: { player: string }) {
  if (!player) {
    return null;
  }

  return (
    <div data-testid="opponent-player-view">
      <Stats player={player} />
      <Hand isCurrentPlayer={false} player={player} />
      <Board player={player} />
    </div>
  );
}
