import React from 'react'
import { useSelector } from 'react-redux'

//LOCAL
import { useMarked } from '@hooks'

const Previewer = () => {
  const { slides, currentSlide } = useSelector((state) => state)

  return (
    <div
      style={{ margin: 16, border: '1px solid', height: '60vh', width: '90vh' }}
    >
      <div style={{ margin: 16 }}>{useMarked(slides[currentSlide])}</div>
    </div>
  )
}

export default Previewer
