import { css } from 'styled-components/macro';

export const cardWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--card-secondary);
  border: 4px solid var(--card-border);
  border-radius: 20px;
  padding: 1rem;
  width: 300px;
`;

export * from './CardGrid';
