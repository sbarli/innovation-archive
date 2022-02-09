import styled from 'styled-components/macro';

import { Colors } from '../../enums';
import { cardWrapperStyles } from '../../styles/card';

export const CardDetailsWrapper = styled.div`
  ${cardWrapperStyles}
  width: 525px;
  min-height: 250px;
`;

export const TopCardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const BottomResourceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px;
`;

export const CardName = styled.p<{ $color: Colors }>`
  font-size: 1.3rem;
  font-weight: var(--font-weight-bold);
  color: ${p => p.$color};
  margin-bottom: 0.5rem;
`;
