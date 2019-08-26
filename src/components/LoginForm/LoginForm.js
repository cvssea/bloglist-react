import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from '../InputGroup';

const LoginForm = ({ login }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form className="col-sm-8 col-md-6" onSubmit={handleSubmit}>
        <h2 className="text-center mt-3">Login</h2>
        <InputGroup
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <InputGroup
          type="password"
          label="Password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Login!
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
