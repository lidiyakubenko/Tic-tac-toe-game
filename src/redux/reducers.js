import c from '../../constants'

const game = (state = {}, action) => {
    switch (action.type) {
        case c.NEW_GAME:
            return {...state, game: 'new'}
        default:
            return state
    }
}

export default game