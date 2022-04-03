import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components/macro';

import { Game } from '../../pages/game';
import { Home } from '../../pages/home';
import { StartGame } from '../../pages/start-game';
import GlobalStyle from '../../styles/global';

const AppWrapper = styled.div`
  height: 100vh;
`;
const AppHeader = styled.h1`
  padding-top: 2rem;
`;

export function App() {
  return (
    <AppWrapper className="App">
      <GlobalStyle />
      <AppHeader>Innovation</AppHeader>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/start">
          <StartGame />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
