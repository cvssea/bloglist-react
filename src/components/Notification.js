import React from 'react';

const Notification = ({ message }) => (
  <section className="container mt-4">
    <div className={`alert alert-${message.success ? 'success' : 'danger'}`}>
      {message.text}
    </div>
  </section>
);

export default Notification;
