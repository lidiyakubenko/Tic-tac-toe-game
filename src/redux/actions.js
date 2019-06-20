import c from '../../constants'
import {
    calculateDiagonals,
    calculateVerticals,
    checkMatrices,
    determineEmptyField,
    convertToOneArr
} from './help-functions'


export const determineWinner = (gameField, type) => dispatch => {
    const copyField = [...gameField]
    const matrices = [copyField, calculateDiagonals(copyField), calculateVerticals(copyField)]
    const result = checkMatrices(matrices, 0)
    if(!result && isTie(gameField)){
        dispatch({type: 'DETERMINE_TIE', value: 'No winner...'})
    }
    else {
        dispatch({type: type, value: result ? result : null})
    }
}

export const computerMakeGoal = gameField => dispatch => {
    const emptyField = determineEmptyField(gameField)
    dispatch({...emptyField, value: 'o', type: c.COMPUTER_MAKE_GOAL})
}

export const isTie = gameField => {
    const filled = convertToOneArr(gameField)
    return filled.every(f => f)
}
