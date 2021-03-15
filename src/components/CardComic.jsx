import React from 'react'
import Score from '@components/Score'

function CardComit ({ comic }) {
  const { title, img } = comic
  return (
    <div className='cardcomic' >
      <div className='cardcomic--imagen'>
        <img className='cardcomic--imagen-img' src={img} alt={title} />
        <Score />
      </div>
    </div>
  )
}

export default CardComit
