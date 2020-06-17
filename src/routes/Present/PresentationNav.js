import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PresentationNav = () => {
  const dp = useDispatch()
  const { slides, currentSlide } = useSelector((state) => state)
  const progress = Math.round(((currentSlide + 1) / slides.length) * 100)

  return (
    <div style={{ display: 'flex', width: '120vh', alignItems: 'center' }}>
      <button
        onClick={() => dp({ type: 'PREVIOUS_SLIDE' })}
        style={{ margin: 8, fontSize: 32, cursor: 'pointer' }}
      >
        <i class='fas fa-angle-left' />
      </button>
      <div style={{ flexGrow: 1, border: '1px solid' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: 'black',
            color: 'white',
            fontSize: 12,
            textAlign: 'right',
          }}
        >
          {progress}%
        </div>
      </div>
      <button
        onClick={() => dp({ type: 'NEXT_SLIDE' })}
        style={{ margin: 8, fontSize: 32, cursor: 'pointer' }}
      >
        <i class='fas fa-angle-right' />
      </button>
    </div>
  )
}

export default PresentationNav