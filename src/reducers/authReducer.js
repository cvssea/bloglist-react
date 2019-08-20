import auth from '../services/auth';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      console.log('setting null user in reducer');
      return null;
    case 'VALIDATE':
      return action.payload;
    default:
      return state;
  }
};

export const login = credentials => async (dispatch) => {
  const userData = await auth.login(credentials);
  console.log('created login action');
  dispatch({
    type: 'LOGIN',
    payload: userData,
  });
};

export const logout = () => {
  console.log('logging out');
  auth.logout();
  return { type: 'LOGOUT' };
};

export const validate = userInLocalStorage => (dispatch) => {
  console.log('validating');
  if (userInLocalStorage) {
    console.log('found user in storage');
    dispatch({
      type: 'VALIDATE',
      payload: JSON.parse(userInLocalStorage),
    });
  } else {
    console.log('no user in storage');
    return null;
  }
};

export default authReducer;
