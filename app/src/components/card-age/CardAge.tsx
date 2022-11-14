import React from 'react';
import styled from 'styled-components/macro';

import { Ages } from '../../enums';

const CardAgeBorder = styled.div`
  color: var(--card-secondary);
  background-color: var(--card-border);
  border: 4px solid var(--card-border);
  border-radius: 100%;
  height: 2rem;
  width: 2rem;
`;

const StyledCardAge = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  line-height: 1.25rem;
  font-weight: var(--font-weight-bold);
  border: 2px solid white;
  border-radius: 100%;
`;

interface ICardAgeProps {
  age: Ages;
}
export function CardAge({ age }: ICardAgeProps) {
  return (
    <CardAgeBorder>
      <StyledCardAge>{age}</StyledCardAge>
    </CardAgeBorder>
  );
}
