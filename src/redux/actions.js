import {calculateDiagonals, calculateVerticals, checkMatrices,determineEmptyField} from './help-functions'
import c from '../../constants'


export const determineWinner = (gameField) => dispatch => {
    const copyField = [...gameField]
    const matrices = [copyField, calculateDiagonals(copyField), calculateVerticals(copyField)]
    const result = checkMatrices(matrices, 0)
    dispatch({type: c.DETERMINE_WINNER, value: result ? result : null})
}

export const computerMakeGoal = gameField => dispatch => {
    const emptyField = determineEmptyField(gameField)
    dispatch({...emptyField,value:'o',type: c.COMPUTER_MAKE_GOAL})
}