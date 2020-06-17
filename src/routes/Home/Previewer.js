import React from 'react'
import { useSelector } from 'react-redux'

//LOCAL
import { useMarked } from '@util/hooks'

const Previewer = () => {
  const { slides, currentSlide } = useSelector((state) => state)

  return (
    <div
      style={{ margin: 16, padding: 16, border: '1px solid', height: '70vh', width: '105vh' }}
    >
      {useMarked(slides[currentSlide])}
    </div>
  )
}

export default Previewer