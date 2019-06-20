export const checkRow = (line, condition) => [...line].every(l => l === condition)

export const calculateMatches = matrix => matrix.reduce((accum, line) =>
    [...accum, checkRow(line, 'x') ? 'x' : checkRow(line, 'o') ? 'o' : null], [])

export const checkWinner = matrix => {
    let result = null
    const matches = calculateMatches(matrix)
    matches.forEach(val => val ? result = val : null)
    return result
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

export const convertToOneArr = matrix => matrix.reduce((accum, line) => [...accum, ...line], [])
