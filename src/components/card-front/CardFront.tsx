import React from 'react';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds } from '../../enums';
import noop from '../../utils/noop';

interface ICardFrontProps {
  cardId: CardIds;
  onCardClick?(): void;
}
export function CardFront({ cardId, onCardClick = noop }: ICardFrontProps) {
  const cardDetails = cardsById[cardId];

  return (
    <div style={{ color: cardDetails.color }} data-testid="card-front" onClick={onCardClick}>
      <h3>{cardDetails.name}</h3>
      <p>Age: {cardDetails.age}</p>
    </div>
  );
}
