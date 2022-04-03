import styled from 'styled-components/macro';

import { Colors } from '../../enums';
import { cardWrapperStyles } from '../../styles/card';

export const CardFrontWrapper = styled.div`
  ${cardWrapperStyles}
`;

export const TopCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const BottomResourceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardName = styled.p<{ $color: Colors }>`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  color: ${p => p.$color};
`;
