import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

//LOCAL
import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App'
import store from '@core'

const WrappedApp = () => (
  <Router>
    <Provider store={store}>
        <App />
    </Provider>
  </Router>
)

ReactDOM.render(<WrappedApp />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
