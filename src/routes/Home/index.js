import React from 'react'

//LOCAL
import SlideNav from './SlideNav'
import Previewer from './Previewer'
import Editor from './Editor'

const Home = () => {

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div>
        <SlideNav />
      </div>
      <div style={{ width: '100%', height: '100%' }}>
        <Previewer />
        <Editor/>
      </div>
    </div>
  )
}

export default Home
