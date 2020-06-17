import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Editor = () => {
  const { slides, currentSlide } = useSelector((state) => state)
  const dp = useDispatch()
  return (
    <div style={{ width: '90vh', display: 'flex', margin: 16 }}>
      <button
        onClick={() => dp({ type: 'PREVIOUS_SLIDE' })}
        style={{ margin: 16, fontSize: 32, cursor: 'pointer' }}
      >
        <i class='fas fa-angle-left'/>
      </button>
      <textarea
        rows='12'
        value={slides[currentSlide]}
        onChange={(ev) => dp({ type: 'SAVE_SLIDE', payload: ev.target.value })}
        style={{ flexGrow: 1, overflowY: 'scroll' }}
      />
      <button
        onClick={() => dp({ type: 'NEXT_SLIDE' })}
        style={{ margin: 16, fontSize: 32, cursor: 'pointer' }}
      >
        <i class='fas fa-angle-right'/>
      </button>
    </div>
  )
}

export default Editor
