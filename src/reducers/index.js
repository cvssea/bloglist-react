import { combineReducers } from 'redux';

import blogs from './blogsReducer';
import auth from './authReducer';

export default combineReducers({ blogs, auth });
