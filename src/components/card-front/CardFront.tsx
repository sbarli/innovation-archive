import React from 'react';

import { CardIds } from '../../enums';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';

interface ICardFrontProps {
  cardId: CardIds;
  isTopCardOnBoard?: boolean;
  onCardClick?(): void;
}
export function CardFront({ cardId, isTopCardOnBoard, onCardClick = noop }: ICardFrontProps) {
  const cardDetails = getCardById(cardId);
  if (!cardDetails) {
    return null;
  }

  return (
    <div style={{ color: cardDetails.color }} data-testid="card-front" onClick={onCardClick}>
      <h3>
        {isTopCardOnBoard ? '🌟 ' : ''}
        {cardDetails.name}
      </h3>
      <p>Age: {cardDetails.age}</p>
    </div>
  );
}
