import React from 'react'
import { SlideThumbnail } from './'

const SlideNav = ({
  slides,
  addSlide,
  deleteSlide,
  goToSlide,
  isCurrentSlide,
}) => {
  return (
    <div style={{ height: '100vh', overflow: 'scroll', textAlign: 'center', padding: '8px'}}>
      {slides.map((slide) =>
        SlideThumbnail({ slide, deleteSlide, goToSlide, isCurrentSlide })
      )}
      <button onClick={addSlide} style={{  width: '100%'}}>ADD SLIDE</button>
    </div>
  )
}

export default SlideNav
