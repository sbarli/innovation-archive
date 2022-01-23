import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';

import { setupGame, setupPlayerOrder } from '../../actions/gameActions';
import { StartFormCards } from '../../components/start-form-cards';
import { StartFormPlayers } from '../../components/start-form-players';

const StartGameWrapper = styled.div`
  height: 100%;
  margin: 1rem 3rem;
`;

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
    <StartGameWrapper className="StartGame">
      <h2>Game Setup</h2>
      {page === 1 && <StartFormPlayers onSubmit={onSubmitPage1} />}
      {page === 2 && <StartFormCards onSubmit={onSubmitPage2} />}
    </StartGameWrapper>
  );
}

export default StartGame;
