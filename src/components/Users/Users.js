import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div>
      <h2 className="display-4">Users</h2>
      <table className="table table-hover">
        <thead className="bg-secondary text-light">
          <tr>
            <th scope="col">User</th>
            <th scope="col">Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users
            && users.map(u => (
              <tr key={u.id}>
                <td>
                  <Link to={`/users/${u.id}`}>{u.name}</Link>
                </td>
                <td>{u.blogs.length}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
