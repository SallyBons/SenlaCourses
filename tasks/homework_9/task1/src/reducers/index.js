const initialValues = {
   users: null
};

const usersReducers = (state = initialValues, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: [...state.users.filter(name => name !== action.id)]
      }
    default:
      return state;
  }
}
// Action creators
const deleteUser = id => ({
  type: 'DELETE_USER',
  id: id
})
const loadUser = () => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((result) => result.json())
    .then((result) => {

      let names = [];
      result.forEach(element => {
        names.push(element.name);
      });

      dispatch({
        type: 'GET_USERS',
        payload: names
      })
    })
}

export default usersReducers;
export {
  loadUser,
  deleteUser
};