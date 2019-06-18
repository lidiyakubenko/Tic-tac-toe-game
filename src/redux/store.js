import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import game from './reducers'

let configureStore = () => createStore(
    game, {me: 0, computer: 0}, applyMiddleware(thunk)
)

export default configureStore