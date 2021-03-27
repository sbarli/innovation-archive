import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the Home Page!</h1>
      <Link to="/start">Start New Game</Link>
    </div>
  );
}

export default Home;
