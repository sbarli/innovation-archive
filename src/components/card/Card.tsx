import React from 'react';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds } from '../../enums';
import noop from '../../utils/noop';

interface ICardProps {
  cardId: CardIds;
  onCardClick?(): void;
}
export function Card({ cardId, onCardClick = noop }: ICardProps) {
  const cardDetails = cardsById[cardId];

  return (
    <div style={{ color: cardDetails.color }} data-testid="card" onClick={onCardClick}>
      <h3>{cardDetails.name}</h3>
      <p>Age: {cardDetails.age}</p>
    </div>
  );
}
