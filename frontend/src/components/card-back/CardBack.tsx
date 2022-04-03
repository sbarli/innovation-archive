import React from 'react';
import styled from 'styled-components/macro';

import { AGE_NUMBER_TO_NAME, Ages } from '../../enums';
import { cardWrapperStyles } from '../../styles/card';
import { CardAge } from '../card-age';

const CardBackWrapper = styled.div`
  ${cardWrapperStyles}
  height: 175px;
`;

const CardBackTopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardAgeName = styled.p`
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.25rem;
`;

interface ICardBackProps {
  cardAge: Ages;
}
export function CardBack({ cardAge }: ICardBackProps) {
  const ageName = AGE_NUMBER_TO_NAME[cardAge];
  return (
    <CardBackWrapper data-testid="card-back">
      <CardBackTopRow>
        <CardAgeName>{ageName}</CardAgeName>
        <CardAge age={cardAge} />
      </CardBackTopRow>
    </CardBackWrapper>
  );
}
