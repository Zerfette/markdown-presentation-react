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
          onClick={() => {dp({type: 'GO_TO_SLIDE', payload: 0})}}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#555555',
            color: 'white',
            fontSize: 24,
          }}
        >
          <i className='fas fa-expand' style={{ margin: 8 }} />
          PRESENT
        </button>
      </Link>
      <div style={{ height: '100%', overflowY: 'scroll', textAlign: 'center' }}>
        {slides.map((slide, i) => (
          <SlideThumbnail
            key={i}
            {...{ slide, i, isCurrent: isCurrentSlide(i) }}
          />
        ))}
        <button
          onClick={() => dp({ type: 'ADD_SLIDE' })}
          style={{ width: 'calc(100% - 16px)', margin: 8 }}
        >
          ADD SLIDE
        </button>
      </div>
    </div>
  )
}

export default SlideNav
