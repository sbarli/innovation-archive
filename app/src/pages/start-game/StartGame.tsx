import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { setupGame, setupPlayerOrder } from '../../actions/gameActions';
import { StartFormCards } from '../../components/start-form-cards';
import { StartFormPlayers } from '../../components/start-form-players';
import { useAppSelector } from '../../hooks/use-app-selector';
import { PageWrapper } from '../../libs/ui/page-wrapper';
import { selectBoards, selectHands } from '../../state/selectors';

export function StartGame() {
  const dispatch = useDispatch();
  const hands = useAppSelector(selectHands);
  const boards = useAppSelector(selectBoards);

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
      dispatch(setupPlayerOrder(values, hands, boards));
      setPage(3);
    },
    [boards, dispatch, hands]
  );

  if (page === 3) {
    return <Redirect to="/game" from="/start" />;
  }

  return (
    <PageWrapper data-testid="start-game">
      <h2>Game Setup</h2>
      {page === 1 && <StartFormPlayers onSubmit={onSubmitPage1} />}
      {page === 2 && <StartFormCards onSubmit={onSubmitPage2} />}
    </PageWrapper>
  );
}

export default StartGame;
