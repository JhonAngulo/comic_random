import React, { useState } from 'react'

const Score = () => {
  const [score, setScore] = useState(0)

  const handleClick = (value) => {
    setScore(value)
  }

  return (
    <div className='score'>
      <span className='score--item' onClick={() => handleClick(1)}>
        {score > 0 ? '💚' : '🖤'}
      </span>
      <span className='score--item' onClick={() => handleClick(2)}>
      {score > 1 ? '💚' : '🖤'}
      </span>
      <span className='score--item' onClick={() => handleClick(3)}>
      {score > 2 ? '💚' : '🖤'}
      </span>
      <span className='score--item' onClick={() => handleClick(4)}>
      {score > 3 ? '💚' : '🖤'}
      </span>
      <span className='score--item' onClick={() => handleClick(5)}>
      {score > 4 ? '💚' : '🖤'}
      </span>
    </div>
  )
}

export default Score
