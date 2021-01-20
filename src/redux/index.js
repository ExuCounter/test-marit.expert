import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
