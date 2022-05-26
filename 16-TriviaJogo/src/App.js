import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import PlayGame from './pages/PlayGame';
import Settings from './pages/Settings';

import './App.css';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/playGame" component={ PlayGame } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/feedback" component={ Feedback } />
      <Route exact path="/ranking" component={ Ranking } />
    </Switch>
  );
}
