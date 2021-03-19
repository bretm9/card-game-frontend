import React from 'react';
import OpponentHand from '../OpponentHand/OpponentHand'
import Table from '../Table/Table'
import PlayerHand from '../PlayerHand/PlayerHand'

const Game = (props) => {
  const opponentHands = props.opponents.map((opponent, i) => {
    return <OpponentHand key={i} player={opponent} />
  });
  
  return ( 
    <div>
      <h1>You are player {props.playerNumber}</h1>
      {opponentHands}
      <Table />
      <PlayerHand />
    </div>
  )
}

export default Game;
