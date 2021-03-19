import React from 'react';
import io from 'socket.io-client';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';

import Home from '../Home/Home'
import Game from '../Game/Game'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Redirect to='/' />
      </Switch>
    </main>
  );
}

export default App;
