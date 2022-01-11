import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Game } from '../../pages/game';
import { Home } from '../../pages/home';
import { StartGame } from '../../pages/start-game';
import GlobalStyle from '../../styles/global';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
    </div>
  );
}

export default App;
