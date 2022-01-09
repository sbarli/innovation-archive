import React from 'react';

import { cards as cardsById } from '../../data/cardsById';
import { CardIds } from '../../enums';

export function Card({ cardId }: { cardId: CardIds }) {
  const cardDetails = cardsById[cardId];

  return (
    <div style={{ color: cardDetails.color }} data-testid="card">
      <h3>{cardDetails.name}</h3>
      <p>Age: {cardDetails.age}</p>
    </div>
  );
}
