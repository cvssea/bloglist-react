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
};

export const updateLikes = (likes, id) => async (dispatch) => {
  await blogService.like(likes + 1, id);
  dispatch({
    type: 'LIKE',
    id,
  });
};

export default blogsReducer;
