import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import Toggle from './Toggle';
import BlogForm from './BlogForm';
import blogService from '../services/blogs';

const Blogs = ({ setMessage }) => {
  const [blogs, setBlogs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const blogFormRef = React.createRef();

  useEffect(() => {
    const getBlogs = async () => {
      const data = await blogService.getAll();
      setBlogs(data);
      setSubmitted(false);
    };
    getBlogs();
  }, [submitted]);

  const renderBlogs = (toggle = false) => {
    setSubmitted(true);
    if (toggle) {
      blogFormRef.current.toggleVisibility();
    }
  };

  return (
    <div className="container">
      <h2 className="display-2">Blogs</h2>
      <Toggle btnLabel="Add Blog" ref={blogFormRef}>
        <BlogForm
          setMessage={setMessage}
          renderBlogs={renderBlogs}
        />
      </Toggle>
      {
        blogs
          .sort((a, b) => b.likes - a.likes)
          .map(b => (
            <Blog key={b.id} {...b} renderBlogs={renderBlogs} />
          ))
      }
    </div>
  );
};

export default Blogs;
