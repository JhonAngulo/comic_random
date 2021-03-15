import React from 'react'

function CardComit ({ comic }) {
  const { title, day, month, year, num, transcript } = comic

  let date = new Date(year, month, day)
  date = date.toDateString()
  const text = transcript.length > 0 ? transcript.replace(/[[{}\]()><]/g, '') : ''

  return (
    <div className='cardinfo' >
      <h2 className='cardinfo--title' >{title}</h2>
      <div className='cardinfo--details'>
        <p className='cardinfo--details-info'>Date: {date}</p>
        <p className='cardinfo--details-info'>Number: {num}</p>
        <span className='cardinfo--details-text'>
          {text}
        </span>
      </div>
    </div>
  )
}

export default CardComit
