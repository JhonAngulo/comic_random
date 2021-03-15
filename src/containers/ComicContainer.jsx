import React, { useEffect, useState } from 'react'
import CardComic from '@components/CardComic'
import CardInfo from '@components/CardInfo'
import CardsLoader from '@components/CardsLoader'

import useGetComit from '../hooks/useComic'

const ComicContainer = () => {
  const [loadgind, setLoading] = useState(true)
  const { comic, error } = useGetComit()
  console.log(comic)

  useEffect(() => {
    if (Object.keys(comic).length) {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [comic, error])

  if (error) {
    return 'error'
  }

  if (loadgind) {
    return <CardsLoader />
  }

  return (
    <div className='comic_container'>
      <h1 className='comic_container--title'>{comic.title}</h1>
      <div className='comic_container--cards'>
        <CardComic comic={comic} />
        <CardInfo comic={comic} />
      </div>
    </div>
  )
}

export default ComicContainer
