import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import guid from '../utils';

const Form = ({onSubmit}) => {
  const [todo, updateTodo] = useState('');

  const handleChangeTodo = useCallback((e) => {
    updateTodo(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const result = {
      id: guid(),
      todo,
      isImportant: false,
      isCompleted: false

    };

    onSubmit(result);
    updateTodo('');
  }, [todo, onSubmit]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
    <p className="new-task">New task</p>
    <textarea
      value={todo}
      type="text"
      name="todo"
      maxLength="120"
      onChange={handleChangeTodo}
      className="form-input"
    />
    <div className="btn-wrapper">
      <button className="add-btn" type="submit" disabled={todo.length === 0}>Add</button>
    </div>
  </form>
);
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;


