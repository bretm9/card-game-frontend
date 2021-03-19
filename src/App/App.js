import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from '../logo.svg';
import './App.css';

import Home from '../Home/Home';
import Game from '../Game/Game';

import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:9000';

const socket = io.connect(ENDPOINT);

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerNumber: null,
      opponents: [
        'opponent1',
        'opponent2'
      ]
    };
  }

  join = () => {
    socket.emit('join', (playerNumber) => {
      this.setState({ playerNumber: playerNumber });
    })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={() => {
              return <Home join={this.join} />
            }} 
          />
          <Route 
            path='/Game' 
            render={() => {
              return <Game playerNumber={this.state.playerNumber} opponents={this.state.opponents} />
            }} 
          />
          {/* <Route path='/game' render={Game} /> */}
          <Redirect to='/' />
        </Switch>
      </main>
    );
  }
}

export default App;
