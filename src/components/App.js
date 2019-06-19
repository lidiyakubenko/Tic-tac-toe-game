import React, {Component} from 'react'
import {connect} from 'react-redux'
import Row from './Row'
import c from '../../constants'
import PropTypes from 'prop-types'

class App extends Component {

    render() {
        const {gameField = [], makeGoal = f => f, winner = '', startNewGame = f => f} = this.props
        return (
            <div>
                <h3>{winner}</h3>
                <table className='game_field'>
                    <tbody>
                    {gameField.map((row, i) => (
                        <Row
                            key={i}
                            row={row}
                            numberRow={i}
                            winner={winner}
                            makeGoal={makeGoal}
                            gameField={gameField}/>)
                    )}
                    </tbody>
                </table>
                <button onClick={startNewGame}>Начать заново</button>
            </div>

        )

    }
}

App.propTypes = {
    gameField: PropTypes.array,
    makeGoal: PropTypes.func,
    winner: PropTypes.string,
    startNewGame: PropTypes.func
}


const mapStateToProps = state => ({
    gameField: state.gameField,
    winner: state.winner
})

const mapDispatchToProps = dispatch => ({
    makeGoal(eventInfo) {
        dispatch({...eventInfo, type: c.MAKE_GOAL})
    },
    startNewGame() {
        dispatch({type: c.CLEAN_STATE})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
