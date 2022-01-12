import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentPlayer } from '../../state/playersSlice';
import { ActionsBar } from '../actions-bar';
import { Board } from '../board';
import { Hand } from '../hand';
import { Stats } from '../stats';

export function CurrentPlayerView() {
  const currentPlayer = useSelector(selectCurrentPlayer);

  if (!currentPlayer) {
    return null;
  }

  return (
    <div data-testid="current-player-view">
      <h2>{currentPlayer}'s Turn</h2>
      <ActionsBar />
      <Stats player={currentPlayer} />
      <Hand player={currentPlayer} />
      <Board player={currentPlayer} />
    </div>
  );
}
