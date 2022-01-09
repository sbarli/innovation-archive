import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCurrentPlayer, selectPlayers } from '../../state/playersSlice';

import { PlayersBarItem } from './PlayersBarItem';

const PlayersBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 720px;
  margin: auto;
`;

export function PlayersBar() {
  const allPlayers = useSelector(selectPlayers);
  const currentPlayer = useSelector(selectCurrentPlayer);

  return (
    <PlayersBarContainer data-testid="players-bar">
      {Object.keys(allPlayers).map(pid => (
        <PlayersBarItem
          key={pid}
          player={allPlayers[pid]}
          isCurrentPlayer={pid === currentPlayer}
        />
      ))}
    </PlayersBarContainer>
  );
}
