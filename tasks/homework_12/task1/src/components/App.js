import React from 'react';
import {
  compose, withState, withHandlers, pure,
  lifecycle, withPropsOnChange
} from 'recompose';

import Form from './Form';
import TodoItem from './TodoItem';
import Tabs from './Tabs';

import './styles.css';

const App = (props) => {
  const { handleSubmitButton, handleDeleteTodo, handleCompleteTodo, handleImportantTodo, handleSubmitTabClick, handleChangeSearchInput, searchInputValue } = props;

  let recomposeCustomRender = () => {
    const { todos, filteredArray } = props;
    let todosToRender = [];

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
    let { tabStatus } = props;
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
          <Tabs tabClick={handleSubmitTabClick} {...props} />
        </div>

        <Form onSubmit={handleSubmitButton} />

        <div className="todo-list">
          {recomposeCustomRender()}
        </div>

      </div>
    </div>
  );
};

export default compose(
  pure,
  withState('todos', 'setTodos', []),
  withState('tabStatus', 'settabStatus', 'all'),
  withState('filteredArray', 'setfilteredArray', []),
  withState('searchInputValue', 'setsearchInputValue', ''),
  lifecycle({
    componentDidMount() {
      let { setTodos } = this.props;
      if (localStorage.getItem('todos')) {
        let todosStorage = localStorage.getItem('todos');
        todosStorage = JSON.parse(todosStorage);
        setTodos(todosStorage)
      } else {
        const todosStorage = [];
        localStorage.setItem('todos', JSON.stringify(todosStorage));
        setTodos(todosStorage)
      }
    },
    componentDidUpdate() {
      let { todos } = this.props;
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }),
  withPropsOnChange(['todos'], ({ todos }) => {
  }),
  withHandlers({
    // ToDo Form
    handleSubmitButton: ({ todos, setTodos }) => (value) => {
      setTodos([value, ...todos])
    },

    // ToDo Item
    handleCompleteTodo: ({ todos, setTodos }) => (id) => {
      const res = todos.map((value) => {
        const item = Object.assign({}, value);;
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
          return item;
        }
        return item;
      });
      setTodos(res);
    },
    handleImportantTodo: ({ todos, setTodos }) => (id) => {
      const res = todos.map((value) => {
        const item = Object.assign({}, value);;
        if (item.id === id) {
          item.isImportant = !item.isImportant;
          return item;
        }
        return item;
      });
      setTodos(res);
    },
    handleDeleteTodo: ({ todos, setTodos }) => (id) => {
      const result = todos.filter(todo => todo.id !== id);
      setTodos(result);
    },

    // ToDo Tabs
    handleSubmitTabClick: ({ settabStatus }) => (value) => settabStatus(value),

    // Search Input
    handleChangeSearchInput: ({ setfilteredArray, setsearchInputValue, todos }) => (event) => {
      let newList = [];
      if (event.target.value !== '') {
        newList = todos.filter(item => {
          const lc = item.todo.toLowerCase();
          const filter = event.target.value.toLowerCase();
          return lc.includes(filter);
        });
      }
      setsearchInputValue(event.target.value)
      setfilteredArray(newList)
    }
  }),
)(App);
