import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const CardsLoader = () => {
  return (
    <div className='cards_loader'>
      <SkeletonTheme color="#0000004d" highlightColor="#0000004d">
        <div className='cards_loader-title'>
          <Skeleton width={200} height={30} />
          <div className='cards_loader--items'>
            <div className='cards_loader-item'>
              <Skeleton width={360} height={300} />
              <Skeleton width={360} height={80} />
            </div>
            <div className='cards_loader-item'>
              <Skeleton width={360} height={380} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default CardsLoader
