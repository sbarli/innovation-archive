import React from 'react';

import { CardIds } from '../../enums';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';
import { CardAge } from '../card-age';

import { BottomResourceRow, CardFrontWrapper, CardName, TopCardRow } from './CardFront.styled';
import { ResourceSpace } from './resource-space';

interface ICardFrontProps {
  cardId: CardIds;
  onCardClick?(): void;
}
export function CardFront({ cardId, onCardClick = noop }: ICardFrontProps) {
  const cardDetails = getCardById(cardId);
  if (!cardDetails) {
    return null;
  }

  return (
    <CardFrontWrapper data-testid="card-front" onClick={onCardClick}>
      <TopCardRow>
        <ResourceSpace resource={cardDetails.resourceSpace1} />
        <CardName $color={cardDetails.color}>{cardDetails.name}</CardName>
        <CardAge age={cardDetails.age} />
      </TopCardRow>
      <BottomResourceRow>
        <ResourceSpace resource={cardDetails.resourceSpace2} />
        <ResourceSpace resource={cardDetails.resourceSpace3} />
        <ResourceSpace resource={cardDetails.resourceSpace4} />
      </BottomResourceRow>
    </CardFrontWrapper>
  );
}
