import React, {Component} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm name="felex" />
        <TodoList />
      </div>
    );
  }
}

export default App;
