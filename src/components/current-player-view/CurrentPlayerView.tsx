import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentPlayer } from '../../state/playersSlice';
import { Hand } from '../hand';

export function CurrentPlayerView() {
  const currentPlayer = useSelector(selectCurrentPlayer);

  if (!currentPlayer) {
    return null;
  }

  return (
    <div data-testid="current-player-view">
      <Hand player={currentPlayer} />
    </div>
  );
}
