// const ADD_TODO = 'ADD_TODO';

// action creator
const addTodo = value => ({
  type: 'ADD_TODO',
  payload: value
});

const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id: id
})

export {
  addTodo,
  deleteTodo
};
