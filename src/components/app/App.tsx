import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from '../../pages/home';
import { StartGame } from '../../pages/start-game';
import { Counter } from '../counter/Counter';

import './App.css';

export function App() {
  return (
    <Router>
      <div className="App">
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
    </Router>
  );
}

export default App;
