import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodoForm extends Component {
  state={
    todo: ''
  }

  handleChange = e => this.setState({[e.target.name]: e.target.value});


  handleSubmit = e => {
    e.preventDefault();
    const {todo} = this.state;
    const result = {
      text: todo,
      id: Math.floor((Math.random() * 100) + 1),
      complete: false
    };

    // this.props.toggleTodo(result);
    // this.props.dispatch(addTodo(result));
    this.props.addTodo(result);
    this.setState({todo: ''})
  }


  render() {
    const {todo} = this.state;
    // console.log(1, this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" value={todo} onChange={this.handleChange} type="text"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch, onwProps) => {
//   console.log(onwProps);
//   return {
//     toggleTodo: (value) => dispatch(addTodo(value))
//   }
// };

// export default connect(null, mapDispatchToProps)(AddTodoForm);
//export default connect()(AddTodoForm);
export default connect(null, {addTodo})(AddTodoForm);
//export default connect(null, {addTodo: addTodo})(AddTodoForm);
