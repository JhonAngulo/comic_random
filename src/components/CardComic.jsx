import React from 'react'
import Score from '@components/Score'
import useGetComit from '../hooks/useComic'

function CardComit() {

  const comic = useGetComit()
  console.log(comic)

  return (
    <div className='cardcomic' >
      <h1 className='cardcomic--title'>Title</h1>
      <div className='cardcomic--imagen'>
        <img className='cardcomic--imagen-img' src="https://imgs.xkcd.com/comics/woodpecker.png" alt="Woodpecker" />
        <Score />
      </div>
    </div>
  )
}

export default CardComit
