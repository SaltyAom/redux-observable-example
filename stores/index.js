import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import initState from './initState'
import reducer from './reducer'

import epic from './epic'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const epicMiddleware = createEpicMiddleware()

const store = createStore(
    reducer,
    initState,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
)

epicMiddleware.run(epic)

export default store