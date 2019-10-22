import { createStore ,applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// redux-thunk中间件函数
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'
// compose增强函数

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore( reducer, enhancer)
sagaMiddleware.run(mySagas)
export default store