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
  margin: 1.5rem 0;
`;

export const StyledPlayerInput = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  margin-top: 0.5rem;
  margin-left: 2rem;

  :first-child {
    margin-top: 0;
    margin-right: 2rem;
  }

  :nth-child(2) {
    margin-right: 2rem;
  }
`;

export const StyledRemove = styled.div`
  cursor: pointer;
  font-size: 1rem;
  align-self: center;
  padding-left: 1rem;
  width: 2rem;
  overflow: visible;
  span {
    width: 1rem;
  }
`;

export const StyledErrorWrapper = styled.div`
  margin: 2rem 2rem 0;
`;
