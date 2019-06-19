import React, {Component} from 'react'

class Row extends Component {

    handleClick = (numberRow, numberField) => {
        const {makeGoal} = this.props
        makeGoal({value: 'x', row: numberRow, field: numberField})
    }

    render() {
        const {row, numberRow} = this.props
        return (
            <tr>
                {row.map((field, i) =>
                    (<td key={i}
                         className='game_cell'
                         onClick={() =>this.handleClick(numberRow, i)}
                    >
                        {field}
                    </td>))}
            </tr>
        )
    }
}

Row.propTypes = {}

export default Row
