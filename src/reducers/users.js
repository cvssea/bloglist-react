import usersService from '../services/users';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;

export const fetchUsers = () => async (dispatch) => {
  const users = await usersService.getUsers();
  dispatch({
    type: 'FETCH_USERS',
    payload: users,
  });
};
