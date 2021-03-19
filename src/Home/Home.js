import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <Link to='/Game' onClick={props.join}>Join Game</Link>
    </div>
  )
}

export default Home
