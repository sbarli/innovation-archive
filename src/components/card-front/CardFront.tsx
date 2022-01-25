import React from 'react';

import { CardIds } from '../../enums';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';

import { BottomResourceRow, CardFrontWrapper, TopCardRow } from './CardFront.styled';
import { ResourceSpace } from './resource-space';

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
    <CardFrontWrapper
      style={{ color: cardDetails.color }}
      data-testid="card-front"
      onClick={onCardClick}
    >
      <TopCardRow>
        <ResourceSpace resource={cardDetails.resourceSpace1} />
        <h3>
          {isTopCardOnBoard ? '🌟 ' : ''}
          {cardDetails.name}
        </h3>
        <p>Age: {cardDetails.age}</p>
      </TopCardRow>
      <BottomResourceRow>
        <ResourceSpace resource={cardDetails.resourceSpace2} />
        <ResourceSpace resource={cardDetails.resourceSpace3} />
        <ResourceSpace resource={cardDetails.resourceSpace4} />
      </BottomResourceRow>
    </CardFrontWrapper>
  );
}
