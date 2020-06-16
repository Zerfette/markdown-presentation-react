import React from 'react'

//LOCAL
import { useMarked } from '@util/hooks'

const SlideThumbnail = ({ slide, deleteSlide, goToSlide, isCurrentSlide }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        onClick={deleteSlide(slide)}
        style={{
          fontSize: '8px',
          height: '16px',
        }}
      >
        DELETE
      </button>
      <div
        style={{
          border: `${isCurrentSlide(slide) ? 2 : 1}px solid`,
          margin: '8px',
          padding: '0px 4px',
          fontSize: '8px',
          height: '100px',
          width: '150px',
          cursor: 'pointer',
          textAlign: 'left'
        }}
        onClick={() => {
          goToSlide(slide)
        }}
      >
        {useMarked(slide)}
      </div>
    </div>
  )
}

export default SlideThumbnail
