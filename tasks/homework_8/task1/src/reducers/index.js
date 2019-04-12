const initialValues = {
  todos: [],
};

const todos = (state = initialValues, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.id)]
      }
    default:
      return state;
  }
}

export default todos;