import auth from '../services/auth';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};

export const loginUser = credentials => async (dispatch) => {
  const userData = await auth.login(credentials);

  console.log('login', userData);

  dispatch({
    type: 'LOGIN',
    payload: userData,
  });
};

export default authReducer;
