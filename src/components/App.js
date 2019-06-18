import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        const {game} =this.props
        return (
            <div>
                {game}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    game: state.game
})
export default connect(mapStateToProps, null)(App)
