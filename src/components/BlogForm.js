import React, { useState } from 'react';
import blogService from '../services/blogs';

const BlogForm = ({ renderBlogs, setMessage }) => {
  const emptyBlog = {
    title: '',
    author: '',
    url: '',
  };
  const [blog, setBlog] = useState(emptyBlog);

  const handleChange = ({ target: { name, value } }) => {
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    blogService.create(blog);
    setMessage({
      success: true,
      text: `A new blog: ${blog.title} added`,
    });
    setTimeout(() => setMessage(null), 5000);
    setBlog(emptyBlog);
    renderBlogs();
  };

  return (
    <div>
      <h3>Add new Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="author">
            Author:
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="url">
            url:
            <input
              type="text"
              name="url"
              value={blog.url}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default BlogForm;
