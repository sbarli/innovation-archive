import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const HomeWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const StartGameLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export function Home() {
  return (
    <HomeWrapper className="Home">
      <StartGameLink to="/start">
        Start New Game{' '}
        <span role="img" aria-label="arrow-right">
          ➡️
        </span>
      </StartGameLink>
    </HomeWrapper>
  );
}

export default Home;
