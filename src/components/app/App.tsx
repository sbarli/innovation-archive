import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from '../../pages/home';
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
