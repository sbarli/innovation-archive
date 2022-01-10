import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentPlayer } from '../../state/playersSlice';
import { Board } from '../board';
import { Hand } from '../hand';

export function CurrentPlayerView() {
  const currentPlayer = useSelector(selectCurrentPlayer);

  if (!currentPlayer) {
    return null;
  }

  return (
    <div data-testid="current-player-view">
      <h2>{currentPlayer}'s Turn</h2>
      <Hand player={currentPlayer} />
      <Board player={currentPlayer} />
    </div>
  );
}
