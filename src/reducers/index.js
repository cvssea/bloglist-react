import { combineReducers } from 'redux';

import blogs from './blogs';
import auth from './auth';
import message from './message';
import users from './users';

export default combineReducers({
  blogs, auth, message, users,
});
