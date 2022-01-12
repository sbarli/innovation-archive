import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Achievements } from '../../components/achievements';
import { Deck } from '../../components/deck';
import { PlayerTabs } from '../../components/player-tabs';
import { usePlayerName } from '../../hooks/use-player-name';
import { selectCurrentPlayer } from '../../state/playersSlice';

export function Game() {
  const currentPlayerId = useSelector(selectCurrentPlayer);
  const currentPlayerName = usePlayerName(currentPlayerId ?? '');

  if (!currentPlayerId) {
    return <Redirect to="/start" />;
  }
  return (
    <div className="Game">
      <h1>Innovation</h1>
      <h2>{currentPlayerName}'s Turn</h2>
      <PlayerTabs />
      <Deck />
      <Achievements />
    </div>
  );
}

export default Game;
