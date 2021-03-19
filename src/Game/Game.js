import React from 'react';

const Game = (props) => {
  return ( 
    <div>
      <button onClick={props.join}>Join Game</button>
      <h1>You are player {props.playerNumber}</h1>
    </div>
  )
}

export default Game;
