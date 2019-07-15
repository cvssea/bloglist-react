import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({
  label,
  type,
  name,
  value,
  onChange,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

InputGroup.defaultProps = {
  type: 'text',
  label: '',
};

InputGroup.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
