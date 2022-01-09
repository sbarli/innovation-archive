import React from 'react';
import styled from 'styled-components';

import { IPlayer } from '../../types';

const PlayerName = styled.h3<{ $isCurrentPlayer: boolean }>`
  color: ${p => (p.$isCurrentPlayer ? 'green' : 'black')};
`;

interface IPlayerBarItemProps {
  player: IPlayer;
  isCurrentPlayer: boolean;
}

export function PlayersBarItem({ player, isCurrentPlayer }: IPlayerBarItemProps) {
  return (
    <PlayerName data-testid="players-bar-item" $isCurrentPlayer={isCurrentPlayer}>
      {player.name}
    </PlayerName>
  );
}
