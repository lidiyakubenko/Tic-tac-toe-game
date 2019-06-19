import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import game from './reducers'
import c from '../../constants'
import {computerMakeGoal, determineWinner} from './actions'

const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const actionsAfterMyGoal = store => next => action => {
    let result
    result = next(action)
    if (action.type === c.MAKE_GOAL) {
        const gameField = store.getState().gameField
        store.dispatch(determineWinner(gameField,c.DETERMINE_WINNER))
    }
    if (action.type === c.DETERMINE_WINNER) {
        const winner = store.getState().winner
        const gameField = store.getState().gameField
        if (!winner) {
            store.dispatch(computerMakeGoal(gameField))
        }
    }
    if (action.type === c.COMPUTER_MAKE_GOAL) {
        const gameField = store.getState().gameField
        store.dispatch(determineWinner(gameField,c.DETERMINE_WINNER_AFTER_COMPUTER))
    }
    return result
}

let configureStore = () => createStore(
    game, {}, applyMiddleware(thunk,actionsAfterMyGoal,logger)
)

export default configureStore