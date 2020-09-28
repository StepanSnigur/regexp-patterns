import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducer from './reducers/Reducer'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(Reducer, composeEnhancers(applyMiddleware(ReduxThunk)))
export type AppStateType = ReturnType<typeof Reducer>

export default store
