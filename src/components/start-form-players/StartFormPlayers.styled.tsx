import styled from 'styled-components/macro';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledHeader = styled.h3`
  margin: 0.5rem auto;
`;

export const StyledPlayerFields = styled.div`
  display: grid;
  grid-auto-flow: row;
  width: 13rem;
  margin: 1.5rem 0;
`;

export const StyledPlayerInput = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  margin-top: 0.5rem;
  margin-left: 1.25rem;

  :first-child {
    margin-top: 0;
  }
`;

export const StyledRemove = styled.div`
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-end;
  padding-left: 1rem;
`;

export const StyledError = styled.div`
  color: red;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
`;
