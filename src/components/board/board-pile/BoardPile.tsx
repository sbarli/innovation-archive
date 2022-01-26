import React from 'react';

import { CardIds, Colors, SplayDirections } from '../../../enums';
import { CardFront } from '../../card-front';

import { BoardPileWrapper, CardPosition } from './BoardPile.styled';

interface IBoardPileProps {
  cardIds: CardIds[];
  color: Colors;
  splayDirection: SplayDirections | null;
}

export const BoardPile = ({ cardIds, color, splayDirection }: IBoardPileProps) => {
  if (!cardIds.length) {
    return <BoardPileWrapper cardsInPile={false} color={color}></BoardPileWrapper>;
  }

  const Cards = cardIds.map((cardId, idx) => (
    <CardPosition key={cardId} placeInPile={idx} splayDirection={splayDirection}>
      <CardFront cardId={cardId} />
    </CardPosition>
  ));

  return (
    <BoardPileWrapper cardsInPile color={color}>
      {Cards}
    </BoardPileWrapper>
  );
};
