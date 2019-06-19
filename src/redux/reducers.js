import c from '../../constants'
import {combineReducers} from 'redux'

const initialStateField = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const makeGoalGameField = (state, action) => state.map((s, i) => i !== action.row ? s : makeGoalRow(s, action))

const makeGoalRow = (state, action) => state.map((s, i) => i !== action.field ? s : action.value)

const determineWinner = (state, action) => action.value === 'x' ? 'You win!' :
    action.value === 'o' ? 'Computer win!' : null

const gameField = (state = initialStateField, action) => {
    switch (action.type) {
        case c.MAKE_GOAL  :
            return makeGoalGameField(state, action)
        case c.COMPUTER_MAKE_GOAL:
            return makeGoalGameField(state, action)
        case c.CLEAN_STATE:
            return initialStateField
        default:
            return state
    }
}

const winner = (state = null, action) => {
    switch (action.type) {
        case c.DETERMINE_WINNER:
            return determineWinner(state, action)
        case c.DETERMINE_WINNER_AFTER_COMPUTER:
            return determineWinner(state, action)
        case c.DETERMINE_TIE:
            return action.value
        case c.CLEAN_STATE:
            return null
        default:
            return state
    }
}

export default combineReducers({gameField, winner})
