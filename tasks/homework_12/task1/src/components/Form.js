import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, withHandlers, pure
} from 'recompose';
import './styles.css';
import guid from '../utils';

const Form = (props) => {
   const {todo, handleChangeInput, handleSubmit} = props;


    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <p className="new-task">New task</p>
        <textarea
          value={todo}
          type="text"
          name="todo"
          maxLength="120"
          onChange={handleChangeInput}
          className="form-input"
        />
        <div className="btn-wrapper">
          <button className="add-btn" type="submit" disabled={todo.length === 0}>Add</button>
        </div>
      </form>
    );
  };

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired
};

export default compose(
  pure,
  withState('todo', 'changeText', ''),
  withHandlers({
    handleChangeInput: props => (e) => {
       console.log('withHandlers', props);
      const {changeText} = props;

      changeText(e.target.value);
    },
    handleSubmit: props => (e) => {
      e.preventDefault();

      const {onSubmit, todo, changeText} = props;
      const result = {
        id: guid(),
        todo,
         isCompleted:false,
         isImportant:false
      };
      onSubmit(result);
      changeText('');
    }
  })
)(Form);
