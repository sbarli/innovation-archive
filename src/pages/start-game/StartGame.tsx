import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { setupGame } from '../../actions/gameActions';
import { StartForm } from '../../components/start-form';

export function StartGame() {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (values: any) => {
      dispatch(setupGame(values));
      history.push('/game');
    },
    [dispatch, history]
  );

  return (
    <div className="StartGame">
      <h1>Welcome to the Start Game Page!</h1>
      <Link to="/">Go Home</Link>
      <StartForm onSubmit={onSubmit} />
    </div>
  );
}

export default StartGame;
