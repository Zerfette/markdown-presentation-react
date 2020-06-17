import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//LOCAL
import { useMarked } from '@util/hooks'
import PresentationNav from './PresentationNav'

const Present = () => {
  const { slides, currentSlide } = useSelector((state) => state)
 
  return (
    <>
      <Link to={'/'}>
        <button
          onClick={() => {}}
          style={{
            width: '100%',
            // height: 50,
            backgroundColor: '#555555',
            color: 'white',
            // fontSize: 24,
          }}
        >
          <i class='fas fa-times-circle' style={{ margin: 8 }} />
          EXIT PRESENTATION
        </button>
      </Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: 8,
            border: '1px solid',
            height: '80vh',
            width: '120vh',
            maxWidth: '100vw',
          }}
        >
          <div style={{ margin: 16 }}>{useMarked(slides[currentSlide])}</div>
        </div>
        <PresentationNav />
      </div>
    </>
  )
}

export default Present
