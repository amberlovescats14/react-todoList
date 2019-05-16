import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos';
import { red } from 'ansi-colors';


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
    const {id, title} = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkBox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes = {
  todos: PropTypes.object.isRequired,
}
const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todoitem

