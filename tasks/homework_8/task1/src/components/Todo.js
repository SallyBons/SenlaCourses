import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class Todo extends Component {
  handleDelete = e => {
    e.preventDefault();
    const result = this.props.id;
    this.props.deleteTodo(result);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={this.handleDelete}>Remove</button>
      </div>

    )
  }
}

export default connect(null, { deleteTodo })(Todo);
