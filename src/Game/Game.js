import React from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'localhost:9000'
let socket;

function Game() {
  socket = io(ENDPOINT);
  return (
    <div>
      
    </div>
  )
}

export default Game
