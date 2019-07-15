import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from './InputGroup';

const LoginForm = ({
  handleSubmit,
  handleChange,
  credentials: { username, password },
}) => (
  <div className="container d-flex justify-content-center">
    <form className="col-sm-8 col-md-6" onSubmit={handleSubmit}>
      <h2 className="text-center mt-3">Login</h2>
      <InputGroup
        label="Username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <InputGroup
        type="password"
        label="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <button
        className="btn btn-primary"
        type="submit"
      >
        Login!
      </button>
    </form>
  </div>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
