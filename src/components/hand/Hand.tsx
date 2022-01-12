import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { Colors } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';
import { THand } from '../../types';
import { Card } from '../card';

const createCurrentPlayerCardView = (playerHand: THand) =>
  Object.keys(playerHand)
    .reduce((acc, color) => {
      acc.push(playerHand[color as Colors].map(cardId => <Card key={cardId} cardId={cardId} />));
      return acc;
    }, [] as ReactNode[])
    .map((section, idx) => <div key={idx}>{section}</div>);

const createOpponentPlayerCardView = (playerHand: THand) =>
  Object.keys(playerHand).reduce((acc, color) => {
    acc.push(
      playerHand[color as Colors].map(cardId => <div key={cardId}>{cardsById[cardId].age}</div>)
    );
    return acc;
  }, [] as ReactNode[]);

interface IHandProps {
  isCurrentPlayer: boolean;
  player: string;
}

export function Hand({ isCurrentPlayer, player }: IHandProps) {
  const playerHand = useSelector((state: RootState) => state.hands.hands[player]);

  if (!playerHand) {
    return null;
  }

  const CardsInHand = isCurrentPlayer
    ? createCurrentPlayerCardView(playerHand)
    : createOpponentPlayerCardView(playerHand);

  return (
    <div data-testid="player-hand">
      <Collapse header="Hand" showCaret={false}>
        {CardsInHand}
      </Collapse>
    </div>
  );
}
