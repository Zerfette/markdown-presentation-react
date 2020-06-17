import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//LOCAL
import { useMarked } from '@hooks'
import PresentationNav from './PresentationNav'

const Present = ({ history }) => {
  const dp = useDispatch()
  const { slides, currentSlide } = useSelector((state) => state)

  const keyListener = (ev) => {
    const { keyCode } = ev
    switch (keyCode) {
      case 27:
        history.push('/')
        break
      case 37:
        dp({ type: 'PREVIOUS_SLIDE' })
        break
      case 39:
        dp({ type: 'NEXT_SLIDE' })
        break
      default:
        return
    }
  }

  return (
    <div style={{ outline: 'none' }} tabIndex='0' onKeyDown={keyListener}>
      <Link to={'/'}>
        <button
          onClick={() => {}}
          style={{
            width: '100%',
            backgroundColor: '#555555',
            color: 'white',
          }}
        >
          <i className='fas fa-times-circle' style={{ margin: 8 }} />
          EXIT PRESENTATION
        </button>
      </Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: 8,
            border: '1px solid',
            height: '80vh',
            width: '120vh',
            maxWidth: '100vw',
            overflow: 'hidden',
          }}
        >
          <div style={{ margin: 16 }}>{useMarked(slides[currentSlide])}</div>
        </div>
        <PresentationNav />
      </div>
    </div>
  )
}

export default Present
