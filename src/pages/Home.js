import React from 'react'
import marked from 'marked'
import renderHTML from 'react-render-html'
//LOCAL
import {} from '@ui'

const Home = () => {

  const test = renderHTML(marked('# Test \n - test'))
  return <>{test}</>
}

export default Home
