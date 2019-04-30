import React, {useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import './styles.css';


const TodoItem = ({todo, id, toggleDeleteButton,toggleCompletition,toggleImportant,isCompleted,isImportant}) => {
  const handleDeleteButton = useCallback(() => toggleDeleteButton(id), [toggleDeleteButton, id]);
  const handleComplete = useCallback(() => toggleCompletition(id), [toggleCompletition, id]);
  const handleImportant = useCallback(() =>toggleImportant(id), [toggleImportant, id]);

  console.log('x');
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
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleDeleteButton: PropTypes.func.isRequired
};

export default memo(TodoItem);

