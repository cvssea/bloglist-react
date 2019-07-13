import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import BlogForm from './BlogForm';
import blogService from '../services/blogs';

const Blogs = ({ children, setMessage }) => {
  const [blogs, setBlogs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await blogService.getAll();
      setBlogs(data);
      setSubmitted(false);
    };
    getBlogs();
  }, [submitted]);

  const renderBlogs = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Blogs</h2>
      {children}
      <BlogForm setMessage={setMessage} renderBlogs={renderBlogs} />
      {
        blogs.map(b => <Blog key={b.id} {...b} />)
      }
    </div>
  );
};

export default Blogs;
