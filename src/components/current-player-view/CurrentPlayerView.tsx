import React from 'react';

import { ActionsBar } from '../actions-bar';
import { Board } from '../board';
import { Hand } from '../hand';
import { Stats } from '../stats';

export function CurrentPlayerView({ player }: { player: string }) {
  if (!player) {
    return null;
  }

  return (
    <div data-testid="current-player-view">
      <ActionsBar />
      <Stats player={player} />
      <Hand isCurrentPlayer={true} player={player} />
      <Board player={player} />
    </div>
  );
}
