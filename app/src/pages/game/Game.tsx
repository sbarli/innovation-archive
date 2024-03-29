import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Achievements } from '../../components/achievements';
import { Deck } from '../../components/deck';
import { Dogma } from '../../components/dogma';
import { PlayerTabs } from '../../components/player-tabs';
import { useAppSelector } from '../../hooks/use-app-selector';
import { usePlayerName } from '../../hooks/use-player-name';
import { HeaderThree } from '../../libs/ui/header-three';
import { PageWrapper } from '../../libs/ui/page-wrapper';
import { selectCurrentPlayerId, selectPlayer, selectWinner } from '../../state/selectors';

const GameBoardWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
`;

const PlayersWrapper = styled.div``;

const CardsWrapper = styled.div``;

const DogmaWrapper = styled.div``;

export function Game() {
  const winnerId = useAppSelector(selectWinner);
  const currentPlayerId = useAppSelector(selectCurrentPlayerId);
  const currentPlayerName = usePlayerName(currentPlayerId ?? '');
  const winner = useAppSelector(state => selectPlayer(state, winnerId ?? ''));

  if (winnerId && winner) {
    return (
      <>
        <h1>WE HAVE A WINNER!</h1>
        <h2>Congratulations, {winner.name}</h2>
      </>
    );
  }

  if (!currentPlayerId) {
    return <Redirect to="/start" />;
  }
  return (
    <PageWrapper data-testid="game">
      <h2>{currentPlayerName}'s Turn</h2>
      <GameBoardWrapper>
        <CardsWrapper>
          <HeaderThree>Game Cards</HeaderThree>
          <Deck />
          <Achievements />
        </CardsWrapper>
        <PlayersWrapper>
          <HeaderThree>Player Details</HeaderThree>
          <PlayerTabs />
        </PlayersWrapper>
        <DogmaWrapper>
          <Dogma />
        </DogmaWrapper>
      </GameBoardWrapper>
    </PageWrapper>
  );
}

export default Game;
