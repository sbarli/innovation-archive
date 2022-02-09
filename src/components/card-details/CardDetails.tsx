import React from 'react';

import { CardIds } from '../../enums';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';
import { ActionText } from '../action-text';
import { CardAge } from '../card-age';
import { ResourceSpace } from '../resource-space';
import { ResourceImageSizes } from '../resource-space/ResourceSpace';

import {
  BottomResourceRow,
  CardDetailsWrapper,
  CardName,
  DetailsSection,
  MainInfoSection,
  TopCardRow,
} from './CardDetails.styled';

interface ICardDetailsProps {
  cardId: CardIds;
  onCardClick?(): void;
}
export function CardDetails({ cardId, onCardClick = noop }: ICardDetailsProps) {
  const cardDetails = getCardById(cardId);
  if (!cardDetails) {
    return null;
  }

  const CardActionDetails = cardDetails.dogmaEffects.map(action => (
    <ActionText
      key={`${cardId}-${action.effectId}`}
      action={action.description}
      color={cardDetails.color}
    />
  ));

  return (
    <CardDetailsWrapper data-testid="card-front" onClick={onCardClick}>
      <TopCardRow>
        <ResourceSpace resource={cardDetails.resourceSpace1} size={ResourceImageSizes.LG} />
        <MainInfoSection>
          <CardName $color={cardDetails.color}>{cardDetails.name}</CardName>
          <DetailsSection>{CardActionDetails}</DetailsSection>
        </MainInfoSection>
        <CardAge age={cardDetails.age} />
      </TopCardRow>
      <BottomResourceRow>
        <ResourceSpace resource={cardDetails.resourceSpace2} size={ResourceImageSizes.LG} />
        <ResourceSpace resource={cardDetails.resourceSpace3} size={ResourceImageSizes.LG} />
        <ResourceSpace resource={cardDetails.resourceSpace4} size={ResourceImageSizes.LG} />
      </BottomResourceRow>
    </CardDetailsWrapper>
  );
}
