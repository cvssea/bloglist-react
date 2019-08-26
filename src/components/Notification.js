import React from 'react';

const Notification = ({ message }) => (
  <section className="container mt-4">
    <div className="alert">
      {message}
    </div>
  </section>
);

export default Notification;
