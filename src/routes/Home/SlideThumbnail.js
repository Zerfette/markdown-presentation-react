import React from 'react'
import { useDispatch } from 'react-redux'

//LOCAL
import { useMarked } from '@hooks'

const SlideThumbnail = ({ slide, i, isCurrent }) => {
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
          fontSize: 16,
        }}
      >
        <i className='fas fa-trash' />
      </button>
      <div
        style={{
          border: `${isCurrent ? 2 : 1}px solid`,
          margin: `${isCurrent ? 7 : 8}px`,
          padding: '0px 4px',
          fontSize: 6,
          height: 100,
          width: 150,
          cursor: 'pointer',
          textAlign: 'left',
          overflow: 'hidden'
        }}
        onClick={() => {
          dp({
            type: 'GO_TO_SLIDE',
            payload: i,
          })
        }}
      >
        {useMarked(slide)}
      </div>
    </div>
  )
}

export default SlideThumbnail
