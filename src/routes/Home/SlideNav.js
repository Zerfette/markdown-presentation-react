import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//LOCAL
import SlideThumbnail from './SlideThumbnail'

const SlideNav = () => {
  const dp = useDispatch()
  const { slides, currentSlide } = useSelector((state) => state)
  const isCurrentSlide = i => currentSlide === i
  return (
    <div style={{ height: '100vh', overflowY: 'scroll', textAlign: 'center'}}>
      {slides.map((slide, i) =>
        SlideThumbnail( slide, i, isCurrentSlide(i) )
      )}
      <button onClick={() => dp({ type: 'ADD_SLIDE' })} style={{  width: 'calc(100% - 8px)'}}>ADD SLIDE</button>
    </div>
  )
}

export default SlideNav
