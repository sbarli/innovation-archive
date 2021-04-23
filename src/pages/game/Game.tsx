import React from 'react';

import { CurrentPlayerView } from '../../components/current-player-view';
import { PlayersBar } from '../../components/players-bar';

export function Game() {
  return (
    <div className="Game">
      <h1>Welcome to the Game Page!</h1>
      <PlayersBar />
      <CurrentPlayerView />
    </div>
  );
}

export default Game;
