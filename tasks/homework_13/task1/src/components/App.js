import React, { useState, useCallback, useEffect } from 'react';
import Form from './Form';
import Tabs from './Tabs';
import TodoItem from './TodoItem';
import './styles.css';


const App = () => {
  const [todos, updateTodos] = useState([]);
  const [didMount, updateDidMount] = useState(false);
  const [tabStatus, updateTabStatus] = useState('all');
  const [filteredArray, updatefilteredArray] = useState([]);
  const [searchInputValue, updatesearchInputValue] = useState('');

  useEffect(() => {
    if (didMount === false) {
      if (localStorage.getItem('todos')) {
        let todosStorage = localStorage.getItem('todos');
        todosStorage = JSON.parse(todosStorage);
        updateTodos(todosStorage)
      }
      updateDidMount(true)
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  });

  const handleSubmitButton = useCallback(value => updateTodos([value, ...todos]), [todos]);
  const handleDeleteTodo = useCallback(
    id => updateTodos(todos.filter(todo => todo.id !== id)),
    [todos]
  );
  const handleCompleteTodo = useCallback(
    id =>
      updateTodos(todos.map((value) => {
        const item = Object.assign({}, value);;
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
          return item;
        }
        return item;
      }
      )), [todos]);
  const handleImportantTodo = useCallback(
    id =>
      updateTodos(todos.map((value) => {
        const item = Object.assign({}, value);;
        if (item.id === id) {
          item.isImportant = !item.isImportant;
          return item;
        }
        return item;
      }
      )), [todos]);
  const handleSubmitTabClick = useCallback(
    value => updateTabStatus(value)
  )
  const handleChangeSearchInput = useCallback(
    event => {
      let newList = [];
      if (event.target.value !== '') {
        newList = todos.filter(item => {
          const lc = item.todo.toLowerCase();
          const filter = event.target.value.toLowerCase();
          return lc.includes(filter);
        });
      }
      
      updatesearchInputValue(event.target.value)
      updatefilteredArray(newList)
    }
  )

  let HooksCustomRender = () => {
    let todosToRender = [];
    console.log(filteredArray);
    if (filteredArray.length !== 0) {
      return returnTodosAccordingToStatus(filteredArray).map(todo => (
        <TodoItem
          key={todo.id}
          toggleDeleteButton={handleDeleteTodo}
          toggleCompletition={handleCompleteTodo}
          toggleImportant={handleImportantTodo}
          {...todo}
        />
      ));
    }
    if (searchInputValue.length !== 0) {
      return '';
    }

    todosToRender = returnTodosAccordingToStatus(todos);

    return todosToRender.map(todo => (
      <TodoItem
        key={todo.id}
        toggleDeleteButton={handleDeleteTodo}
        toggleCompletition={handleCompleteTodo}
        toggleImportant={handleImportantTodo}
        {...todo}
      />
    ));
  }

  let returnTodosAccordingToStatus = (todoArray) => {
    let todosToRender = []
    switch (tabStatus) {
      case 'active':
        todosToRender = todoArray.filter(todo => todo.isCompleted === false);
        break;

      case 'completed':
        todosToRender = todoArray.filter(todo => todo.isCompleted === true);
        break;

      default:
        todosToRender = todoArray;
        break;
    }
    return todosToRender;
  }

  return (
    <div className="app-container">
      <div className="todos-container">

        <div className="logo-search-wrapper">
          <img className="logo" src="https://senlainc.com/wp-content/themes/senla-theme/img/logo_header.svg" alt="oops!" />
        </div>

        <input
          type="text"
          name="search-bar"
          maxLength="100"
          onChange={handleChangeSearchInput}
          placeholder="Search task for to do"
          className="search-input"
        />
        <div>
          <Tabs tabClick={handleSubmitTabClick} tabStatus={tabStatus} />
        </div>

        <Form onSubmit={handleSubmitButton} />

        {/* <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleDeleteButton={handleDeleteTodo}
              toggleCompletition={handleCompleteTodo}
              toggleImportant={handleImportantTodo}
              {...todo}
            />
          ))}
        </ul> */}

        <ul className="todo-list">
          { HooksCustomRender() }
        </ul>

      </div>
    </div>
  );
};

export default App;

