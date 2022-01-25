import styled from 'styled-components/macro';

export const CardFrontWrapper = styled.div`
  background-color: var(--card-secondary);
  border: 4px solid var(--card-border);
  border-radius: 20px;
  padding: 1rem;
  width: 300px;
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
