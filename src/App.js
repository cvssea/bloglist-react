import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { validate } from './reducers/auth';
import blogService from './services/blogs';

import Header from './components/Header';
import Notification from './components/Notification';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import Users from './components/Users';
import User from './components/User';

const App = ({
  user, validateUser, message,
}) => {
  useEffect(() => {
    const token = validateUser(window.localStorage.getItem('bloglistUser'));
    if (token) blogService.setToken(token);
  }, [validateUser]);

  return (
    <Router>
      <Header user={user ? user.name : null} />
      {message && <Notification message={message} />}
      <main className="container">
        {user ? (
          <>
            <Route exact path="/" component={Blogs} />
            <Route path="/blogs/:id" component={Blog} />
            <Route path="/add" component={BlogForm} />
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id" component={User} />
          </>
        ) : (
          <LoginForm />
        )}
      </main>
    </Router>
  );
};

export default connect(
  state => ({
    user: state.auth,
    message: state.message,
  }),
  { validateUser: validate },
)(App);
