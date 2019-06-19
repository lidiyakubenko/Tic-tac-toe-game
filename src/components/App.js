import React, {Component} from 'react'
import {connect} from 'react-redux'
import Row from './Row'
import c from '../../constants'

class App extends Component {

    render() {
        const {gameField, makeGoal} = this.props
        return (
            <div>
                <table className='game_field'>
                    <tbody>
                    {gameField.map((row, i) => (
                        <Row
                            key={i}
                            row={row}
                            numberRow={i}
                            makeGoal={makeGoal}
                        />)
                    )}
                    </tbody>
                </table>
            </div>

        )

    }
}

const mapStateToProps = state => ({
    gameField: state.gameField,
})

const mapDispatchToProps = dispatch => ({
    makeGoal(eventInfo) {
        dispatch({...eventInfo, type: c.MAKE_GOAL})
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
