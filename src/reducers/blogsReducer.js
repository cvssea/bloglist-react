import blogService from '../services/blogs';

const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.payload;
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

export default blogsReducer;
