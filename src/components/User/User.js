import React, { useEffect } from 'react';
import Spinner from '../Spinner';

const User = ({ name, blogs, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [name, fetchUsers]);

  if (!name || !blogs) {
    return <Spinner />;
  }

  return (
    <div>
      <h3 className="display-4">Stats for {name}</h3>
      {blogs.length ? (
        <ul className="list-group list-group-flush">
          {blogs.map(b => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={b.id}
            >
              {b.title}
              <span className="badge badge-primary badge-pill">{b.likes} likes</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs</p>
      )}
    </div>
  );
};

export default User;
