import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//LOCAL
import { useMarked } from '@util/hooks'

const Present = () => {
  const dp = useDispatch()
  const { slides, currentSlide } = useSelector((state) => state)
  const progress = ((currentSlide + 1) / slides.length) * 100
  useEffect(
    () => dp({ type: 'GO_TO_SLIDE', payload: 0 }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '100vh',
      }}
    >
      <div
        style={{
          margin: 8,
          border: '1px solid',
          height: '90vh',
          width: '135vh',
          maxWidth: '100vw',
        }}
      >
        <div style={{ margin: 16 }}>{useMarked(slides[currentSlide])}</div>
      </div>
      <div style={{ display: 'flex', width: '135vh', alignItems: 'center' }}>
        <button
          onClick={() => dp({ type: 'PREVIOUS_SLIDE' })}
          style={{ margin: 16, fontSize: 32, cursor: 'pointer' }}
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
            }}
          >
            {progress}%
          </div>
        </div>
        <button
          onClick={() => dp({ type: 'NEXT_SLIDE' })}
          style={{ margin: 16, fontSize: 32, cursor: 'pointer' }}
        >
          <i class='fas fa-angle-right' />
        </button>
      </div>
    </div>
  )
}

export default Present
