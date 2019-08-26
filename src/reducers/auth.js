import auth from '../services/auth';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return null;
    case 'VALIDATE':
      return action.payload;
    default:
      return state;
  }
};

export const login = credentials => async (dispatch) => {
  const userData = await auth.login(credentials);
  dispatch({
    type: 'LOGIN',
    payload: userData,
  });
};

export const logout = () => {
  auth.logout();
  return { type: 'LOGOUT' };
};

export const validate = userInLocalStorage => (dispatch) => {
  if (userInLocalStorage) {
    const user = JSON.parse(userInLocalStorage);
    dispatch({
      type: 'VALIDATE',
      payload: user,
    });
    return user.token;
  }
  return null;
};

export default authReducer;
