import React, { ReactNode } from 'react';

import { CardIds } from '../../enums';
import { useAppSelector } from '../../hooks/use-app-selector';
import { Collapse } from '../../libs/ui/collapse';
import { selectPlayerHand } from '../../state/handsSlice';
import { CardGrid } from '../../styles/card';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';
import { CardBack } from '../card-back';
import { CardFront } from '../card-front';

const createCurrentPlayerCardView = (
  playerHand: CardIds[],
  meldAction: (cardId: CardIds) => void
) =>
  playerHand.reduce((cards, cardId) => {
    const card = <CardFront key={cardId} cardId={cardId} onCardClick={() => meldAction(cardId)} />;
    if (!!card) {
      cards.push(card);
    }
    return cards;
  }, [] as ReactNode[]);

const createOpponentPlayerCardView = (playerHand: CardIds[]) =>
  playerHand.reduce((cards, cardId) => {
    const cardAge = getCardById(cardId)?.age;
    if (cardAge) {
      cards.push(<CardBack key={cardId} cardAge={cardAge} />);
    }
    return cards;
  }, [] as ReactNode[]);

interface IHandProps {
  isCurrentPlayer: boolean;
  meldAction?(cardId: CardIds): void;
  player: string;
}

export function Hand({ isCurrentPlayer, meldAction = noop, player }: IHandProps) {
  const playerHand = useAppSelector(state => selectPlayerHand(state, player));

  if (!playerHand) {
    return null;
  }

  const CardsInHand = isCurrentPlayer
    ? createCurrentPlayerCardView(playerHand, meldAction)
    : createOpponentPlayerCardView(playerHand);

  return (
    <Collapse header="Hand" showCaret={false}>
      <CardGrid data-testid="player-hand">{CardsInHand}</CardGrid>
    </Collapse>
  );
}
