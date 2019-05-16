import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos';


export class Todoitem extends Component {
  getStyle = () => {
    return {
    background: 'grey',
    padding: '10px',
    borderBottom: '1px black dotted',
    color: 'white',
    textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkBox" onChange={this.props.markComplete}/> {' '}
        {this.props.todo.title}</p>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes = {
  todos: PropTypes.object.isRequired,
}

// const itemStyle = {
//   backgroundColor: 'red'
// }

export default Todoitem

