import React, { useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const Toggle = React.forwardRef(({ btnLabel, children }, ref) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  useImperativeHandle(ref, () => ({ toggleVisibility }));

  return (
    <div>
      {visible
        ? (
          <>
            {children}
            <button
              className="btn btn-sm btn-outline-danger mt-2"
              onClick={toggleVisibility}
            >
              Cancel
            </button>
          </>
        )
        : (
          <button
            className="btn btn-sm btn-primary"
            onClick={toggleVisibility}
          >
            {btnLabel}
          </button>
        )
      }
    </div>
  );
});

Toggle.propTypes = {
  btnLabel: PropTypes.string.isRequired,
};

export default Toggle;
