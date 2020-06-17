import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Editor = () => {
  const { slides, currentSlide } = useSelector((state) => state)
  const dp = useDispatch()
  return (
    <>
      <button onClick={() => dp({ type: 'PREVIOUS_SLIDE' })}>BACK</button>
      <textarea
        rows='6'
        value={slides[currentSlide]}
        onChange={(ev) => dp({ type: 'SAVE_SLIDE', payload: ev.target.value })}
      />
      <button onClick={() => dp({ type: 'NEXT_SLIDE' })}>FORWARD</button>
    </>
  )
}

export default Editor
