import { createStore } from 'redux'
import rootReducer from './reducer'

const reduxExtension =
  // process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default createStore(
  rootReducer,
  { slides: ['New Slide'], currentSlide: 0 },
  reduxExtension
)
