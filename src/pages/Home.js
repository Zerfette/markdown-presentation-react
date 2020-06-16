import React, { useState } from 'react'

//LOCAL
import { useMarked } from '@util/hooks'

const Home = () => {
  const [input, $input] = useState('')
  const handleChange = ev => $input(ev.target.value)
  const Display = useMarked(input)

  return (
    <>
      <textarea rows='6' value={input} onChange={handleChange} />
      {Display}
    </>
  )
}

export default Home
