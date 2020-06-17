import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

//LOCAL
import { useMarked } from '@util/hooks'

const SlideThumbnail = (slide, i, isCurrentSlide) => {
  const dp = useDispatch()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '8px',
      }}
    >
      <button
        onClick={() =>
          dp({
            type: 'DELETE_SLIDE',
            payload: i,
          })
        }
        style={{
          fontSize: '8px',
          height: '16px',
        }}
      >
        DELETE
      </button>
      <div
        style={{
          border: `${isCurrentSlide ? 2 : 1}px solid`,
          margin: `${isCurrentSlide ? 7 : 8}px`,
          padding: '0px 4px',
          fontSize: 8,
          height: 100,
          width: 150,
          cursor: 'pointer',
          textAlign: 'left',
        }}
        onClick={() => {
          dp({
            type: 'GO_TO_SLIDE',
            payload: slide,
          })
        }}
      >
        {useMarked(slide)}
      </div>
    </div>
  )
}

export default SlideThumbnail
