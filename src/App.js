import React from 'react'
import { Route } from 'react-router-dom'
import { routes } from '@routes'

const App = () => routes.map(route => (<Route {...route} exact={true} key={route.text} />))

export default App
