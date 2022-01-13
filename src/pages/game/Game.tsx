import React from 'react';
import { Redirect } from 'react-router-dom';

import { Achievements } from '../../components/achievements';
import { Deck } from '../../components/deck';
import { PlayerTabs } from '../../components/player-tabs';
import { useAppSelector } from '../../hooks/use-app-selector';
import { usePlayerName } from '../../hooks/use-player-name';
import {
  selectCurrentPlayerId,
  selectSpecificPlayer,
  selectWinner,
} from '../../state/playersSlice';

export function Game() {
  const winnerId = useAppSelector(selectWinner);
  const currentPlayerId = useAppSelector(selectCurrentPlayerId);
  const currentPlayerName = usePlayerName(currentPlayerId ?? '');
  const winner = useAppSelector(state => selectSpecificPlayer(state, winnerId ?? ''));

  if (winnerId && winner) {
    return (
      <>
        <h1>WE HAVE A WINNER!</h1>
        <h2>Congratulations, {winner.name}</h2>
      </>
    );
  }

  if (!currentPlayerId) {
    return <Redirect to="/start" />;
  }
  return (
    <div data-testid="game">
      <h1>Innovation</h1>
      <h2>{currentPlayerName}'s Turn</h2>
      <PlayerTabs />
      <Deck />
      <Achievements />
    </div>
  );
}

export default Game;
