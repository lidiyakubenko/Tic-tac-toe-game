import c from '../../constants'

const game = (state = {}, action) => {
    switch (action.type) {
        case c.MAKE_GOAL:
            return state
        default:
            return state
    }
}

export default game