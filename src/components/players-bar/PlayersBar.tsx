import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentPlayer, selectPlayers } from '../../state/playersSlice';

import { PlayersBarItem } from './PlayersBarItem';

export function PlayersBar() {
  const allPlayers = useSelector(selectPlayers);
  const currentPlayer = useSelector(selectCurrentPlayer);

  return (
    <div data-testid="players-bar">
      {Object.keys(allPlayers).map(pid => (
        <PlayersBarItem
          key={pid}
          player={allPlayers[pid]}
          isCurrentPlayer={pid === currentPlayer}
        />
      ))}
    </div>
  );
}
