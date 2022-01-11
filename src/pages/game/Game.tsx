import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { CurrentPlayerView } from '../../components/current-player-view';
import { Deck } from '../../components/deck';
import { PlayersBar } from '../../components/players-bar';
import { selectCurrentPlayer } from '../../state/playersSlice';

export function Game() {
  const currentPlayer = useSelector(selectCurrentPlayer);

  if (!currentPlayer) {
    return <Redirect to="/start" />;
  }
  return (
    <div className="Game">
      <h1>Innovation</h1>
      <PlayersBar />
      <CurrentPlayerView />
      <Deck />
    </div>
  );
}

export default Game;
