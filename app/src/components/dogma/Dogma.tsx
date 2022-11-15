import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useAppSelector } from '../../hooks/use-app-selector';
import { useDogma } from '../../hooks/use-dogma';
import { selectDogmaState } from '../../state/selectors';
import { selectGameLogs } from '../../state/selectors/logs';
import { dogmaComplete } from '../../state/slices/dogmaSlice';
import { playerTakesAction } from '../../state/slices/playersSlice';

const DogmaContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
`;

export function Dogma() {
  const dispatch = useDispatch();
  const { dogmaCardId, playerId } = useAppSelector(selectDogmaState);
  const gameLogs = useAppSelector(selectGameLogs);
  useDogma({
    cardId: dogmaCardId,
    playerId,
    onComplete: () => {
      dispatch(dogmaComplete());
      dispatch(playerTakesAction());
    },
  });

  // SHARE LOGIC

  return (
    <DogmaContainer data-testid="dogma">
      <p>Current Dogma Card: {dogmaCardId}</p>
      <p>By Player: {playerId}</p>
      {gameLogs.length ? (
        gameLogs.map((log, idx) => <p key={`log-line-${idx}`}>{log.message}</p>)
      ) : (
        <p>No dogma actions have occurred.</p>
      )}
    </DogmaContainer>
  );
}
