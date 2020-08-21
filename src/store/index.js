import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

// Habilitamos las redux devtools extension solo en desarrollo
const reduxDevtoolsExtensionCompose =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null

export default () => {
  const composeEnhancers = reduxDevtoolsExtensionCompose || compose
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
