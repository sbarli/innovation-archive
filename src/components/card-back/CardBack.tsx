import React from 'react';
import styled from 'styled-components/macro';

import { Ages } from '../../enums';
import { cardWrapperStyles } from '../../styles/card';
import { CardAge } from '../card-age';

const CardBackWrapper = styled.div`
  ${cardWrapperStyles}
  display: flex;
  flex-direction: row-reverse;
  height: 175px;
`;

interface ICardBackProps {
  cardAge: Ages;
}
export function CardBack({ cardAge }: ICardBackProps) {
  return (
    <CardBackWrapper data-testid="card-back">
      <CardAge age={cardAge} />
    </CardBackWrapper>
  );
}
