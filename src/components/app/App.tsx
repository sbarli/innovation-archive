import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../../pages/home';
import { StartGame } from '../../pages/start-game';
import GlobalStyle from '../../styles/global';
import { Counter } from '../counter/Counter';

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Counter />
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/start">
          <StartGame />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
