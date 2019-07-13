import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../services/blogs';

const Blogs = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await blogService.getAll();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      {children}
      {
        blogs.map(b => <Blog key={b.id} {...b} />)
      }
    </div>
  );
};

export default Blogs;
