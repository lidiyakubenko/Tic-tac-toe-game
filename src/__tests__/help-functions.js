import {calculateDiagonals, convertToOneArr, calculateVerticals, checkRow} from '../redux/help-functions'
import {calculateMatches} from '../redux/help-functions'


describe('help-functions', () => {

    const matrix = [['x', null, 'o'], [null, 'x', 'o'], ['x', null, null]]

    const matrixWithWinner = [['o', 'o', 'o'], [null, 'x', 'o'], ['x', null, null]]

    describe('calculate diagonals, verticals, filled,matches, check row', () => {

        it('calculate diagonals', () =>
            expect(calculateDiagonals(matrix)).toStrictEqual([['x', 'x', null], ['o', 'x', 'x']])
        )

        it('calculate verticals', () =>
            expect(calculateVerticals(matrix)).toStrictEqual([['x', null, 'x'], [null, 'x', null], ['o', 'o', null]])
        )

        it('calculate filled', () =>
            expect(convertToOneArr(matrix)).toStrictEqual(['x', null, 'o', null, 'x', 'o', 'x', null, null])
        )

        it('calculate matches without winner', () =>
            expect(calculateMatches(matrix)).toStrictEqual([null, null, null])
        )

        it('calculate matches with winner', () =>
            expect(calculateMatches(matrixWithWinner)).toStrictEqual(['o', null, null])
        )

        it('check row without matches', () =>
            expect(checkRow(['x', null, null],'x')).toStrictEqual(false)
        )

        it('check row with matches', () =>
            expect(checkRow(['x', 'x', 'x'],'x')).toStrictEqual(true)
        )
    })

    describe('determine empty fields with mock data', () => {

        const determineEmptyField = (matrix) => {
            const randomRow = 0
            const randomField = 1
            const field = matrix[randomRow][randomField]
            return field ? determineEmptyField(matrix) : {row: randomRow, field: randomField}
        }

        it('determine empty fields', () =>
            expect(determineEmptyField(matrix)).toStrictEqual({row: 0, field: 1})
        )

    })

    describe('check matrices with mock winner', () => {
        const diagonals = [['x', 'x', null], ['o', 'x', 'x']]
        const verticals = [['x', null, 'x'], [null, 'x', null], ['o', 'o', null]]
        const matrices = [matrix, verticals, diagonals]

        const checkMatrices = (matrices, index, winner) => {
            return winner ? winner :
                index === matrices.length - 1 ? null : checkMatrices(matrices, index + 1)
        }
        it('check matrices with x winner', () =>
            expect(checkMatrices(matrices, 0, 'x')).toBe('x')
        )
        it('check matrices without winner', () =>
            expect(checkMatrices(matrices, 0, null)).toBe(null)
        )
    })

    describe('check winner with mock matches', () => {

        const checkWinner = (matrix, matches) => {
            let result = null
            matches.forEach(val => val ? result = val : null)
            return result
        }

        it('check winner with o winner', () =>
            expect(checkWinner(matrix, [null, 'o', null])).toBe('o')
        )
        it('check matrices without winner', () =>
            expect(checkWinner(matrix, [null, null, null])).toBe(null)
        )
    })

})
