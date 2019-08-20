import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { validate, logout } from './reducers/authReducer';
// import blogService from './services/blogs';
// import auth from './services/auth';

import Header from './components/Header';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import Blogs from './components/Blogs';

const App = ({ user, logout, validate }) => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    validate(window.localStorage.getItem('bloglistUser'));
  }, [validate]);

  return (
    <>
      <Header user={user ? user.name : null} onClick={logout} />
      {message && <Notification message={message} />}
      <main className="container">{user ? <Blogs setMessage={setMessage} /> : <LoginForm />}</main>
    </>
  );
};

export default connect(
  state => ({
    user: state.auth,
  }),
  { logout, validate },
)(App);

// const handleLogin = async (event) => {
//   event.preventDefault();
//   try {
//     loginUser(credentials);

//     // const userData = await auth.login(credentials);
//     window.localStorage.setItem('bloglistUser', JSON.stringify(currentUser));
//     blogService.setToken(currentUser.token);
//     setUser(currentUser);
//   } catch (e) {
//     console.log('LoginError:', e);
//     setMessage({
//       success: false,
//       text: e,
//     });
//     setTimeout(() => setMessage(null), 5000);
//   }
//   setCredentials(emptyCredentials);
// };
