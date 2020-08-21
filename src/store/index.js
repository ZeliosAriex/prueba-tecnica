import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const reduxDevtoolsExtensionCompose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

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
