import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Row extends Component {
    handleClick = (numberRow, numberField) => {
        const {makeGoal} = this.props
        makeGoal({value: 'x', row: numberRow, field: numberField})
    }

    render() {
        const {row, numberRow, winner} = this.props
        return (
            <tr>
                {row.map((field, i) =>
                    (<td key={i}
                         className={winner || field ? 'game_cell_selected' : 'game_cell'}
                         onClick={() => winner || field ? {} : this.handleClick(numberRow, i)}
                    >
                        {field}
                    </td>))}
            </tr>
        )
    }
}

Row.propTypes = {}

export default Row
