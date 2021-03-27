import React from 'react';
import { Link } from 'react-router-dom';

import { StartForm } from '../../components/start-form';

const onSubmit = (values: any) => {
  console.log('StartGame >>> form submitted -> values: ', values);
};

export function StartGame() {
  return (
    <div className="StartGame">
      <h1>Welcome to the Start Game Page!</h1>
      <Link to="/">Go Home</Link>
      <StartForm onSubmit={onSubmit} />
    </div>
  );
}

export default StartGame;
