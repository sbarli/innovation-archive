import React from 'react';

import { CardIds } from '../../enums';
import { useModal } from '../../hooks/use-modal';
import { getCardById } from '../../utils/cards';
import noop from '../../utils/noop';
import { CardAge } from '../card-age';
import { CardDetails } from '../card-details';
import { Modal } from '../modal';
import { ResourceSpace } from '../resource-space';
import { ResourceImageSizes } from '../resource-space/ResourceSpace';

import { BottomResourceRow, CardFrontWrapper, CardName, TopCardRow } from './CardFront.styled';

interface ICardFrontProps {
  cardId: CardIds;
  onCardClick?(): void;
}
export function CardFront({ cardId, onCardClick = noop }: ICardFrontProps) {
  const { isShown, toggle } = useModal();

  const cardDetails = getCardById(cardId);
  if (!cardDetails) {
    return null;
  }

  return (
    <>
      <CardFrontWrapper data-testid="card-front" onClick={onCardClick}>
        <TopCardRow>
          <ResourceSpace resource={cardDetails.resourceSpace1} size={ResourceImageSizes.SM} />
          <CardName onClick={toggle} $color={cardDetails.color}>
            {cardDetails.name}
          </CardName>
          <CardAge age={cardDetails.age} />
        </TopCardRow>
        <BottomResourceRow>
          <ResourceSpace resource={cardDetails.resourceSpace2} size={ResourceImageSizes.SM} />
          <ResourceSpace resource={cardDetails.resourceSpace3} size={ResourceImageSizes.SM} />
          <ResourceSpace resource={cardDetails.resourceSpace4} size={ResourceImageSizes.SM} />
        </BottomResourceRow>
      </CardFrontWrapper>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText={`${cardDetails.name} Details`}
        modalContent={<CardDetails cardId={cardId} />}
      />
    </>
  );
}
