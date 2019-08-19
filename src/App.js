import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import Blogs from './components/Blogs';
import blogService from './services/blogs';
import auth from './services/auth';

const App = ({ user }) => {
  // const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // const jsonUser = window.localStorage.getItem('bloglistUser');
    // if (jsonUser) {
    //   const loggedUser = JSON.parse(jsonUser);
    //  setUser(loggedUser);
    //  blogService.setToken(loggedUser.token);
    // }
    

    if (user) {
      window.localStorage.setItem('bloglistUser', JSON.stringify(user));
    }
  }, [user]);

  console.log('user', user);

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

  // const handleChange = ({ target: { name, value } }) => {
  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // };

  return (
    <>
      <Header user={user ? user.name : null} onClick={auth.logout()} />
      {message && <Notification message={message} />}
      <main className="container">{user ? <Blogs setMessage={setMessage} /> : <LoginForm />}</main>
    </>
  );
};

export default connect(state => ({
  user: state.auth,
}))(App);
