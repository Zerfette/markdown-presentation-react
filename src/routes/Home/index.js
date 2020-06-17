import React from 'react'

//LOCAL
import SlideNav from './SlideNav'
import Previewer from './Previewer'
import Editor from './Editor'

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <SlideNav />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Previewer />
        <Editor />
      </div>
    </div>
  )
}

export default Home
