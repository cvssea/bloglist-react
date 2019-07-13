import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Blogs from './components/Blogs';
import blogService from './services/blogs';
import auth from './services/auth';

const App = () => {
  const emptyCredentials = {
    username: '',
    password: '',
  };
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jsonUser = window.localStorage.getItem('bloglistUser');
    if (jsonUser) {
      const loggedUser = JSON.parse(jsonUser);
      setUser(loggedUser);
      blogService.setToken(loggedUser.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userData = await auth.login(credentials);
      window.localStorage.setItem('bloglistUser', JSON.stringify(userData));
      blogService.setToken(userData.token);
      setUser(userData);
    } catch (e) {
      console.log('LoginError:', e);
    }
    setCredentials(emptyCredentials);
  };

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <>
      { user
        ? (
          <Blogs>
            <p>
              {user.name}
              {' '}
              logged in
              {' '}
              <button
                type="button"
                onClick={auth.logout(setUser)}
              >
                logout
              </button>
            </p>
            <BlogForm />
          </Blogs>
        )
        : (
          <LoginForm
            handleSubmit={handleLogin}
            handleChange={handleChange}
            credentials={credentials}
          />
        )
      }
    </>
  );
};

export default App;
