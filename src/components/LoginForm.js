import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
  handleSubmit,
  handleChange,
  credentials: { username, password },
}) => (
  <form onSubmit={handleSubmit}>
    <p>Login for BlogList</p>
    <div>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
    </div>
    <div>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
    </div>
    <button type="submit">Login!</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
