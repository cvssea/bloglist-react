import React, { useState } from 'react';

const Toggle = ({ btnLabel, children }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

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
};

Toggle.defaultProps = {
  btnLabel: 'Show',
};

export default Toggle;
