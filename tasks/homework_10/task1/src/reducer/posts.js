
const initialState = {
  posts: []
};

// Constants
const LOAD_POSTS = 'LOAD_POSTS';

// Reducer
const posts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: [...action.payload]
      };
    default:
      return state;
  }
};

// Actions
const loadPosts = () => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((result) => result.json())
    .then((result) => {
      dispatch({
        type: LOAD_POSTS,
        payload: result
      })
    })
}

// Selectors
const getState = state => state.posts;
const selectPosts = state => getState(state).posts;
const getPostById = (state, id) => getState(state).posts.find(post => post.id === +id);

export default posts;
export {
  // actions
  loadPosts,

  // selectors
  selectPosts,
  getPostById
};
