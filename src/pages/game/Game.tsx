import React from 'react';

import { PlayersBar } from '../../components/players-bar';

export function Game() {
  return (
    <div className="Game">
      <h1>Welcome to the Game Page!</h1>
      <PlayersBar />
    </div>
  );
}

export default Game;
