const checkRowMatches = (line, condition) => [...line].every(l => l === condition)

const checkRowFilled = line => [...line].every(l =>l)

const calculateMatches = matrix => matrix.reduce((accum, line) =>
    [...accum, checkRowMatches(line, 'x') ? 'x' : checkRowMatches(line, 'o') ? 'o' : null], [])

const calculateFilled = matrix => matrix.reduce((accum, line) =>
    [...accum, checkRowFilled(line)], [])

const checkWinner = matrix => {
    let resultMatches = null
    let resultFilled = null
    const matches = calculateMatches(matrix)
    const filled = calculateFilled(matrix)
    matches.forEach(val => val ? resultMatches = val : null)
    resultFilled = filled.every(val => val)
    console.log(resultFilled)
    return resultMatches? resultMatches : resultFilled ? 'No winner...' : null
}

export const checkMatrices = (matrices, index) => {
    let winner = checkWinner(matrices[index])
    return winner ? winner :
        index === matrices.length - 1 ? null : checkMatrices(matrices, index + 1)
}

export const calculateVerticals = matrix => {
    let verticals = [[], [], []]
    matrix.forEach(line => [...line].forEach((val, i) =>
        verticals[i] = [...verticals[i], val])
    )
    return verticals
}


export const calculateDiagonals = matrix => {
    const diagonals = [[], []]
    matrix.forEach((line, i) => diagonals[0][i] = [...line][i])
    matrix.forEach((line, i) => diagonals[1][i] = [...line].reverse()[i])
    return diagonals
}

export const determineEmptyField = gameField => {
    const randomRow = Math.floor(Math.random() * gameField.length)
    const randomField = Math.floor(Math.random() * gameField.length)
    const field = gameField[randomRow][randomField]
    return field ? determineEmptyField(gameField) : {row: randomRow, field: randomField}
}
