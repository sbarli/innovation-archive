import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds, Colors } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';
import { THand } from '../../types';
import noop from '../../utils/noop';
import { Card } from '../card';

const createCurrentPlayerCardView = (playerHand: THand, meldAction: (cardId: CardIds) => void) =>
  Object.keys(playerHand)
    .reduce((acc, color) => {
      const colorPile = playerHand[color as Colors];
      if (colorPile?.length) {
        acc.push(
          colorPile.map(cardId => (
            <Card key={cardId} cardId={cardId} onCardClick={() => meldAction(cardId)} />
          ))
        );
      }
      return acc;
    }, [] as ReactNode[])
    .map((section, idx) => <div key={idx}>{section}</div>);

const createOpponentPlayerCardView = (playerHand: THand) =>
  Object.keys(playerHand).reduce((acc, color) => {
    const colorPile = playerHand[color as Colors];
    if (colorPile?.length) {
      acc.push(colorPile.map(cardId => <div key={cardId}>{cardsById[cardId].age}</div>));
    }
    return acc;
  }, [] as ReactNode[]);

interface IHandProps {
  isCurrentPlayer: boolean;
  meldAction?(cardId: CardIds): void;
  player: string;
}

export function Hand({ isCurrentPlayer, meldAction = noop, player }: IHandProps) {
  const playerHand = useSelector((state: RootState) => state.hands.hands[player]);

  if (!playerHand) {
    return null;
  }

  const CardsInHand = isCurrentPlayer
    ? createCurrentPlayerCardView(playerHand, meldAction)
    : createOpponentPlayerCardView(playerHand);

  return (
    <div data-testid="player-hand">
      <Collapse header="Hand" showCaret={false}>
        {CardsInHand}
      </Collapse>
    </div>
  );
}
