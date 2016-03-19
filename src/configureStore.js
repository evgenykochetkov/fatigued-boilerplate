import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(createSagaMiddleware(rootSaga)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

  return store
}
