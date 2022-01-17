import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { CardIds, Colors } from '../../enums';
import { Collapse } from '../../libs/ui/collapse';
import { RootState } from '../../store';
import { THand } from '../../types';
import { getCardById } from '../../utils/cardUtils';
import noop from '../../utils/noop';
import { CardBack } from '../card-back';
import { CardFront } from '../card-front';

const createCurrentPlayerCardView = (playerHand: THand, meldAction: (cardId: CardIds) => void) =>
  Object.keys(playerHand).reduce((colorPiles, color, idx) => {
    const colorPile = playerHand[color as Colors];
    if (colorPile?.length) {
      const cardsInPile = colorPile.reduce((pile, cardId) => {
        const cardComponent = (
          <CardFront key={cardId} cardId={cardId} onCardClick={() => meldAction(cardId)} />
        );
        if (!!cardComponent) {
          pile.push(cardComponent);
        }
        return pile;
      }, [] as ReactNode[]);
      colorPiles.push(<div key={idx}>{cardsInPile}</div>);
    }
    return colorPiles;
  }, [] as ReactNode[]);

const createOpponentPlayerCardView = (playerHand: THand) =>
  Object.keys(playerHand).reduce((oppHand, color) => {
    const colorPile = playerHand[color as Colors];
    if (colorPile?.length) {
      oppHand.push(
        colorPile.reduce((oppColorPile, cardId) => {
          const cardAge = getCardById(cardId)?.age;
          if (cardAge) {
            oppColorPile.push(<CardBack key={cardId} cardAge={cardAge} />);
          }
          return oppColorPile;
        }, [] as ReactNode[])
      );
    }
    return oppHand;
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
