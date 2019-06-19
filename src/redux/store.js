import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import game from './reducers'
import {createStore, applyMiddleware} from 'redux'
import c from '../../constants'
import {computerMakeGoal, determineWinner} from './actions'



const actionsAfterMyGoal = store => next => action => {
    let result
    result = next(action)
    if (action.type === c.MAKE_GOAL) {
        const gameField = store.getState().gameField
        store.dispatch(determineWinner(gameField))
    }
    if (action.type === c.DETERMINE_WINNER) {
        const winner = store.getState().winner
        const gameField = store.getState().gameField
        if (!winner) {
            store.dispatch(computerMakeGoal(gameField))
        }
    }
    return result
}


let configureStore = () => createStore(
    game, {}, applyMiddleware(thunk, actionsAfterMyGoal)
)

export default configureStore