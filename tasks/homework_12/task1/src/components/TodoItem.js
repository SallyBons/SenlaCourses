import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, pure } from 'recompose';
import './styles.css';

const TodoItem = (props) => {
  const { todo, handleDeleteButton, handleComplete, handleImportant, isCompleted, isImportant } = props;
  return (
    <div className="todo-item">
      <div role="presentation" onClick={handleComplete} className={`${isCompleted === true ? 'task-completed' : 'todo-text'} ${isImportant === true ? 'task-important' : 'todo-text'}`}>{todo}</div>
      <div className="buttons-wrapper">
        <button type="button" onClick={handleImportant} className={`${isImportant === false ? 'important-button' : 'not-important-button'}`} />
        <button type="button" className="delete-button" onClick={handleDeleteButton}>
          <i className="fas fa-trash-alt delete-icon" />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleImportant: PropTypes.func.isRequired
};

export default compose(
  pure,
  withHandlers({
    handleDeleteButton: ({ toggleDeleteButton, id }) => () => toggleDeleteButton(id),
    handleComplete: ({ toggleCompletition, id }) => () => toggleCompletition(id),
    handleImportant: ({ toggleImportant, id }) => () => toggleImportant(id)
  })
)(TodoItem);

