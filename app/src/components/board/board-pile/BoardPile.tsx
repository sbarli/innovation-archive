import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardIds, Colors, SplayDirections } from '../../../enums';
import { dogmaStart } from '../../../state/slices/dogmaSlice';
import { CardFront } from '../../card-front';

import { BoardPileWrapper, CardPosition } from './BoardPile.styled';

interface IBoardPileProps {
  cardIds: CardIds[];
  color: Colors;
  playerId: string;
  splayDirection: SplayDirections | null;
}

export const BoardPile = ({ cardIds, color, playerId, splayDirection }: IBoardPileProps) => {
  const dispatch = useDispatch();
  const dogma = useCallback(
    (cardId: CardIds) => {
      dispatch(dogmaStart({ dogmaCardId: cardId, playerId }));
    },
    [dispatch, playerId]
  );

  if (!cardIds.length) {
    return <BoardPileWrapper cardsInPile={false} color={color}></BoardPileWrapper>;
  }

  // if cards are splayed, show them
  //  splayed to see all resources
  // otherwise, just show top card
  const CardView = splayDirection ? (
    cardIds.map((cardId, idx) => (
      <CardPosition key={cardId} placeInPile={idx} splayDirection={splayDirection}>
        <CardFront
          cardId={cardId}
          onCardClick={
            cardId === cardIds[cardIds.length - 1]
              ? () => dogma(cardIds[cardIds.length - 1])
              : undefined
          }
        />
      </CardPosition>
    ))
  ) : (
    <CardPosition placeInPile={cardIds.length - 1} splayDirection={splayDirection}>
      <CardFront
        cardId={cardIds[cardIds.length - 1]}
        onCardClick={() => dogma(cardIds[cardIds.length - 1])}
      />
    </CardPosition>
  );

  return (
    <BoardPileWrapper cardsInPile color={color}>
      {CardView}
    </BoardPileWrapper>
  );
};
