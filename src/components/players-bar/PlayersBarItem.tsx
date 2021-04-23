import React from 'react';

import { IPlayer } from '../../types';

interface IPlayerBarItemProps {
  player: IPlayer;
  isCurrentPlayer: boolean;
}

export function PlayersBarItem({ player, isCurrentPlayer }: IPlayerBarItemProps) {
  return (
    <div data-testid="players-bar-item">
      <h3>{player.name}</h3>
      {isCurrentPlayer && <p>Current Player</p>}
    </div>
  );
}
