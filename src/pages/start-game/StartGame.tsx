import React from 'react';
import { Link } from 'react-router-dom';

export function StartGame() {
  return (
    <div className="StartGame">
      <h1>Welcome to the Start Game Page!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default StartGame;
