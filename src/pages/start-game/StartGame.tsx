import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { setupGame, setupPlayerOrder } from '../../actions/gameActions';
import { StartFormCards } from '../../components/start-form-cards';
import { StartFormPlayers } from '../../components/start-form-players';

export function StartGame() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const onSubmitPage1 = useCallback(
    // TODO: type values
    (values: any) => {
      dispatch(setupGame(values));
      setPage(2);
    },
    [dispatch]
  );

  const onSubmitPage2 = useCallback(
    // TODO: type values
    (values: any) => {
      dispatch(setupPlayerOrder(values));
      setPage(3);
    },
    [dispatch]
  );

  if (page === 3) {
    return <Redirect to="/game" from="/start" />;
  }

  return (
    <div className="StartGame">
      <h1>Welcome to the Start Game Page!</h1>
      <Link to="/">Go Home</Link>
      {page === 1 && <StartFormPlayers onSubmit={onSubmitPage1} />}
      {page === 2 && <StartFormCards onSubmit={onSubmitPage2} />}
    </div>
  );
}

export default StartGame;
