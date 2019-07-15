import React, { useState } from 'react';
import blogService from '../services/blogs';
import InputGroup from './InputGroup';

const BlogForm = ({ renderBlogs, setMessage, setVisibility }) => {
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
      text: `'${blog.title}' added`,
    });
    setTimeout(() => setMessage(null), 5000);
    setBlog(emptyBlog);
    renderBlogs();
    setVisibility(false);
  };

  return (
    <div>
      <h4 className="display-4 text-center">Add new Blog</h4>
      <form onSubmit={handleSubmit}>
        <InputGroup
          label="Title"
          name="title"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <InputGroup
          label="Author"
          name="author"
          value={blog.author}
          onChange={handleChange}
          required
        />
        <InputGroup
          label="url"
          name="url"
          value={blog.url}
          onChange={handleChange}
          required
        />
        <div>
          <button
            className="btn btn-outline-success mr-2"
            type="submit"
          >
            Create
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            type="button"
            onClick={() => setVisibility(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
