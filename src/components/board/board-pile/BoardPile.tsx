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

  // if cards are splayed, show them
  //  splayed to see all resources
  // otherwise, just show top card
  const CardView = splayDirection ? (
    cardIds.map((cardId, idx) => (
      <CardPosition key={cardId} placeInPile={idx} splayDirection={splayDirection}>
        <CardFront cardId={cardId} />
      </CardPosition>
    ))
  ) : (
    <CardPosition placeInPile={cardIds.length - 1} splayDirection={splayDirection}>
      <CardFront cardId={cardIds[cardIds.length - 1]} />
    </CardPosition>
  );

  return (
    <BoardPileWrapper cardsInPile color={color}>
      {CardView}
    </BoardPileWrapper>
  );
};
