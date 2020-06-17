import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//LOCAL
import SlideThumbnail from './SlideThumbnail'

const SlideNav = () => {
  const dp = useDispatch()
  const { slides, currentSlide } = useSelector((state) => state)
  const isCurrentSlide = (i) => currentSlide === i
  return (
    <div style={{ height: 'calc(100vh - 50px)' }}>
      <Link to={'/present'}>
        {' '}
        <button
          onClick={() => {}}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#555555',
            color: 'white',
            fontSize: 24,
          }}
        >
          <i class='fas fa-expand' style={{ margin: 8 }} />
          PRESENT
        </button>
      </Link>
      <div style={{ height: '100%', overflowY: 'scroll', textAlign: 'center' }}>
        {slides.map((slide, i) => SlideThumbnail(slide, i, isCurrentSlide(i)))}
        <button
          onClick={() => dp({ type: 'ADD_SLIDE' })}
          style={{ width: 'calc(100% - 8px)' }}
        >
          ADD SLIDE
        </button>
      </div>
    </div>
  )
}

export default SlideNav
