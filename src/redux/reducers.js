import c from '../../constants'
import {combineReducers} from 'redux'

const initialStateField = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const makeGoalGameField = (state, action) => state.map((s, i) => i !== action.row ? s : makeGoalRow(s, action))

const makeGoalRow = (state, action) => state.map((s, i) => i !== action.field ? s : action.value)


const gameField = (state = initialStateField, action) => {
    switch (action.type) {
        case c.MAKE_GOAL  :
            return makeGoalGameField(state, action)
        case c.COMPUTER_MAKE_GOAL:
            return makeGoalGameField(state, action)
        default:
            return state
    }
}


export default combineReducers({gameField})

const winner = (state = null, action) => {
    switch (action.type) {
        case c.DETERMINE_WINNER:
            return action.value === 'x' ? 'me' :
                action.value === 'o' ? 'computer' : null
        default:
            return state
    }
}

export default combineReducers({gameField, winner})
