import React, { useCallback, useState } from 'react';
import styled from 'styled-components/macro';

import { CardIds } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { usePlayerName } from '../../hooks/use-player-name';
import { Button, ButtonThemes } from '../../libs/ui/button';
import { HeaderThree } from '../../libs/ui/header-three';
import { selectHands } from '../../state/handsSlice';
import { IHands, IStarterCardIdsData } from '../../types';
import { getCardById } from '../../utils/cards';

const CardButtons = styled.div`
  max-width: 45rem;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 3rem;
  margin: 2rem auto;
`;

const mapHandForPlayer = ({
  hands,
  onCardClick,
  playerChoosing,
}: {
  hands: IHands;
  onCardClick: (cardId: CardIds) => void;
  playerChoosing: string;
}) =>
  (hands[playerChoosing] ?? []).map(cardId => (
    <Button
      key={`${playerChoosing}-${cardId}`}
      $theme={ButtonThemes.OUTLINE}
      onClick={() => onCardClick(cardId)}
    >
      {getCardById(cardId)?.name ?? ''}
    </Button>
  ));

export const StartFormCards = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  const hands = useAppSelector(selectHands);
  const players = Object.keys(hands);

  const [playerChoosingIdx, setPlayerChoosingIdx] = useState(0);
  const [selectedFirstCards, setSelectedFirstCards] = useState<IStarterCardIdsData[]>([]);

  const playerChoosingId = players[playerChoosingIdx];

  const playerChoosingName = usePlayerName(playerChoosingId);

  const onCardClick = useCallback(
    (cardId: CardIds) => {
      if (playerChoosingIdx === players.length - 1) {
        onSubmit([...selectedFirstCards, { card: cardId, player: playerChoosingId }]);
        return;
      }
      setSelectedFirstCards(state => [...state, { card: cardId, player: playerChoosingId }]);
      setPlayerChoosingIdx(state => state + 1);
    },
    [onSubmit, playerChoosingIdx, playerChoosingId, players.length, selectedFirstCards]
  );

  const playerChoosingHand = mapHandForPlayer({
    hands,
    onCardClick,
    playerChoosing: playerChoosingId,
  });

  return (
    <>
      <HeaderThree>{playerChoosingName}: Choose your first card</HeaderThree>
      <CardButtons>{playerChoosingHand}</CardButtons>
    </>
  );
};

export default StartFormCards;
