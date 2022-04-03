import styled, { css } from 'styled-components/macro';

const centeredStyles = css`
  justify-self: center;
  text-align: center;
`;

const startAlignedStyles = css`
  justify-self: flex-start;
  text-align: start;
  padding-left: 0.5rem;
`;

export const StyledError = styled.div<{ $center?: boolean }>`
  width: var(--input-width);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  font-style: italic;
  ${p => (p.$center ? centeredStyles : startAlignedStyles)}
`;
