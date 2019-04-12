import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     todos: state.todos
//   };
// };

//export default connect(mapStateToProps)(TodoList);
export default connect(
  (state) => ({
    todos: state.todos
}))(TodoList);
