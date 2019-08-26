import React, { useEffect } from 'react';

const User = ({ name, blogs, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [name, fetchUsers]);

  if (!name || !blogs) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="display-4">Stats for {name}</h3>
      {blogs.length ? (
        <ul className="list-group list-group-flush">
          {blogs.map(b => (
            <li
              className="list-group-item d-flex justify-content-around align-items-center"
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
