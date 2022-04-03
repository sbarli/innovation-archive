import React from 'react';
import styled from 'styled-components/macro';

import { Colors } from '../../enums';

const ActionTextWrapper = styled.div<{ color: Colors }>`
  border: 2px solid white;
  padding: 0.5rem;
  background-color: ${p => p.color};
  color: ${p => (p.color !== Colors.YELLOW ? 'white' : 'black')};
`;

const StyledActionText = styled.p`
  text-align: left;
`;

interface IActionText {
  action: string;
  color: Colors;
}

export function ActionText({ action, color }: IActionText) {
  return (
    <ActionTextWrapper color={color}>
      <StyledActionText>{action}</StyledActionText>
    </ActionTextWrapper>
  );
}
