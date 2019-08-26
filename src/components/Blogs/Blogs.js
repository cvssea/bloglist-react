import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Blogs = ({ blogs, getBlogs }) => {
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="container">
      <h2 className="display-4">Blogs</h2>
      <div className="list-group list-group-flush text-center">
        {blogs
          .sort((a, b) => b.likes - a.likes)
          .map(b => (
            <Link
              to={`/blogs/${b.id}`}
              key={b.id}
              className="list-group-item list-group-item-action"
            >
              {b.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
