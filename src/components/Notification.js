import React from 'react';

const Notification = ({ message }) => (
  <div className={`Notification ${message.success ? 'success' : 'error'}`}>
    {message.text}
  </div>
);

export default Notification;
