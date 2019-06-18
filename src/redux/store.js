import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import game from './reducers'

let configureStore = () => createStore(
    game, {}, applyMiddleware(thunk)
)

export default configureStore