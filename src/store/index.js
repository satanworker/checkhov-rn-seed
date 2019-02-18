import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'remote-redux-devtools'


import rootSaga from './saga'

// ---
// REDUCERS
// ---

import ExampleReducer from './example'
import ThemeReducer from './theme'

export default function configureStore() {
  const devEnv = process.env['NODE_ENV'] === 'development'

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const enhancer = devEnv ?
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
    : compose(
      applyMiddleware(...middlewares)
    )

  const rootReducer = combineReducers({
    example: ExampleReducer,
    theme: ThemeReducer
  })

  const store = createStore(rootReducer, enhancer)

  sagaMiddleware.run(rootSaga)

  return { store }
}
