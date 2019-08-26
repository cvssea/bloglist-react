import blogService from '../services/blogs';

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
    case 'ADD_BLOG':
      return [...state, action.payload];
    case 'LIKE':
      return state.map((b) => {
        if (b.id === action.id) {
          return {
            ...b,
            likes: b.likes + 1,
          };
        }
        return b;
      });
    case 'DELETE_BLOG':
      return state.filter(b => b.id !== action.id);
    default:
      return state;
  }
};

export const initBlogs = () => async (dispatch) => {
  const blogs = await blogService.getAll();
  dispatch({
    type: 'INIT',
    payload: blogs,
  });
};

export const createBlog = data => async (dispatch) => {
  const newBlog = await blogService.create(data);

  console.log('creating blog');
  dispatch({
    type: 'ADD_BLOG',
    payload: newBlog,
  });
  setTimeout(() => dispatch({ type: 'CLEAR_MESSAGE' }), 5000);
};

export const updateLikes = (likes, id) => async (dispatch) => {
  await blogService.like(likes + 1, id);
  dispatch({
    type: 'LIKE',
    id,
  });
};

export const deleteBlog = id => async (dispatch) => {
  await blogService.remove(id);

  dispatch({
    type: 'DELETE_BLOG',
    id,
  });
};

export default blogsReducer;
